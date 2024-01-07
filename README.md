# ESBUILD TEST

Compare javascript files generated using esbuild and gulp. Esbuild has 3 possible output formats: `iife`, `cjs`, and `esm`. Generated files will be located in the `dist` directory.

Any changes made in `alpha.js`, `beta.js` and `application.js` will result in regenaration of:

```
dist/out-cjs.js
dist/out-esm.js
dist/out-iife.js
```

Any changes made in `alpha.js` and `beta.js` will result in regenration of the gulp output file:

```
dist/out-gulp.js
```

# SETUP

To install dependencies:

```sh
yarn install
```

To run:

```
./dev
```
