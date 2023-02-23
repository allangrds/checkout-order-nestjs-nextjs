client-up:
	cd client && docker-compose up
client-down:
	cd client && docker-compose down
client-clean:
	cd client && docker rm client
client-prune:
	cd client && docker rmi client-client
api-up:
	cd api && docker-compose up api
api-down:
	cd api && docker-compose down api
api-clean:
	cd client && docker rm api
api-prune:
	cd client && docker rmi api-api
docs-up:
	cd api && docker-compose up docs
docs-down:
	cd api && docker-compose down docs
docs-clean:
	cd client && docker rm docs
docs-prune:
	cd client && docker rmi api-docs


