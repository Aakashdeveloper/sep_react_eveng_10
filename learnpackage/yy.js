function human(name){
    this.name=name;
    this.city="Newyork"
}

function robot(){
    this.name="abc";
    this.legs = 2;
    this.color="red"
}

var john = new human("John")
var pepper = new robot('Pepper')


human.prototype = new robot()

var Alvin = new human("Alvin")
Alvin
human {name: "Alvin", city: "Newyork"}
Alvin.legs
2
Alvin.color
"red"

robot.prototype = new human()



1,2,3,3,4,5
