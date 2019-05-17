var five = require("johnny-five");
var board = new five.Board();
var led1, led2, led3;
var bandera1 = false;
var bandera2 = false;
var bandera3 = false;

board.on("ready", function() {
    led1 = new five.Led(2);
    led2 = new five.Led(4);
    led3 = new five.Led(7);
    console.log("Inserta el led a modificar, ejemplo: led1");
    
    this.repl.inject({
        led1: function() {
            if ( bandera1 == false) {
                led1.on();
                bandera1 = true;
                console.log('Led 1 esta: ON');
            } else {
                led1.off();
                bandera1 = false;
                console.log('Led 1 esta: OFF');
            }
        }
    });    
    this.repl.inject({
        led2: function() {
            if ( bandera2 == false) {
                led2.on();
                bandera2 = true;
                console.log('Led 2 esta: ON');
            } else {
                led2.off();
                bandera2 = false;
                console.log('Led 2 esta: OFF');
            }
        }
    });
    this.repl.inject({
        led3: function() {
            if ( bandera3 == false) {
                led3.on();
                bandera3 = true;
                console.log('Led 3 esta: ON');
            } else {
                led3.off();
                bandera3 = false;
                console.log('Led 3 esta: OFF');
            }
        }
    });
});
