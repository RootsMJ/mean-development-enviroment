# mean-development-enviroment
Full development enviroment using Javascript-ES6, Node.js REST API.


Steps to setup:

1: Install EditorConfig Extension (VSCode)
    Configure uniform code structure through file .editorconfig

2: Run command: "npm install"
    Install all dependencies listed in package.json to folder node_modules

4: Start the application by using: "npm start -s"
    Starts the application on local url http://localhost:3000/
    Change port if needed in |RootFolder|/buildScripts/srcServer.js

Tools included

Base setup
Platform:             Node.js
Package Manager:      npm (Node Package Manager)
Package Security:     NSP (Node Security Platform)
Webserver:            Express
Database:             MongoDb


Lint
Linter:               ESLint
Plugins:              ESLint-watch
Rule Guideline:       ESLint Recommended Rules (see ESLint Documentation)

Build Process
Pipeline Manager:     npm scripts
Bundler (JS/CSS):     Webpack

Transpilers
Javascript (ES6):     Babel
CSS                   SCSS

Testing
Framework:            Mocha
Assertion Library:    Chai
Helper Lib:           JSDom
