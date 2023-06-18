build:
	docker-compose build

start:
	docker-compose up

stop:
	docker-compose down

dev: build start
