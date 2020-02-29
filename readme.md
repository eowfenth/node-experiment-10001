# Node Experiment #10001 ![Workflow](https://github.com/eowfenth/node-experiment-10001/workflows/Workflow/badge.svg?branch=master) ![Code Style](https://img.shields.io/badge/code%20style-airbnb-green.svg) [![License | GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
<div align="center">An experimental webserver example that does not care about security at all but has **zero** dependencies.</div>
<div align="center">Made with Node and Typescript.</div>

### How to run the project;

1. Clone this project with `git git@github.com:eowfenth/node-experiment-10001.git`;
2. Inside this project directory, install the packages with your favorite packager manager, i.e.: `npm i`;
3. Run this project with `ts-node server.ts`, you can do it also by typing `npx ts-node server.ts` if you haven't ts-node installed globally;
4. You can access `localhost:8081/success` at your browser for the success endpoint or any other endpoint for 404 endpoint.

### What it does:

- serve html with streams;
- feature routes;
- feature modular controllers;
- could in theory handle querystring params and serve proper content;
- have zero external dependencies;
- make use of typescript, eslint and prettier;
- follow tsdoc standard and conventional commits.

### What it could be better for its purpose:

- the static content could be in a external service;
- path traversal may not be an issue but the solution could be more elegant, https://security.stackexchange.com/a/123723;
- controllers could be using single function contract;
- could be using https module instead of http;
- could even better using http2 module instead;
- aside from path traversal, it could handle security better such as proper header settings;
- it removes HPP, but could have better validations when accepting querystring parameters;
- could make use of promises instead of callbacks;
- the styles of html are no final yet, it could be better.
- could have continuous deployment;
