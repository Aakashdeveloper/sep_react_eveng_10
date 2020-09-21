es5> Ecma Script5
es6> Ecma Script6

function add(a,b){
    return a+b
}

add(2,4)

const add = (a,b) => {return a+b}




function add(a,b){
    var out =[a,b]
    return out
}


add(1,2)

2


var a =[1,2,3,4,5,6]
a.map((data) => {return data*2})
[2, 4, 6, 8, 10, 12]

map > help to iterate over the array and 
    > alawys return same length as the input array


var a =[1,2,3,4,5,6]
a.map((data) => {return data>3})
(6) [false, false, false, true, true, true]


filter > will only return those value for which output is true
       > output array may or may not be of same length

var a =[1,2,3,4,5,6]
a.filter((data) => {return data>3})
(3) [4, 5, 6]

var a =[0,1,2,3]
a.map((data) => {return data*2})
(4) [0, 2, 4, 6]

var a =[0,1,2,3]
a.filter((data) => {return data*2})
(3) [1, 2, 3]

var a =[0,1,2,3]
a.filter((data) => {return data>-1})


var city =["London","NewYork","Delhi","Amsterdam"]

undefined
city.indexOf('London')
0
city.indexOf('Delhi')
2
city.indexOf('Paris')
-1
city.indexOf('Venice')
-1



var age = 10
var b = "my age is "+age
var b = `my age is ${age}`