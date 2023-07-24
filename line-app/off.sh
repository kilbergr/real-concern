#!/bin/sh

set -x

echo "Plug turning off..."
kasa --type plug --host $1 off
echo "Plug turned off."