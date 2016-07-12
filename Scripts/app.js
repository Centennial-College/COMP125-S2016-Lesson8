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
    /*
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
    
        */

    // User Class ++++++++++++++++++++++++++++++++++++++++
    var User = (function () {
        // Constructor Method ++++++++++++++++++++++++++++++
        function User(ID, username, password, email) {
            // properties created dynamically
            // created when we assign values to them
            this.ID = ID;
            this.username = username;
            this.password = password;
            this.email = email;
        }

        // dynamic method like properties, created when we assign to it
        User.prototype.LogToConsole = function () {
            console.log('User ID: ' + this.ID);
            console.log('username: ' + this.username);
            console.log('password: ' + this.password);
            console.log('email: ' + this.email);
        }

        return User;

    })();

    // Person Class +++++++++++++++++++++++++++++++++++++
    var Person = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        // the constructor is the class in JavaScript
        function Animal(name, age) {
            this.Name = name;
            this.Age = age;
        }

        // METHODS ++++++++++++++++++++++++++++++++++++++
        // this is a method belonging to the constructor
        Animal.prototype.SaysHello = function () {
            console.log(this.Name + " says Hello!");
        }

        // returns a reference to the constructor
        return Animal;
    } ());

    // Different way to create a class +++++++++++++++++++++++++++++++++++
    // However this does not let us create reusable objects (i.e. cannot have constructor like above)
    // Animal Class
    var Animal = {
        numberOfLegs: null,
        hasHair: null,
        Speaks: function () {
            console.log('The Animal makes a noise');
        }
    }

    Animal.prototype.constructor = function (numberOfLegs, hasHair) {
        this.numberOfLegs = numberOfLegs;
        this.hasHair = hasHair;
    }

    function init() {
        var person = new Person("Tom", 47);
        // person.SaysHello();

        var user = new User(1, "thomas", "123456", 'tom@example.com');
        // user.LogToConsole();

        var user2 = new User(2, "mary", "7890123", "mary@example.com");
        // user2.LogToConsole();

        // can treat an object as an array
        // console.log(user2["username"]);

        /*
            // but it is NOT an array! doesnt have all array properties
            console.log(user2.length);  // does not work
 
            var myarray = ["firstElement", "secondElement", "thirdElement"];
            console.log(myarray.length);    // works
        */

        var users = [user, user2];
        // console.log(users);

        var animal = new Animal(4, true);
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();