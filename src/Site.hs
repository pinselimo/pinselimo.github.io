{-# LANGUAGE OverloadedStrings #-}
module Site where

import           Hakyll

config :: Configuration
config = defaultConfiguration
  { destinationDirectory = "docs"
  }

reader :: ReaderOptions
reader = defaultHakyllReaderOptions

writer :: WriterOptions
writer = defaultHakyllWriterOptions
       { writerHTMLMathMethod = MathML
       }

compiler :: Compiler (Item String)
compiler = pandocCompilerWithTransformM reader writer pure

postCtx :: Context String
postCtx =
    dateField "date" "%B %e, %Y" <>
    defaultContext

validBlogPosts :: Pattern
validBlogPosts = (fromGlob "posts/*") .&&. complement (fromGlob "posts/_*")

copy :: Pattern -> Rules ()
copy p = match p (route idRoute >> compily copyFileCompiler)

main :: IO ()
main = hakyllWith config $ do
    copy "assets/images/*"
    copy "assets/css/*"
    copy "assets/js/**"
    copy "assets/fonts/*"
    copy "assets/webfonts/*"

    match validBlogPosts $ do
        route $ setExtension "html"
        compile $ compiler
            >>= loadAndApplyTemplate "templates/post.html"    postCtx
            >>= defaultTemplate (constField "webtitle" "Blog" <> postCtx)
            >>= relativizeUrls

    match (fromList $ map (fromFilePath . ("contents/" <> )) ["about.md","teaching.md","research.md","development.md"]) $ do
        route $ setExtension "html"
        compile $ compiler
            >>= defaultTemplate defaultContext
            >>= relativizeUrls

    create ["contents/blog.html"] $ do
        route idRoute
        compile $ do
            posts <- recentFirst =<< loadAll "posts/*"
            let archiveCtx =
                    listField "posts" postCtx (return posts) <>
                    constField "title" "Blog"             <>
                    constField "image" "/assets/images/blog.jpg" <>
                    defaultContext

            makeItem ""
                >>= loadAndApplyTemplate "templates/blog.html" archiveCtx
                >>= defaultTemplate archiveCtx
                >>= relativizeUrls

    match "index.html" $ do
        route idRoute
        compile $ do
            posts <- recentFirst =<< loadAll "posts/*"

            let indexCtx =
                    listField "posts" postCtx (return $ take 3 posts) <>
                    defaultContext

            getResourceBody
                >>= applyAsTemplate indexCtx
                >>= defaultTemplate indexCtx
                >>= relativizeUrls

    match "templates/*" $ compile templateBodyCompiler
    where defaultTemplate ctx = loadAndApplyTemplate "templates/default.html" ctx

