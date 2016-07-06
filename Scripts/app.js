/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date July 6, 2016
 * 
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    // references to HTMLElements
    var rollButton = document.getElementById("rollButton");
    var diceResult = document.getElementById("diceResult");

    function init() {
        console.log('Application Started...');
    }

    function diceRoll() {
        var die1 = Math.floor((Math.random() * 6) + 1); // we never get to 6, 0 to 5 so we have to +1
        var die2 = Math.floor((Math.random() * 6) + 1);
        var total = die1 + die2;
        diceResult.innerHTML = "<h2>" + total + "</h2>";
    }

    rollButton.addEventListener("click", diceRoll);

    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();