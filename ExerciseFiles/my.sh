#!/bin/bash

i=1
while read f; do
	echo $f
	((i++))
done < file.txt

