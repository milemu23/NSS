#!/bin/bash


#add prefix
mkdir -p archive

cp -r /Users/Munk13/Desktop/NSS/cron-assignment/old/* /Users/Munk13/Desktop/NSS/cron-assignment/archive

cd /Users/Munk13/Desktop/NSS/cron-assignment/archive

for filename in /Users/Munk13/Desktop/NSS/cron-assignment/archive *; do mv "$filename" "old_$filename";
done

/bin/bash /Users/Munk13/Desktop/NSS/cron-assignment/old/old_ips.sh
