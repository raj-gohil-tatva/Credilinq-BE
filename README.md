Note: Please use the node version `v18.16.0`

## How to setup?

```bash
git clone https://github.com/raj-gohil-tatva/Credilinq-BE.git
```

Navigate to the main directory and install the dependencies:

```bash
npm install
```

This project uses the PostgreSQL database, so make sure you have PostgreSQL installed on your system.

Open PGAdmin and create a new empty database named `credilinq-local`.

Run the migration(s) using the following command:

```bash
npm run migration:run
```

Start the development server by running the following command:

```bash
npm run start:dev
```

You are now ready to go! Use the frontend or Postman to check the API(s).
