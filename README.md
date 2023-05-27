# Dockerizing a Nodejs Application

This repository contains the source code and instructions for Dockerizing a Nodejs application. It walks you through the process of creating a Dockerfile, building a Docker image, and running a container for your Node.js application.

## Link to the [meduim](bit.ly/3qfYkbH) article

<br>
<div align="center">
  <img src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*hu_kaw35ijYchxhVgU01fw.jpeg" alt="Nodejs Application" width="70%">
</div>

<br>

## Prerequisites

- Docker: Make sure you have Docker installed on your system. You can download Docker from the official website based on your operating system.
- Nodejs: Ensure that Nodejs is installed on your machine to develop and run the Nodejs application.

## Instructions

```
git clone https://github.com/Adembc/nodejs-docker-demo.git

cd nodejs-docker-demo

docker build -t docker-ts .

docker images

docker run --name node-container -d -e PORT=1920 -p 8030:1920 docker-ts

docker ps
```

You can now access the application on your browser at http://localhost:8030.

<div align="center">
<img src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*nTwBDGtXmTX-9T7DEVGzYg.png" alt="Nodejs Application" width="70%">
</div>
<br>

## Find this library useful? ❤️

Support it by joining **[stargazers](https://github.com/Adembc/nodejs-docker-demo/stargazers)** for this repository⭐️. <br>
Also, **[follow me](https://github.com/adembc)** on GitHub 🤩
