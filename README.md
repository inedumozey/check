## @inedumozey/check

_Just to save time for other stuff...;_

## Description
"mo_checkers.js is a package that contains functions that check some conditions just to preserve time for other stuff.

* _You don't just have the ample time..._

## installation

`npm install @inedumozey/check`

## Usage

...

    import check from "@inedumozey/check";
...

...

    const check = require("@inedumozey/check");
...

...

    console.log(check.isString( "" ))
    // true

    console.log(check.isNumber( 20 ))
    // true

    console.log(check.isArray( [] ))
    // true

    console.log(check.isObject( {} ))
    // true

    console.log(check.isFunction( ()=>{} ))
    // true

    console.log(check.isObject( [] ))
    // false

    console.log(check.isObject( ()=>{} ))
    // false

    console.log(check.isObject( null ))
    // false

    console.log(check.isObject( undefined ))
    // false
...


