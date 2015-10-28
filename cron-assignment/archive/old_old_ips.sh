#!/bin/bash

declare -a myips

myips=($(cat ipAdd.txt | awk '{print $2}'))

let i=0
while (( ${#myips[@]} > i)); do
	printf -v d "{\n\"ipaddress\":\t\"${myips[i++]}\",\n},\n"
echo "$d"

done
