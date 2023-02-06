{-# LANGUAGE OverloadedStrings #-}

module Site where

import Blog (postCtx)
import Core (compiler, defaultTemplate)
import Hakyll (applyAsTemplate, compile, defaultContext, fromFilePath, fromList, getResourceBody, idRoute, listField, loadAll, match, recentFirst, relativizeUrls, route, setExtension)

compileContents = do
  match (fromList $ map (fromFilePath . ("contents/" <>)) ["about.md", "teaching.md", "research.md", "development.md"]) $ do
    route $ setExtension "html"
    compile $
      compiler
        >>= defaultTemplate defaultContext
        >>= relativizeUrls

compileIndex = do
  match "index.html" $ do
    route idRoute
    compile $ do
      posts <- recentFirst =<< loadAll "posts/*"

      let indexCtx =
            listField "posts" postCtx (return $ take 3 posts)
              <> defaultContext

      getResourceBody
        >>= applyAsTemplate indexCtx
        >>= defaultTemplate indexCtx
        >>= relativizeUrls
