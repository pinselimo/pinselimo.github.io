{-# LANGUAGE OverloadedStrings #-}

module Main where

import Assets (copyAssets)
import Blog (compilePosts, createBlogSite, postCtx)
import Core (compiler, config, defaultTemplate)
import Hakyll (compile, hakyllWith, match, templateBodyCompiler)
import Site (compileContents, compileIndex)
import Publications(publicationList, createPublicationsSite)

main :: IO ()
main = do
  bibliography <- publicationList "contents/bibliography.bibtex" 
  hakyllWith config $ do
    copyAssets
 
    compilePosts
    createBlogSite
 
    --compileContents
    compileIndex bibliography
    createPublicationsSite bibliography
 
    match "templates/*" $ compile templateBodyCompiler
