## "mo_checkers.js

_Just to save time for other stuff...;_

## Description
"mo_checkers.js is a package that contains functions that check some conditions just to preserve time for other stuff.

* _You don't just have the ample time..._

## installation

`npm install "mo_checkers`

## Usage

...

    import { isNumber, isString, isArray, isObject, isFunction } from "mo_checkers"

    console.log(isString( "" ))
    // true

    console.log(isNumber( 20 ))
    // true

    console.log(isArray( [] ))
    // true

    console.log(isObject( {} ))
    // true

    console.log(isFunction( ()=>{} ))
    // true

    console.log(isObject( [] ))
    // false

    console.log(isObject( ()=>{} ))
    // false

    console.log(isObject( null ))
    // false

    console.log(isObject( undefined ))
    // false
...


