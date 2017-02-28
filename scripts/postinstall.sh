#!/usr/bin/env bash
set -e

if [ ! -e "unzip" ]; then
  echo "Unable to finish installing: missing unzip" 1>&2
  exit 1
fi

cd drivers
unzip mac32_chromedriver_v2.7.zip
mv chromedriver mac32_chromedriver_v2.7
