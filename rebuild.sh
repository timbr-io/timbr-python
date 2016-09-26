#!/bin/bash

OUTPUT_FILE=$(conda build --output .)
conda build .
conda convert -p linux-64 $OUTPUT_FILE
rm $OUTPUT_FILE
cp linux-64/* docker/
rm -rf linux-64

docker build -f docker/timbr-convert -t timbr/timbr-convert:development docker/
