# Starter template
This is the starter template for my projects. It's heavily influenced by [Harry Roberts](https://github.com/csswizardry) and his [inuit.css](https://github.com/csswizardry/inuit.css) as well as HTML5 [boilerplate](http://html5boilerplate.com/).


## Requirements
* This starter-plate requires [CodeKit](http://incident57.com/codekit/), but you can quickly edit it to work with Grunt or other solutions. (Codekit is only required to structure and import all the js-files)
* It also requires [Bower](http://bower.io/) or CodeKit 2.0 with Bower included to import all the packages

## Quick start
1. Run `$ bower update` to install all the dependencies.
2. Everything should now be ready if you add the project to CodeKit

## SCSS
This is is my quick-start of Harry Roberts excellent [inuit.css](http://inuitcss.com/) with the blocks and bits I use in every project. [Read the getting started guide from inuit](https://github.com/inuitcss/getting-started) to read more about the setup and the other modules you can add.

## JS
The Javascript is in the /js folder. Via CodeKit we are importing jQuery, and plugins as needed to /js/min/main.js.. In this version I'm bundling jQuery into my main file instead of getting it from the Google Hosted Libraries to get one less HTTP request, but you should check if your project is better of with using Googles hosted version. Two relevant articles on this issue:
* [Is jQuery to big for mobile?](http://flippinawesome.org/2014/03/10/is-jquery-too-big-for-mobile/)
* [HTTP Archive: jQuery](http://www.stevesouders.com/blog/2013/03/18/http-archive-jquery/)

I'm also just minifying the latest version of Modernizr from the bower-component, but depending on what you want to use Modernizr for you should build your own version.
