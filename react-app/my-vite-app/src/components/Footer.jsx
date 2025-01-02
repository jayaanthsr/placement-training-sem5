import './css/Footer.css';
import locPic from '../assets/location.png'
import { useState } from 'react';

var Footer=()=>{
    var[text,setText]=useState("hi");
    return(
        <div>
            <div className="row">
        <div className="col1">
            {/* <input type="text" value={text} onChange={setText(e.target.value)}/> */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam rerum nemo sint earum voluptatem eveniet aliquam doloremque aut ratione eligendi.
            </p>
        </div>
        <div className="col2">
            <p>contact:8508283070</p>
            <p>Gmail:jayaanthsr.22cse@kognu.edu</p>
            <p>Address:moolapalayam erode</p>
        </div>
        <div className="col3">
            <img src={locPic} alt="" />
        </div>
        </div>
        <div className='welcome' style={{color:"white",textAlign:"center"}}>copyrights. Rapid Creations</div>
        </div>
    )
    
}
export default Footer;