#!/usr/bin/env bash
set -e

command -v unzip >/dev/null 2>&1 || { echo >&2 "Unzip is required. Aborting."; exit 1; }

cd drivers
unzip chromedriver_mac64_2.27.zip
mv chromedriver chromedriver_mac64_2.27
