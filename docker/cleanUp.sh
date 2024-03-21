containerId=$(docker ps -a -q --filter "name=cypress-chrome-$1" --format="{{.ID}}")

if [ ${#containerId} -gt 0 ]
then
	docker rm $(docker stop $containerId)
    echo "Removed docker container ID $containerId"
else
	echo "No docker container to remove"
fi
