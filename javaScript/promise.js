// console.log("hello!");
// alert("jai baba ki is here ...."); 
// timig functiomn 
// using this timimng function we can make our js behave as anschryos 
//synchrons menas code is executed line by line  and anschyones code is execured parllel 
//there rae two types of timming function we have oin js 
//1 set time out :- it accepts two argument 1st argument is the call back function which we want s to exceute 
// and 2nd arugmnet is the time in mille seconds this method will excutes the call back functionb auto maeticlly after
//some sapn of time what ever is mention in tis the set timew out 
//tp stop the set time out we have to use clear time out ,clear time onn ut accpets one arugment thzt is refence of the set 
// time out which we want to stop 

//set interval :- it  accepts two argument 1st argument is the call back function which we want s to exceute 
// and 2nd arugmnet is the time in mille seconds
// this methd will eceutes the call back funcvtion after every sapn of time 
//to stop the set interval we have to use clear interval 
//it accepts one arugmentts that is refence of the set interval 
// console.log("task 1")
//  console.log("task 2")
// let clearData=setTimeout(() => {
//    console.log("final task") 
// },3000);

// console.log("task 3")
// console.log("task 4")

// let btn=document.querySelector('button')
// btn.addEventListener("click",()=>{
//     console.log("timeOut cleared")
//     clearTimeout(clearData)
// })

// let count=0
// let clearData=setInterval(()=>{
//     console.log(count++)
// },1000)
// let btn=document.querySelector('button')
// btn.addEventListener("click",()=>{
//     console.log("timeOut cleared")
//     clearInterval(clearData)
// })


// promisses:- thsee arew object it tell evntual and completion and fauior opf an anschyons task 
//there are 3 states of promeses we have in js 
//1st , fullfulid or resolued 
//2nd panding or waiting 
//rejected 
//instatnce method of promesies 
// 1. then():-this  method is executed when the promises are resolved 
//2. catch():-this method is executed when the promises is rejected 
// finally():-this method is executed in both cases ,either the promise is resolved or rejected 
//creating a promise


// let p=new Promise((res,rej)=>{
//     rej("promise rejected")
//     //res("promise resolved")
// })
// p.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("executed everthing.")
// })

//promise static method:-

// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()
//if all the promises insdie the array is resolved then it given an array which coantioans all the resolve statement 
//if any one of the promise is get rejected then it will not check other promises inside the array and returns 
//the 1st rejected statement   

// let p1=new Promise((res,rej)=>{
//     rej("p1 is rejected ")
//     //res("p1 is resolved")
// })
// let p2=new Promise((res,rej)=>{
//     res("p2 is resolved")

// })
// let p3=new PromiseRejectionEvent((res,rej)=>{
//     //res("p3 is resolved ")
//     rej('p3 is rejectetd ')
// })
// let res= Promise.all([p1,p2,p3])
// res.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


//==================================================================================


//promise.allsettled():-it accpets an array which coantines multipale promise and it returns a new promise
//this promise return the complete status of each promise present inseide the given array it wait for all the promise to settle down
//and give the result of each promise 

//let res=Promise.allSettled([p1,p2,p3])

// res.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

//***********************************************************************************

// promise.race():-it accpets an array which coantines multipale promise and it returns a new promise.it retuns the
//first promise either it is resolved or rejected 

let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("p1 is rejected ")
    }, 5000);

    //res("p1 is resolved")
})
let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p2 is resolved")
    }, 3000);


})
let p3 = new PromiseRejectionEvent((res, rej) => {
    //res("p3 is resolved ")
    setTimeout(() => {
        rej('p3 is rejectetd ')
    }, 3000);

})

//let res=Promise.race([p1,p2,p3])

// res.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })
//=======================================================================================

//promise.any():- it accpets an array which coantines multipale promise and it returns a new promise.it retuns the
//first promise  resolved .if none of the promise presnt inside the array is resolved then it returns agrregate
//array

//let res=Promise.any([p1,p2,p3])

// res.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })
//*************************************************************************
// Fetch :-it is thede methiod to fecth the dtat from api server or backend ibn js .it reutns a promise 
//then to haldle this promise either you can use then ctach or you can use aysnc and awit 

//=========================================================================
//async await
//asysnc :- it is the keyword whcich is used to make asynchrones function 
//await:- it is the keyword which waits unitl the promise is resolved or rejected await keyword can be only used 
//in an anscnhyous function 

let data = fetch("https://api.github.com/users")
data.then((res) => {
    return res.json()
    // console.log(res)
}).then((acutalData) => {
    console.log(actualData)
}).catch((err) => {
    console.log(err)
})


async function fetchData() {
    let data = await fetch("https://api.github.com/users")

    let finalData = await data.json()
    console.log(finalData)
}
fetchData()

// try catch :- it is used to handle errors in the js .1st try block is executed,if any error occurs during the execution of 
//of the try block.then is  handled by the catch block 

async function fetchData() {
    try {
        let data = await fetch("https://api.github.com/users")

        let finalData = await data.json()
        console.log(finalData)
    } catch (error) {
        console.log(error)
    }
}
fetchData()

//an ApI(application progarrming Interfacewe ) is a set of rules and protocols that allow different software applications
//to communicate and exachngfe dtata with each other
//JSON :- (java script object notoation )is a lightweigth tetx based formet use to sotre and transport data.

//JSON:- a lightweight language-indedpendent data interchnage format formaetted ass tetx .it is a string that follow a  strict
//subset of js object synatx
//JS object:-it is a non premitive data type which store data in key value pairs and execuatble code is managed 
//directly by the javascript runtime engine .

//333333333333333333333333333333333333333333333333333333333333333333333
//web storages in js:- web satorege are the inbulid storage present in the web browser 
//type of storage :-
// local storage 
//session storage 
// local storage :- those storage wihcih presist the data even after closing the browser thses storage know sa local storage
//session:- thses are those which presist the data only for a pertiucler span of time.

// local storage:
//localStroage.setItem("id",1)
//localstroage.setiteam("name","abc")
//localstoarge.setitem("sal",100000)

//get
//console.log(localstoarge.getitem('id')
// //console.log(localstoarge.getitem('name')

//remove
////console.log(localstoarge.removeitem('id')
////console.log(localstoarge.removeitem('sal')

//clear
//localstroage.clear()

// 33333333333333333333333333333333333333333333333333333333333333333333333333333333

//Event Loop:-its is a machinesam in js that continusly checks wether call satck is empty or not and moves the task from 
// queue to satck for the execution 
//call stack :- it is a data structure where js code is executed line by line it follows lifo articeture 
//webApI:- web api's are the feature provided by the browser to handle asynchrous task  like settimeout,domevents
// //api calls  
//call back qeueue and task qeueue :- it is a qeueue where call backs from asynchrous operation waits before the ececution 
//micro task :- queue it is a high priorioty qeueue for promises.
//event loop is a process that continuely checks is call satck is empty or not 1st it exceute the micro task qeueue
// and then it executes the call back qeueue task 




// console.log("a");
// setTimeout(()=>{
//     console.log("b");
//     Promise.resolve().then(()=>{
//         console.log("c");
//     })
// },0);

//  Promise.resolve().then(()=>{
//         console.log("c");
//     });
//     console.log("e");
    //output
   //
   // a e c b c

//    console.log("start");
//    setTimeout(()=>{
//     console.log("time out 1");

//      Promise.resolve().then(()=>{
//         console.log("promise 1");
//     })
//    },0)

//     Promise.resolve().then(()=>{
//         console.log("promise 2");
//          setTimeout(()=>{
//     console.log("time out 1");

//     },0);
// });
// console.log("end");

//output:- start end promise 2 timout 1 promise 1 timeout 2



//  const obj={
//     name:"rhoit",
//     show(){
//         settimeout(function(){
//             console.log(this.name);

//         },0);
//         setTimeout(()=>{
//             console.log(this.name);
//         },0);
//     }
// };
// obj.show();

// function counter(){
//     for(var i=1;i<=3;i++){
//         settimeout(()=>{
//             console.log(i);
//         },0);
//     }
// }
// counter();
// output:- 4  4  4  4


