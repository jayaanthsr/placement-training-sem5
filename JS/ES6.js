ashwin=(a)=>{
    str="vanakam da mapla "+a;
    return str;
}

console.log(ashwin(10))

//destructing operator

var number=[1234,1235,1236]
var [num1,num2,num3]=number
console.log(num1)
console.log(num2)
console.log(num3)

//ternary operator
mark=11
var a=mark%2==0?"EVEN":"ODD"
console.log(a)

//spread operator
arr1=["ma","ha","sh","win"]
arr2=["ma",'th',"av"]
arr=[...arr1,...arr2]
console.log(arr)

//rest operator
//??


//scope
var a=10
console.log(a)
{
    let a=20
    console.log(a)
}
console.log(a)


