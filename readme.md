# Node Experiment #10001 ![Code Style](https://img.shields.io/badge/code%20style-airbnb-green.svg) [![License | GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
<div align="center">An experimental webserver example that does not care about security at all but has **zero** dependencies.</div>
<div align="center">Made with Node and Typescript.</div>


What it does:

- serve html with streams;
- feature routes;
- feature modular controllers;
- could in theory handle querystring params and serve proper content;
- have zero external dependencies;
- make use of typescript, eslint and prettier;
- follow tsdoc standard and conventional commits.

What it could be better for its purpose:

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
