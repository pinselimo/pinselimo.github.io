{-# LANGUAGE OverloadedStrings #-}

module Publications where

import Control.Applicative ( (<|>) )
import Control.Monad ( (>=>) )
import Data.List ( sortOn )
import qualified Data.Text as T

-- contains the type of a bibtex entry
import Text.BibTeX.Entry ( T(..) )
-- contains bibtex parsers
import qualified Text.BibTeX.Parse as P

import Text.Parsec.String ( parseFromFile )
import Core (defaultTemplate)
import Text.Pandoc ( runPure, readLaTeX, writeMarkdown, readMarkdown, writeHtml5String, def )
import Hakyll (listField, defaultContext, itemBody, makeItem, loadAndApplyTemplate, relativizeUrls, compile, idRoute, route, create)
import qualified Hakyll as Hakyll (field)

createPublicationsSite bibliography = create ["contents/publications.html"] $ do
  route idRoute
  compile $ do
    let bibliography' = mapM makeItem bibliography
    let bibCtx = Hakyll.field "pub" (return . itemBody)
    let indexCtx = listField "bibliography" bibCtx bibliography'
                <> defaultContext

    makeItem ""
      >>= loadAndApplyTemplate "templates/publications.html" indexCtx
      >>= defaultTemplate indexCtx
      >>= relativizeUrls

publicationList :: FilePath -> IO [String]
publicationList filename = do
    -- read and parse bibtex entries
    pubs <- readPubs filename
    -- descending sort by year, then format and return
    let pubs' = runPure $ mapM ((readMarkdown def . T.pack) >=> writeHtml5String def)
              $ map format $ reverse $ sortOn (`field` "year") pubs
    case pubs' of
      (Left e) ->
        error $ "Parsec error in parsing .bib file "
              <> filename <> ":\n" <> show e
      (Right ps) -> return (T.unpack <$> ps)

-- runs a parser P.file on a fiven filename
-- panics when there is a parsing error
readPubs filename = do
    res <- parseFromFile P.file filename
    case res of
      (Left e) ->
        error $ "Parsec error in parsing .bib file "
              <> filename <> ":\n" <> show e
      (Right pubs) -> return pubs

-- reads the entry type
-- and then calls the corresponding formatter
format pub = case entryType pub of
    "article" -> formatArticle pub
    "misc"    -> formatMisc pub
    "unpublished" -> formatUnpublished pub
    "incollection" -> formatMisc pub
    fmt       -> error $ "unsupported .bib entry format: " <> fmt

-- for mandatory fields:
-- throw an error if not present
field :: T -> String -> String
field pub a =
  case lookup a (fields pub) of
    Nothing ->
        error $ "bibliography error: cannot find field "
              <> a <> "in entry " <> identifier pub
    Just v -> v

-- for optional fields
maybeField :: T -> String -> Maybe String
maybeField pub a = lookup a (fields pub)

texToMarkdown :: String -> String
texToMarkdown s =
    let result = runPure $ do
          x <- readLaTeX def (T.pack s)
          writeMarkdown def x
    in case result of
        Left e ->
            error $ "error reading latex commands in the string "
                  <> show s <> ":\n" <> show e
        (Right s') -> T.unpack (T.strip s') <> ". "

makelink s = "[" <> s <> "](https://doi.org/" <> s <> "). "

italicize s = "_" <> s <> "._ "

maybeToStr (Just s) = s
maybeToStr Nothing  = ""

formatArticle pub =  field pub "author"
                  <> ". ("
                  <> field pub "year"
                  <> ") \""
                  <> field pub "title"
                  <> ".\" "
                  <> italicize (field pub "journal")
                  <> maybeToStr (do
                       vol <- maybeField pub "volume"
                       pages <- maybeField pub "pages"
                       return $ vol <> ": " <> pages <> ". ")
                  <> maybeToStr (fmap makelink (maybeField pub "doi"))

formatMisc pub =  field pub "author"
               <> ". ("
               <> field pub "year"
               <> ") \""
               <> field pub "title"
               <> ".\" "
               <> maybeToStr (fmap italicize (maybeField pub "journal" <|>
                                                maybeField pub "publisher"))
               <> maybeToStr (fmap makelink (maybeField pub "doi"))

formatUnpublished pub =  field pub "author"
                      <> ". ("
                      <> field pub "year"
                      <> ") \""
                      <> field pub "title"
                      <> ".\" "
                      <> maybeToStr (fmap texToMarkdown (maybeField pub "note"))
                      <> maybeToStr (fmap makelink (maybeField pub "doi"))

