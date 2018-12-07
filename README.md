[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![Node.js][NODE VERSION BADGE]][NODE PAGE]
[![gulp][GULP VERSION BADGE]][GULP PAGE]


# lern_projekt
*Simple repo to learn new things!*

## What have I done?

- [Gulp](https://gulpjs.com/): I have build my own workflow with gulp and npm scripts.
- [SCSS](https://sass-lang.com/): I write my CSS3 code in SCSS and it is compiled over 'gulp' to one minified CSS file.


## Documentation

**Install all from package.json**

```
$ npm install
```

**Get started**

```
$ npm start
```

- This command minifies all SCSS and JS Files and copys them into the 'public' dir.
- Also all HTML files are copyed into the 'public' dir.
- Then a browsersync server will be started with the 'public' folder as its base dir.
- After this gulp is watching for file changes in all SCSS, JS and HTML files
- So if you change a file gulp will track it and SCSS and JS files will be minified again and then 


[NODE PAGE]: https://nodejs.org/
[NODE VERSION BADGE]: https://img.shields.io/badge/node-v8.11.3-orange.svg
[NPM PAGE]: https://www.npmjs.com/
[NPM VERSION BADGE]: https://img.shields.io/badge/npm-6.4.1-green.svg
[GULP PAGE]: https://gulpjs.com/
[GULP VERSION BADGE]: https://img.shields.io/badge/gulp-4.0.0-blue.svg