# The North Backend

A backend API system for the North credit society. This API serves both the web app and mobile app that are on alternate repositories.

## Installation

To install this application, make sure that you have installed docker in your computer then download this repository to your computer using git clone command like:
`git clone https://github.com/kizomanizo/thenorth-backend.git`
After cloning the repo, move inside the downloaded directory by issuing the following command:
`cd thenorth-backend`
Once inside the directory, rename the .env-sample to just `.env` and edit it using your facorite editor to match whichever preferences you have, do not use it as it is because those default credentials are known to everybody on the internet. use your own passwords, ports and usernames. The env file contains the following fields:
Field | Description
---------|------------
PORT | NodeJS port
NODE_ENV | production or development
JWT_SECRET | Secret login tokens
TOKEN_EXPIRY | 1d, 2y, 1w etc.
SALT_ROUNDS | 8 to 12 is ok
DATABASE_URL | Prisma DB url see eg.
MYSQLDB_ROOT_PASSWORD | password
MYSQLDB_DATABASE | db_name
MYSQLDB_USER | username
MYSQLDB_PASSWORD | password
MYSQLDB_LOCAL_PORT | 3307
MYSQLDB_DOCKER_PORT | 3306
NODE_LOCAL_PORT | 4004
NODE_DOCKER_PORT | 4003
DEBUG_LOCAL_PORT | 9229
DEBUG_DOCKER_PORT | 9229

For mysql Prisma URL, the format should be like: `mysql://root:password@database:PORT/DB` and remember to change the password to something real, the 'database' is the name of the DB container as specified in the docker-compose file. The port should be the number that is in MYSQLDB_DOCKER_PORT and the DB should be the value of the database name as specified in MYSQLDB_DATABASE.

## Running

When ready to run the app you do not need to install node dependencies or MySQL, Docker will automate that for you, use the following docker command:
`docker compose up`
This command will automate everything from installing NodeJS, its dependencies, mysql and an admin interface. For the first time this will take a while but every other start of the app will be faster.

Once the app is up and running, you will get three containers in total, an API, MariaDB database and an Adminer interface for accessing the DB tools. You can access each service by using its chosen port as you may have specified in your `.env` file.

### Backend API

You can access it through a GET request to `localhost:4004` and note that the value 4004 should be whatever is in NODE_LOCAL_PORT to access the root path of the API. all other paths will be relative from this, e.g. a POST request to `localhost:4004/users/login` for login endpoint.

### The Database

To access the database, you should use your browser and go to `localhost:8080` to access the Adminer interface using the username you specified in MYSQLDB_USER and the password in MYSQLDB_PASSWORD. The server is the database container name e.g. `database` as we specified by default.

### Initial Super User

**@todo:** To be completed later...

## Author

Kizito S.M.

## License

MIT

## Version

1.0.1
