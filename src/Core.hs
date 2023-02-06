{-# LANGUAGE OverloadedStrings #-}

module Core where

import Hakyll (Compiler, Configuration (destinationDirectory), Item, defaultConfiguration, defaultHakyllReaderOptions, defaultHakyllWriterOptions, loadAndApplyTemplate, pandocCompilerWithTransformM)
import Text.Pandoc.Options (HTMLMathMethod (MathML), ReaderOptions, WriterOptions (writerHTMLMathMethod))

config :: Configuration
config =
  defaultConfiguration
    { destinationDirectory = "docs"
    }

reader :: ReaderOptions
reader = defaultHakyllReaderOptions

writer :: WriterOptions
writer =
  defaultHakyllWriterOptions
    { writerHTMLMathMethod = MathML
    }

compiler :: Compiler (Item String)
compiler = pandocCompilerWithTransformM reader writer pure

defaultTemplate = loadAndApplyTemplate "templates/default.html"
