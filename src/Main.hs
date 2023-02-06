{-# LANGUAGE OverloadedStrings #-}

module Main where

import Assets (copyAssets)
import Blog (compilePosts, createBlogSite, postCtx)
import Core (compiler, config, defaultTemplate)
import Hakyll (compile, hakyllWith, match, templateBodyCompiler)
import Site (compileContents, compileIndex)

main :: IO ()
main = hakyllWith config $ do
  copyAssets

  compilePosts
  createBlogSite

  compileContents
  compileIndex

  match "templates/*" $ compile templateBodyCompiler
