import '../scss/main.scss';
import '../less/burger.less';
//import './paralax';
//import './_navbar.js';
import 'babel-polyfill';

import("jquery").then(async (jquery) => {
    $ = window.$ = window.jQuery = jquery
    await import('bootstrap')
    $(document).ready(function() {
      console.log('hello')
    })
})

//or

const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

require('bootstrap')

$(document).ready(() => {
  console.log("hello");
});
