//first you create object
// onclick what happed is in event module like addEventListner in javaScript

const EventEmitter = require("events");

const event = new EventEmitter();

//can use two parameters in ()

event.on("sayMyName", ()=>{
    console.log("your name is Adil younas");
});
//to call event in node JS we use
// in () we can also use 2 arguments
event.emit("sayMyName");

//////////////////////////////////////////////////////////////////////
//we can make various events in node JS and call them at once like

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", ()=>{
    console.log("your name is Adil younas");
});

event.on("sayMyName", ()=>{
    console.log("your name is Adil younas");
});

event.on("sayMyName", ()=>{
    console.log("your name is Adil younas");
});

event.emit("sayMyName");
