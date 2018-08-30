# D's Boiler Template

A simple yet effective boiler template used for static websites.

## Getting Started

Clone this repo in the desired path and run ```npm i```. This will install all the dependecies you need.

### Tasks

* ```npm build``` — Builds everything in ```./src/``` to ```./dist```
* ```npm watch``` — Starts watching everything in ./src/
* ```npm start``` — Starts a localhost on port 3000 and starts watching your files.
* ```npm run images``` — minifies every image in ```./src/assets/img/``` and puts it in a flat structure in ```./dist/assets/img/``` !note it does not keep your img folder structure!

Images do minify on the ```build``` command but not in the ```watch``` command. If you'd like to change it you can go into ```package.json``` look for ```scripts``` and change the name ```images``` to ```watch:images```. This way the watch function will keep track of your images to.

### Info

It's up-to-date with the latest webpack 4.17. You can use es6. Styling syntax is SCSS. Both the styling + JavaScript get compiled and minified on the ```build``` function.

For HTML I use html-includes. This way it's easier to work with modules/components. Make sure you use ```_``` to prefix modules/components so it won't compile to the ```build``` dir. Include components like this: ```${require('./path/to/_partial.html')};