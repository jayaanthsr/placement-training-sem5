import React from "react";
import Ashpic from '../assets/image.png'
import '../components/css/Home.css'
import { useState } from "react";

var Ashwin=(props)=>{
    var styling={
        fontSize:"20px",
        color:"black",
        textAlign:"center",
        paddingTop:"50px"
    }
    var [number,setNumber]=useState(11);
    var [num,setNum]=useState(1);
    var n=10;
    var text=["hi","hello","vanakam"]
    function incChange(){
        setNumber(number+1)
    }
    function decChange(){
        setNumber(number-1)
    }
    var arr=[1,2,3,4,5,6,7,8,9];
    return (
        <div>
            <p className="welcome">welcome</p>
            <h1 style={{color:"yellow",textAlign:"center"}}>{localStorage.getItem("user_name")}: the Rise</h1>
            
            
            <div className="row">
                {/* <div className="col1"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat, dolorum repellendus, fuga assumenda sunt aut sed a beatae minima quae atque debitis veritatis. Vero laudantium expedita magnam error qui, debitis incidunt nobis sunt soluta! Quae libero a neque culpa illum asperiores aspernatur accusantium, voluptas excepturi eligendi? Earum fugit obcaecati magni maiores quas, sit similique non asperiores itaque assumenda ab est dignissimos, expedita quaerat aliquid, quae omnis velit iusto tenetur! Tempora veniam blanditiis officiis molestiae quo doloribus quas distinctio voluptate, perferendis esse, nesciunt vel deleniti labore itaque, odit voluptatem? Sint eius placeat quas illum cumque! Numquam magnam sed esse delectus.</p></div> */}
                <img src={Ashpic} alt="logo" />
                <div className="col2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat quaerat ea dignissimos amet neque quos, voluptatum magnam. Libero repellat est itaque cupiditate, eum eveniet optio quos ipsum quisquam? Soluta quia culpa ad saepe non recusandae vitae voluptatum alias blanditiis, autem officiis ipsa praesentium repellat necessitatibus laudantium corrupti porro voluptates eveniet sunt adipisci quod. Dolorum, consequuntur! Quidem, ullam. Et, totam, quidem laborum alias error recusandae, ullam debitis velit officiis hic assumenda iusto non? Facere adipisci, quos vitae nostrum ab sunt nesciunt eius consequuntur provident molestias perspiciatis hic doloremque omnis repellat praesentium nam qui quisquam? Provident sint doloribus inventore nesciunt, rem labore ipsa modi impedit, aspernatur assumenda accusantium. Dolor id ad aliquam accusamus laborum, velit veritatis. Saepe iste reiciendis provident eaque.</p></div>
            </div>
            <p className="welcome">welcome</p>

            <h2 style={{color:"white"}}>Tables:</h2>
            <div className="tables">
                <div className="table-col1">
                    <ul>
                    
                        {
                            arr.map((value,index)=>{
                                
                                return <li style={{listStyle:"none",color:"white"}}>{value}*{number}={value*number}</li> 
                            })
                        }
                   
                    </ul>
                    <div className="Buttons">
                    <button onClick={incChange}>+1</button>
                    <button onClick={decChange}>-1</button>
                    </div>
                </div>
                <div className="table-col2">
                <ul>
                    
                    {
                        arr.map((value,index)=>{
                            
                            return <li style={{listStyle:"none",color:"white"}}>{value}*{num}={value*num}</li> 
                        })
                    }
               
                </ul>
                        <input type="number"  placeholder="enter a number" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
                </div>
                
            </div >

            
            <p className="welcome">welcome</p>
        </div>
    );
}
export default Ashwin;