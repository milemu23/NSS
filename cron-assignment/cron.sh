#!/bin/bash
PATH=/home/michelle


echo $PATH 
# files to be moved
FILES=$PATH"/media/sf_sandbox/cron-assignment"

echo $FILES

#move to archive
ARCHIVE=$PATH"/archive"

echo $ARCHIVE

# add prefix
mkdir -p archive

cp -r $PATH/$FILES/* $ARCHIVE

cd $ARCHIVE

rename 's/^/old_/' *

/bin/bash /home/michelle/media/sf_sandbox/cron-assignment/ips.sh



