//async can be used for operation or for a function 
//error :async var a=10;
//the above thorugh a error

//there are two ways to async declaration
async function Myname(){
    setTimeout(()=>{
        console.log("hello");
    },2000);
    return await "thanks"
}

// arrowFunction=async()=>{
//     console.log("inside the arrow")
//     return "arrow funciton"
// }
console.log( Myname())
// console.log(arrowFunction())
// function locationfinder(time){
//     return new Promise((resolve,reject)=>{
//         if(time<12){
//             resolve("before 12 ")
//         }
//         else{
//             reject("after 12")
//         }
//     })
// }
// console.log(locationfinder(13))


function createPost(){
    var Post =new Promise((cpost)=>{
        cpost("post created");

    });
}