<h1 align="center">
    <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1576226426/kxmdozm0odu7e0twlhx3.svg" />
    <br>
    GymPoint Fullstack app
</h1>

## Running the application locally
### Requirements
To run the app, you will need [Git](https://git-scm.com), [Node.js](https://nodejs.org/), [Yarn](https://yarnpkg.com/), [PostgreSQL](https://www.postgresql.org/), [Docker](https://www.docker.com/) and [Redis](https://redis.io/) installed on your computer.
</br></br>
Start your docker application.<br/>
Install the follow docker images (Redis, Postgres).<br/>

```bash
# install Redis image
docker run --name imageName -p 6379:6379 -d -t redis:alpine

# install Postgres image (if you don't specify an username it will be postgres by default)
docker run --name imagename -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# start Redis
docker start imageName

# start Postgres
docker start imageName

```
Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://github.com/LeandroGioria/GymPointApp.git

# go into the backend folder
cd GymPointApp/backend

#install the backend dependencies
yarn

```
If necessary you can enter with your informations into the .env file that is provided in the backend folder, you can change the variables according to your environment.
```bash
# Create a database called gympoint
yarn sequelize db:migrate

# run migrations
yarn sequelize db:migrate

# run seeds
yarn sequelize db:seed:all

# run api
yarn dev

# in another tab in the terminal run the queue
yarn queue

# in another tab in the terminal install the frontend dependencies and run it 
cd GymPointApp/frontend
yarn
yarn start
```
Use this credentials to access the web application
<blockquote><strong>email:</strong> admin@gympoint.com</blockquote>
<blockquote> <strong>senha:</strong> 123456</blockquote>

For mobile you need the Android emulator with the SDK installed or IOS emulator and the react-native cli.

<blockquote>The project was developed and tested on Android device</blockquote>

```bash
# install dependencies and run the mobile
cd mobile
yarn

# first open the emulator and start the react native server
yarn start

# in another tab install and run the app
yarn android

```
<blockquote>This part can be tricky, if you face some error, try running yarn start --reset-cache and yarn android again.</blockquote>

[LinkedIn](https://www.linkedin.com/in/leandrogioria/)
