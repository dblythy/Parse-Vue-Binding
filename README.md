# parse-vue-binding


## About

The project demos how to use the upcoming Parse JS feature [bind](https://github.com/parse-community/Parse-SDK-JS/pull/1484).

Dot Notation allows all Parse Objects' properties to be accessed via `object.bind.key`, instead of `object.get('key')`.

This allows for convienient two-way binding directly to elements such as inputs with `v-model="object.bind.key"`.

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


To use Bind Notation on your project, install the branch with:

```
npm i dblythy/Parse-SDK-JS#dot-notation
```

