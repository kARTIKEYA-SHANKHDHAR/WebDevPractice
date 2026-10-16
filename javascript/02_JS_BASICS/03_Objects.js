const person1={                         
    userName: "kartik",
    email:"abhs@gmail.com",
    age:20,
    subscriptions:{
        netflix:"gold",
        youtube:"premium"
    },
    show: function showDetails(){
        console.log("this is user: "+this.userName+ ", age : "+this.age)
    }
}

// const person2={                         
//     userName: "faaaa",
//     email:"faaaa@gmail.com",
//     age:21,
//     subscriptions:{
//         netflix:"gold",
//         youtube:"premium"
//     },
//     show: function showDetails(){
//         // console.log("this is user: "+this.userName+ "age : "+this.age)
//         return this.age
//     }
// }


// // property of an object : 


// console.log(person1.show())
// const userInfo= person2.show()
// console.log("this is person2 info : ",userInfo)





// person1.address="agra"
// console.log(person1["email"])

// delete person1.userName

// console.log(person1)

// object.keys()
// object.values()



// objecxts de - structuting

const{userName, age, email}= person1

console.log(userName)

console.log(age)

console.log(email)