This is my TDD setup for Javascript. It's based on the lessons at https://github.com/dwyl/learn-tdd

It uses tape as a light unit testing framework to test functions in Javascript ES6 modules.
See https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4

## Installation

Clone the repo and install the dependendies:

```
$ yarn
```

## Usage

### Run tests

```
$ yarn test
```

### Watch for changes and run tests each time a file changes

```
$ yarn run watch
```

(Note: I had mixed results with using yarn when there were errors in the tests; if using yarn inside the `watch` script
then the error output looked far worse than npm's output. So I'm using npm there instead. YMMV.)

### Generate a code coverage report

```
$ yarn run coverage
```

Note the last part of the console output:

```
--------------------|----------|----------|----------|----------|-------------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------|----------|----------|----------|----------|-------------------|
All files           |    80.95 |    83.33 |      100 |       85 |                   |
 vending-machine.js |    80.95 |    83.33 |      100 |       85 |          17,18,19 |
--------------------|----------|----------|----------|----------|-------------------|
```

Open up `coverage/lcov-report/index.html` in a browser and click on the js file there. It'll show what code specifically
isn't covered.

### JSDoc

```
$ yarn run jsdoc
```

Then open `out/index.html` and click on `getChange` at the top right. It'll show the output of the documented
getChange() function.

## Additions

There were a few extra things I wanted to get working which weren't covered by dwyl.

### ES6 modules

While the dwyl link focusses on writing pre-ES6 Javascript I wanted to use ES6 style modules (`exports` keyword).
Instead of using `require` to import modules I wanted the newer `import`.

One way to do this is using babel, as per [@_ericelliot](https://twitter.com/@_ericelliot). Note the `.babelrc` file which has the `es2015` preset -
this specifically allows for ES6 functionality.

### Istanbul with ES6

The Istanbul code coverage examples all work fine with vanilla javascript, but fail with ES6. 
[NYC](https://github.com/istanbuljs/nyc) is the command line interface to Istanbul. It allows for ES6 usage
by using babel-register.


