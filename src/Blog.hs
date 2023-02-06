{-# LANGUAGE OverloadedStrings #-}

module Blog where

import Core (compiler, defaultTemplate)
import Hakyll (Context, Pattern, compile, complement, constField, create, dateField, defaultContext, fromGlob, idRoute, listField, loadAll, loadAndApplyTemplate, makeItem, match, recentFirst, relativizeUrls, route, setExtension, (.&&.))

postCtx :: Context String
postCtx =
  dateField "date" "%B %e, %Y"
    <> defaultContext

validBlogPosts :: Pattern
validBlogPosts = fromGlob "posts/*" .&&. complement (fromGlob "posts/_*")

compilePosts = match validBlogPosts $ do
  route $ setExtension "html"
  compile $
    compiler
      >>= loadAndApplyTemplate "templates/post.html" postCtx
      >>= defaultTemplate (constField "webtitle" "Blog" <> postCtx)
      >>= relativizeUrls

createBlogSite = create ["contents/blog.html"] $ do
  route idRoute
  compile $ do
    posts <- recentFirst =<< loadAll "posts/*"
    let archiveCtx =
          listField "posts" postCtx (return posts)
            <> constField "title" "Blog"
            <> constField "image" "/assets/images/blog.jpg"
            <> defaultContext

    makeItem ""
      >>= loadAndApplyTemplate "templates/blog.html" archiveCtx
      >>= defaultTemplate archiveCtx
      >>= relativizeUrls
