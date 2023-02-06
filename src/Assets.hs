{-# LANGUAGE OverloadedStrings #-}

module Assets where

import Hakyll (Pattern, Rules, compile, copyFileCompiler, idRoute, match, route)

copy :: Pattern -> Rules ()
copy p = match p (route idRoute >> compile copyFileCompiler)

copyAssets = do
  copy "assets/images/*"
  copy "assets/css/*"
  copy "assets/js/**"
  copy "assets/fonts/*"
  copy "assets/webfonts/*"
  copy "CNAME"
