{-# LANGUAGE OverloadedStrings #-}

module Site where

import Blog (postCtx)
import Core (compiler, defaultTemplate)
import Hakyll (field, itemBody, makeItem, applyAsTemplate, compile, defaultContext, fromFilePath, fromList, getResourceBody, idRoute, listField, loadAll, match, recentFirst, relativizeUrls, route, setExtension)

compileContents = do
  match (fromList $ map (fromFilePath . ("contents/" <>)) ["publications.md", "cv.md" ]) $ do
    route $ setExtension "html"
    compile $
      compiler
        >>= defaultTemplate defaultContext
        >>= relativizeUrls

compileIndex bibliography = do
  match "index.html" $ do
    route idRoute
    compile $ do
      posts <- recentFirst =<< loadAll "posts/*"

      let bibliography' = mapM makeItem bibliography
      let bibCtx = field "pub" (return . itemBody)
      let indexCtx = listField "bibliography" bibCtx bibliography'
                  <> listField "posts" postCtx (return $ take 3 posts)
                  <> defaultContext

      getResourceBody
        >>= applyAsTemplate indexCtx
        >>= defaultTemplate indexCtx
        >>= relativizeUrls
