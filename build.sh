#!/bin/bash

build() {
    echo 'building react'

    rm -rf dist

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-scripts build

    mkdir dist
    mv build/* dist
    rm -rf build

    mv dist/index.html dist/popup.html
    cp public/frame.css dist/frame.css
}

build
