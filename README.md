## About this App

This is a very basic Todo App made with vanilla Node.js with minimum external Libraries. It supports all the CRUD operations.
This is just a backend which responds with json object. In order to consume the APIs of this backend, you will also need a frontend Application. I have a separate repository for that, which can be found on the below link:
[Click here for frontend repo](https://github.com/shashwat2702/todoFrontend)

## Important External Dependency

You must have MySQL installed on your system to support this backend. MySQL holds the list of tasks.

## Instructions to run this project

1. Clone this repo.
2. Navigate to the project directory inside any terminal.
3. Install all the dependencies using: `npm install`.
4. Open this application in any IDE.
5. Go inside src folder -> databaseQueries -> dbParameters.js
6. Replace the user `root` with your MySQL username.
7. Replace the password `password` with your MySQL password.
8. If you MySQL already has any Database with `todoApp` name change it to any unique name.
9. If you are not using MySQL on `localhost`, change the `localhost` to `IPv4 Address` of system having MySQL server.
10. Make sure your MySQL server is running.
11. In order to initialize your Database run the command `npm run dbInit`.
12. Use `npm start` to run the backend.
13. Run the Frontend application. If you have not already set up Fronend [Click here for frontend repo](https://github.com/shashwat2702/todoFrontend) . You will find the instructions to setup the frontend and run it there.



