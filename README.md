[![Build Status](https://travis-ci.org/npirotte/react-typescript.svg?branch=master)](https://travis-ci.org/npirotte/react-typescript)

![Deps Status](https://david-dm.org/npirotte/webpack-config-example.svg)

# Webpack configuration example

## Summary

This project is a little starter showing how to set use React along with typescript.
## Technologies

### Building

Webpack with Babel loader for javascript and css & style loaders for stylesheets.

The configuration is managed with [webpack-config](https://www.npmjs.com/package/webpack-config).

### Testing

Karma and Jasmine ruinning on phantomJs.

### Sample application

The sample application uses ReactJs.

## Commands

Please use npm command instead of native script commands.

```bash
> npm run test
```

Run unit test

Lint the app code with eslint.

```bash
> npm run build
```

Build a production vertion of the application.

```bash
> npm run start
```

Launch a dev server to test the application.

## Test the app

To test the app, first built it with the `npm run build` command,
then run `npm start` command to lauch the index.html in a server.