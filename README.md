# Orthanc DICOM Imaging Exploration

This project integrates [Orthanc](https://www.orthanc-server.com/), a lightweight, open-source DICOM server, with an authentication server built using Node.js (Express) and a MySQL server for data storage. Additionally, it includes PhpMyAdmin for easy management of the MySQL database.

## Table of Contents
- [Orthanc DICOM Imaging Exploration](#orthanc-dicom-imaging-exploration)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Accessing PhpMyAdmin](#accessing-phpmyadmin)
  - [Docker Compose Structure](#docker-compose-structure)

## Features

- **Orthanc DICOM Server**: A lightweight and open-source DICOM server accessible at http://localhost:8042.
- **Authorization Server**: A custom authentication server for Orthanc running at http://localhost:8080.
- **MySQL Server**: A MySQL server for data storage.
- **PhpMyAdmin**: Web-based MySQL management tool accessible at http://localhost:8081.

## Prerequisites

- [Docker](https://www.docker.com/get-started)

## Installation

1. Clone this repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2. Create a .env file in the root directory with the following environment variables:
    ```
    DB_HOST=mysql-server
    DB_DATABASE=demo
    DB_USERNAME=demo
    DB_PASSWORD=demo
    ```
3. Run the Docker Compose command to build and start the containers:
    ```
    docker-compose up -d
    ```

## Configuration

Orthanc Configuration: Modify orthanc-config/plugins.json to suit your Orthanc server configuration.

## Usage

- The Orthanc DICOM server is accessible at http://localhost:8042.
- The Orthanc Authorization Server is running at http://localhost:8080.
- PhpMyAdmin is accessible at http://localhost:8081.
- Post dicom file using CURL, execute:
    ```
    curl -v -X POST -H 'Token: demo' --data-binary @image-00000.dcm http://localhost:8042/instances
    ```
- Get study metadata via DICOM-WEB plugin using CURL, execute:
    ```
    curl -v -H 'Token: demo' -H 'Content-type: application/json' http://localhost:8042/dicom-web/studies/1.2.826.0.1.3680043.8.1055.1.20170626100116652.756727516.6235062/metadata
    ```

## Accessing PhpMyAdmin

PhpMyAdmin is configured to connect to the MySQL server. Access it by visiting http://localhost:8081 in your browser. Use the credentials defined in your .env file.

## Docker Compose Structure
- Orthanc: DICOM server.
- Orthanc Authorization Server: Custom authentication server for Orthanc.
- Orthanc MySQL Server: MySQL server for data storage.
- Orthanc PhpMyAdmin: Web-based MySQL management tool.

