#!/usr/bin/env bash
set -e

command -v unzip >/dev/null 2>&1 || { echo >&2 "Unzip is required. Aborting."; exit 1; }

cd drivers
unzip mac32_chromedriver_2.7.zip
mv chromedriver mac32_chromedriver_2.7
