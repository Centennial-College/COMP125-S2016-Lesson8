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

    var name = "John";

    var Course1 = {
        ID: "1",
        Name: "COMP123",
        Description: "Programming 2"
    }
    var Course2 = {
        ID: "2",
        Name: "COMP125",
        Description: "Client-Side Web Development"
    }
    var Course3 = {
        ID: "3",
        Name: "COMP397",
        Description: "Web Game Programming"
    }
    var Course4 = {
        ID: "4",
        Name: "COMP392",
        Description: "Advanced Graphics"
    }

    var User = {
        ID: "1",
        Name: "admin",
        Email: "admin@example.com",
        Password: "123456",
        Courses: [Course1, Course2, Course3, Course4],
        DropCourse: function (courseIndex) {
            this.Courses.splice(courseIndex, 1);
        }
    };

    // Person Class +++++++++++++++++++++++++++++++++++++
    var Person = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Person(name, age) {
            this.Name = name;
            this.Age = age;
        }

        // METHODS ++++++++++++++++++++++++++++++++++++++
        Person.prototype.SaysHello = function () {
            console.log(this.Name + " says Hello!");
        }

        return Person;
    } ());

    function init() {
        var person = new Person("Tom", 47);
        person.SaysHello();
        console.log("age: " + person.Age);
        person.Age = 23;
        console.log("age: " + person.Age);

    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();