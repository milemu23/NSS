#!/bin/bash


#add prefix
mkdir -p archive

cp -r /Users/Munk13/Desktop/NSS/cron-assignment/old/* /Users/Munk13/Desktop/NSS/cron-assignment/archive

cd /Users/Munk13/Desktop/NSS/cron-assignment/archive

for filename in *; do mv "$filename" "old_$filename";
done

/bin/bash /Users/Munk13/Desktop/NSS/cron-assignment/archive/old_ips.sh
