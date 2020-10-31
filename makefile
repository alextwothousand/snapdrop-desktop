.PHONY: build test

default: build

test:
	go run main.go

build: 
	./entrypoint.sh