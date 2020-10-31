#!/bin/bash

CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -o build/snapdrop main.go