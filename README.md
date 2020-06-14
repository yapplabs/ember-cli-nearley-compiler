# ember-cli-nearley-compiler

An [ember-cli](https://github.com/ember-cli/ember-cli) addon for compiling [nearley](https://nearley.js.org/) grammars from nearley grammar file.

## Installation

```bash
npm install --save-dev ember-cli-nearley-compiler
```

## Usage

By default this addon will generate a Javascript grammar for every file with the _ne_ extension, the generated grammar 
extension is _js_ and will be located in the same folder as the grammar file.

The grammer is exported as an ES6 module and can imported as any other JS file.
