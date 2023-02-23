client-up:
	cd client && docker-compose up
client-down:
	cd client && docker-compose down
client-clean:
	cd client && docker rm client
client-prune:
	cd client && docker rmi client-client
api-up:
	cd api && docker-compose up
api-down:
	cd api && docker-compose down
api-clean:
	cd client && docker rm api && docker rm docs
api-prune:
	cd client && docker rmi api-api && docker rmi api-docs


