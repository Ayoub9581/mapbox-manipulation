#!/bin/bash

echo "Updating database"
python manage.py migrate


#echo "Loading initial data"
#for fix in fixtures/*.json
#do 
#	echo "Loading fixtures for `basename $fix .json`..."
#	python manage.py loaddata $fix
#done

echo "Notifying team"
