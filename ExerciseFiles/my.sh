#!/bin/bash

flashingred=$(tput setab 0; tput setaf 1; tput blink)
red=$(tput setab 0; tput setaf 1)
none=$(tput sgr0)
echo -e $flashingred"ERROR: "$none$red"Something went wrong."$none
