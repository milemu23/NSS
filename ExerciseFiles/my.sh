#!/bin/bash

[[ "cat" == "cat" ]]
echo $?

[[ "cat" == "dog" ]]
echo $?

[[ 20 > 100 ]]
echo $?

[[ 20 -gt 100 ]]
echo $?

a=""
b="cat"
[[ -z $a && -n $b ]]
echo $?
