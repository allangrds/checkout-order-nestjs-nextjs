client-up:
	cd client && docker-compose up
client-bash:
	cd client && docker exec -it client /bin/bash
client-down:
	cd client && docker-compose down
client-clean:
	cd client && docker rm client
client-prune:
	cd client && docker rmi client-client
api-up:
	cd api && docker-compose up api
api-bash:
	cd api && docker exec -it api /bin/bash
api-down:
	cd api && docker-compose down api
api-clean:
	cd client && docker rm api
api-prune:
	cd client && docker rmi api-api
docs-up:
	cd api && docker-compose up docs
docs-bash:
	cd docs && docker exec -it docs /bin/bash
docs-down:
	cd api && docker-compose down docs
docs-clean:
	cd client && docker rm docs
docs-prune:
	cd client && docker rmi api-docs


