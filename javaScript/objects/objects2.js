// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//task:get anme of active users in uppercase,sorted alphbetically
//output:["ALICE","CHARLIE"]
//  const users=[
//     {name:"Alice",age:25,active:true},
//     {name:"Bob",age:30,active:false},
//     {name:"Charlie",age:35,active:true }

//  ];

//  const result=users.filter(res=>res.active)
//  .map(user => user.name.toUpperCase())
//  .sort()
//  console.log(result);

//&input
// const numbers=[10,3,7,1,8,5,2,9,4,6];
// //task get even number geater than 4, then sort them in asceding order

// const result = numbers
//     .filter((num) => {
//         return num % 2 === 0 && num > 4;
//     })
//     .sort((a, b) => {
//         return a - b; 
//     });

// console.log(result); 

//  const employees=[
//     {id:1,name:"john",salary:50000,department:"IT"},
//     {id:2,name:"jane",salary:60000,department:"HR"},
//     {id:3,name:"Bob",salary:55000,department:"IT"},
//     {id:4,name:"alice",salary:70000,department:"finance"}
//  ];

//  //task :fond first IT dept. emp with salary >55000,
//  //find their index in the array 
//  //excepted output :
//  //emp:{id:3,name:"Bob",salary:55000,dept:"IT"}
//  //index:2

//  let emp= employees.find((res)=>{
//     return res.department=="IT" && res.salary>=55000
//  })
//   let index= employees.findIndex((res)=>{
//     return res.department=="IT" && res.salary>=55000
//  })
//  console.log(emp,index);


const data=[
    [1,2],
    [3,4],
    [5,[6,7]],
    [8,9]
];

//task :flatten the array completely ,ans double each other 
const result=data.flat(Infinity)
.map(num=>num*2);
console.log(result);

//https://dontpad.com/jslogicalQues