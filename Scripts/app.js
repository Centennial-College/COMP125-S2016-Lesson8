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
    var today = new Date("2016-12-01 09:52:29");
    var old = new Date();

    function init() {
        console.log('Application Started...');
        console.log(today);
    }

    function getCurrentTime(date) {
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        var milliseconds = date.getMilliseconds().toString().substring(0, 2);
        var currentTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
        return currentTime;
    }

    function getElapsedTime(oldTime, newTime) {
        var elapsedTime = newTime - oldTime;
        var elapsedSeconds = new Date(elapsedTime);
        return elapsedSeconds.getSeconds() < 10 ? "0" + elapsedSeconds.getSeconds() : "" + elapsedSeconds.getSeconds();
    }

    function diceRoll() {
        var die1 = Math.floor((Math.random() * 6) + 1); // we never get to 6, 0 to 5 so we have to +1
        var die2 = Math.floor((Math.random() * 6) + 1);
        var total = die1 + die2;
        var now = new Date();

        diceResult.innerHTML = "<h2>" + total + " --> TimeStamp: " + getCurrentTime(now) + "</h2>" + "<h3> Elapsed Seconds: " + getElapsedTime(old, now) + "</h3>";
        old = now;
    }

    rollButton.addEventListener("click", diceRoll);

    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();