#!/bin/bash

cd $RECIPE_DIR
$PYTHON setup.py install

nbpath="${PREFIX}/share/jupyter/nbextensions"
mkdir -p $nbpath
cp -r ./timbr/nbextension/timbr $nbpath
