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

    // 2 DIFFERENT WAYS TO CREATE AN OBJECT
    // Literal Notation
    var User = {
        ID: "1",
        Name: "admin",
        Email: "admin@example.com",
        Password: "123456",
        Courses: ["COMP123", "COMP125", "COMP397", "COMP392"]
    };

    // Object Notation
    var NewUser = new Object();
    NewUser.Name = "Mary";
    NewUser.Email = "mary@example.com";
    NewUser.Password = "456789";

    function init() {
        console.log('Application Started');
        NewUser.Role = "Editor";
        console.log(User.Courses[0]);
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();