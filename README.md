# SimpleHOA

SimpleHOA is an application to aid homeowner association managers. It automates the process of adding members, collection dues, creating work tickets, calendar events and managing financials.
http://www.heirbloom.fun/

<img align="left" title="Manage your HOA from an easy-to-use dashboard." src="https://rkportfolio-stuff.s3.amazonaws.com/SimpleHoa/SimpleHoa+dashboard.JPG" height="250" width="380"><img align="justify" title="See your HOA financials broken down by month." src="https://rkportfolio-stuff.s3.amazonaws.com/SimpleHoa/financials.JPG" height="250" width="380">

## Getting Started
These instructions will allow you to get a copy of this project running on your local machine.

### Prerequisites
Before starting, ensure you have met the following requirements:

You have installed the latest version of npm and node. If not, follow the instructions from this link:
`https://www.npmjs.com/get-npm`.

You have installed MySQL on your local machine. If not, follow the steps found here: `https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04`.

Fork this repository and clone it to your local machine.

You'll find three folders in this repository:
+ app/models -> server-side repo
+ client -> client-side repo
+ documents -> code related to financial calculations and graph

Install the required dependencies by running `npm install` from the root project directory.

## Development server
In order to start the server, you will need to be shelled into MySQL and have a .env file with appropriate variables:

+ DATABASE = 'heirbloom'
+ USER_NAME = whatever username you use to access MySQL
+ USER_PASSWORD = whatever passport you use to access MySQL
+ HOST = 'localhost'
+ DB_PORT = 3306
+ YOUR_GOOGLE_API_KEY= API key you recieve from Google in order to use the calendar and sync events

Run `npm start` to start the dev server. Navigate to `http://localhost:3000/` to see the application running on your local machine.

The database will need some data populated into it upon starting the server. This can be found in the `seeder.js` file. Run `node seeder.js` to populate the database with said data and then re-start the server.

## Build

Run `build:client-prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Reactstrap](https://reactstrap.github.io/) - Front end design
* [Node.js](https://nodejs.org/en/docs/) - Server-side runtime environment
* [Express](https://expressjs.com/en/api.html) - Server-side framework 
* [MySQL w/Sequelize](https://www.mysql.com/) - RDBMS; Sequelize used as an ORM in conjuctino with MySQL
* [Firebase](https://www.npmjs.com/package/jsonwebtoken) - Authentication using Google Sign-In stragety


## Authors
* Product Owner: Sam De La Fuente
* Scrum Master: Geoffrey Ian Ward
* Development Team Members: Daniel Murphy, Raphael Khan


## Acknowledgments

* The friendly staff at Operation Spark
