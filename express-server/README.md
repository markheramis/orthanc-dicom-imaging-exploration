# DICOM Authentication Server

This is a simple Node.js application for handling authentication requests related to DICOM (Digital Imaging and Communications in Medicine) data. The server is designed to authenticate requests based on a provided token.

## Table of Contents
- [DICOM Authentication Server](#dicom-authentication-server)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Authentication](#authentication)
  - [Docker](#docker)

## Installation

To install the dependencies, use the following command:

```bash
npm install
```

## Usage
Run the server using the following command:

```
npm start
```

The server will be running on http://0.0.0.0:8080.

## Authentication

The server exposes an authentication endpoint at /auth that accepts POST requests. The authentication process is based on a provided token in the request body. If the token matches the expected value ("demo" in this case), the operation is allowed; otherwise, access is denied.

Example request:

```
{
  "token-value": "demo"
}
```

Example response:

```
{
  "granted": true,
  "validity": 0
}
```

## Docker

This application can also be run using Docker. Use the following commands to build and run the Docker image:

```
docker build -t dicom-auth-server .
docker run -p 8080:8080 dicom-auth-server
```
