# MS SQL, Sequelize, and TypeScript Integration
Full written guide: [Build Type Safe API with Sequelize TypeScript and Express.js](https://dev.to/franciscomendes10866/how-to-use-sequelize-orm-with-typescript-3no)

## ⚙️ Getting Started

### Project Setup

How to setup a local environment:

1. Clone the repository.

```
git clone ChickenCombo/sequelize
```

2. Access the project directory and install dependencies.

```
cd sequelize
npm install
```

3. [Set up your .env variables](#setting-up-environment-variables)

4. Start the server.

```
npm run dev
```

### Setting up environment variables

1. Create a .env file on your root directory then paste and fill up the following .env variables:
```
HOST=
DATABASE=
USERNAME=
PASSWORD=
PORT=
```

`HOST`: Open terminal, type `ipconfig`, find 'IPv4 Address', then paste the IP address.

`DATABASE`: Create a new database in MS SQL then paste the database name.

`USERNAME` and `PASSWORD`: [Create a new user](https://www.youtube.com/watch?v=dcEfLCkHEyQ) then paste your login credentials.

`PORT`: Open SQL Server Management Studio (SSMS), click 'New Query', paste the code below, execute it, then paste the port.

```
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on', N'any', NULL, NULL, N'asc' 
GO
```


