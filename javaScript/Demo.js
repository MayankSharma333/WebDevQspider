//! chosure :- it is s object which is cretated when the inner function is trying to acess the value of
//  a variable which is decleard in the function .it is cerated by the outer function 
function outer(){
    console.log("outer fn")
    var a=100;//local
    function inner(){
    console.log("inner fun",a)
    }
    inner()

}
outer()


// javaScript Currying :-currying is a functional progrmming techinque in javascript that transfroms a function which multiple 
//arguments into a squence of nesting function each taking a single argument .insted of calling f(a,b,c),
//currying allows you to call f(a)f(b)f(c)

// function abc(a,b,c){
//}
//abc(10,20,30)

// function fun(a){
//return function(b){
//   return function(c){
//console.log(a+b+c) }}}

// lety fun 2=fun1(100)
// let fun3=fun2(200)
// fun3(300)
// fun1(100)(200)(300)

//* js currying in arrow function 
// defualt parameter:- defult values given to a function parameter,so that in case of absence of parameter ,
// defult parameter values can be taken by the function so that future bugs can be resolved 

// function abc(a=100,b=200){
//     console.log(a)   // undfined
      
//     console.log(b) // undfined
//     console.log(a+b) // not a number 

// }
// abc()//300
// abc(1000)/1200
// abc(500,500)//100


// function hoisting :- only name function are fully hoidted 

// abc()
// function abc(){
//     console.log("functiom hoisting ")
// }

// fun1()
// var fun1=function(){ //type error 
//     console.log("function")
// }

// fun1()//refernce error
// let fun1=function(){
//     console.log("function")
// }

// fun1()//refrence error
// const  fun1=function(){
//     console.log("function")
// }

// arguments:- it is built in array like objects which is present in ol=nly no arrow function which allows us to 
// access all the argument wihtout using parameters 

// function argumentobj(){
//      console.log(arguments)
//      console.log(arguments[0])
//      console.log(arguments[2])
// }
// argumentobj(10,20,30,40,50,60 )


// let argumentobj=()=>{
//     console.log(arguments)// refernce error : argument is not defined
// }
// argumentobj(10,20,30,40,50,60)

// write a program to find wether numbverr given by thew user it is even or odd by using recursive function 
// let number = parseInt(prompt("Enter a number:"));

// function checkEvenOdd(num) {

//     if (num === 0) {
//         return "Even"; // Base case
//     }

//     if (num === 1) {
//         return "Odd"; // Base case
//     }

//     return checkEvenOdd(num - 2);
// }

// let res=checkEvenOdd(num)
// console.log(res)


// math.object:-
// console.log(Math.max(10,20,30,40))
// console.log(Math.floor(10.4))
// console.log(Math.ceil(6.9))
// console.log(Math.abs(69.69))
// console.log(Math.round(11.3))
// console.log(Math.pow(2,5))



//objects 
// it is a non premitive data type in which we staoe there data in the from of key and value pair 
// key and value pair it is known as properties ,key and vlaue are seprtated by colan 
// and properties are septared by comma

let obj={
    id:1,
    objName:" baba ",
    sal:901240237482384,
    isStronge :true,
    isMarried:null,
    isTester:undefined,
    skilss:["null","undefined","java"],
    printname:()=>{
        console.log("function")
    },
    collage:{
        clgName:"baba",
        degree:"All",
        Location:"on_earth"

    }


}
//read:
// //consloe.log(obj)
// obj.printname()
// console.log(obj.skills[2])

// update
// console.log(obj)
//obj.collage.clgName="jai baba ki"

// delete
//dleete obj.objname
//console.lob(obj)

//methods of objecct 
//object.keys :- it writtens predent indisdde keys in the frm of array
//object.values()
// //!obvject.enteries():
//consloe.log(object.entries(obj))
//object.romEntries
//object.seal()
//object.freeze()