#!/bin/bash
# Script to start Jekyll server with correct Ruby path and encoding

export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
cd /Users/leydatelles/profio1997.github.io
bundle exec jekyll serve

