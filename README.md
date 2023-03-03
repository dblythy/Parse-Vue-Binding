# parse-vue-dot-notation


## About

The project demos how to use the upcoming Parse JS feature `dotNotation`.

Dot Notation allows all Parse Objects' properties to be accessed via `object.key`, instead of `object.get('key')`.

This allows for convienient two-way binding directly to elements such as inputs with `v-model="object.key"`.

Configure Parse applicationId and serverURL in [src/main.js](src/main.js)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Testing on other projects


To use Dot Notation on your project, install the branch with:

```
npm i dblythy/Parse-SDK-JS#dot-notation
```

And set `Parse.dotNotation = true`
