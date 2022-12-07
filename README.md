# PRUEBA-TECNICA-TALANA
 
This project aims to show the use of the cypress tool, as a test automation tool where you can easily run the tests corresponding to the system with the various use cases required.

## Installation

- Install auth-api-tutorial-cypress with npm (you can install nvm and configure npm version 8.15.0).

### Optional installation

- You can optionally install lockgit from: https://github.com/jswidler/lockgit

## Environment Variables

To run this project, you will need to add the .env file to the project or open it with:

```bash
    lockgit set-key G5H52ENNMLZ4HCTRFSIC2B2WTTHD2X2LN5JRPMCMLYZK46RGHQ3Q
```

```bash
    lockgit open
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/franciscoCabezasVega/QA-Test-Shippify.git
```

Go to the project directory

```bash
  cd QA-Test-Shippify/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npx cypress run
```

## Appendix

With Cypress we can easily automate many tests whether they are E2E or Rest-API, in this opportunity the respective tests were made when consulting a list of vehicles by the corresponding id, adding a vehicle with an appropriate json body and one that was not valid, in this way to validate the different scenarios presented. At the end of the execution of the automated tests the server may no longer work and it may be necessary to restart the application, the reason for this is unknown at the moment but it will be delivered as a minimum viable for this technical test.

The faker library is also used so that the data generated is always random data with relevant information that allows to have a database with real data.

## Tech Stack

**Security:** Dotenv, lockgit

**Server:** Node, Express, nodemon, morgan

**Database:** MySQL

**Automation Test:** Cypress, faker, postman