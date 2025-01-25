# Festique

Festique is a event management platform designed to simplify the process of organizing and managing events effectively. This repository provides all the necessary tools and steps to get started with the application.

## Prerequisites

Before setting up the application, ensure that you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Make](https://www.gnu.org/software/make/)

## Repository

Git URL: [https://github.com/Festriq/App.git](https://github.com/Festriq/App.git)

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/Festriq/App.git
cd App
```

### Create the `.env` File

Ensure you have an `.env` file in the root of the project. You can create one by copying the example file:

```bash
cp .env.example .env
```

Fill out the necessary environment variables in the `.env` file.

### Start the Application

To start the application using Docker Compose, run:

```bash
make up
```

If an `.env` file is missing, the setup will prompt you to create one before proceeding.

The application will build and start all necessary services in Docker containers. It will also check if the server is ready and accessible.

### Access the Application

Once the server is up and running, the application should be accessible at [http://localhost](http://localhost).

---

## Makefile Commands

The `Makefile` provides shortcuts to manage the application easily. Below is a list of available commands:

### Bring Up the Application

```bash
make up
```
Starts the application by building and running Docker Compose services.

### Check Server Status

```bash
make check-url
```
Waits until the server is ready and accessible.

### Clear Application Cache

```bash
make clear
```
Clears cache, routes, and configuration files.

### Access Web Container via SSH

```bash
make ssh-web
```
Opens a bash shell inside the `web` container.

### Access MySQL Database

```bash
make mysql
```
Connects to the `db` container's MySQL database using the root user.

### Run Tests

```bash
make test
```
Runs the application's test suite using Artisan.

### Migrate and Seed Database

```bash
make migrate-db
```
Runs database migrations and seeds data.

### Refresh Database

```bash
make refresh-db
```
Drops all tables, re-runs migrations, and seeds the database.

### Refresh Testing Database

```bash
make refresh-testing-db
```
Drops and recreates the testing database, applies migrations, and seeds the database for testing purposes.

### Bring Down the Application

```bash
make down
```
Stops and removes all Docker Compose services, including volumes.

---

## Additional Notes

- Ensure that Docker and Docker Compose are running before executing any commands.
- The default database credentials for MySQL can be found in the `.env` file. The `root` user password is `password`, and the database name is `festriq`.
- Feel free to customize the `Makefile` commands to suit your development environment.

---

## License

This project is licensed under the [MIT License](LICENSE).
