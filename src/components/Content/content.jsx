import React from 'react';
import Search from '../Images/search.svg'
import Avatar1 from '../Images/avatar-1.png';
import Avatar2 from '../Images/avatar-2.png';
import Avatar3 from '../Images/avatar-3.png';
import Avatar4 from '../Images/avatar-4.png';
import Avatar5 from '../Images/avatar-5.png';
import Avatar6 from'../Images/avatar-6.png';
import line from '../Images/divider.png';

const Content = () => {
    return (
        <div className='position-relative px-4 py-2' style={{width:"25%", height:"100vh"}}>
<button className='w-100   d-flex rounded px-3 align-items-center gap-3 '>
    <img src={Search} alt="" />
    <p>Search</p>
</button>
<img style={{position:"absolute", top:"40%", left:'3px'}} src={line} alt="" />
<div className="card1 mt-4">
    <div className="top w-100 d-flex justify-content-between align-items-center">
       <div className="img d-flex align-items-center gap-2">
       <img src={Avatar1} alt="" />
        <h5>Justin Hammer</h5>
       </div>
        <div className="clock">
            <p>01.00</p>
        </div>
       

    </div>
    <div className="under d-flex justify-content-around mt-2">
            <h6>We almost done with brief!</h6>
            <div className='d-flex  justify-content-center ' style={{width:'20px', height:'20px', backgroundColor:"black",color:"white", borderRadius:"50%"}}><p>5</p></div>

        </div>
</div>
<div className="card1 mt-4">
    <div className="top w-100 d-flex justify-content-between align-items-center">
       <div className="img d-flex align-items-center gap-2">
       <img src={Avatar2} alt="" />
        <h5>Layla Grum</h5>
       </div>
        <div className="clock">
            <p>02.15</p>
        </div>
       

    </div>
    <div className="under d-flex justify-content-around mt-2">
            <h6>Hi! I have some sent money tod...</h6>
            <div className='d-flex  justify-content-center ' style={{width:'20px', height:'20px', backgroundColor:"black",color:"white", borderRadius:"50%"}}><p>3</p></div>

        </div>
</div>
<div className="card1 mt-4">
    <div className="top w-100 d-flex justify-content-between align-items-center">
       <div className="img d-flex align-items-center gap-2">
       <img src={Avatar3} alt="" />
        <h5>John Cares</h5>
       </div>
        <div className="clock">
            <p>Jan 12</p>
        </div>
       

    </div>
    <div className="under d-flex justify-content-around mt-2">
            <h6>I will immediately pay according to t...</h6>

        </div>
</div>
<div className="card1 mt-4">
    <div className="top w-100 d-flex justify-content-between align-items-center">
       <div className="img d-flex align-items-center gap-2">
       <img src={Avatar4} alt="" />
        <h5>Sam Smith</h5>
       </div>
        <div className="clock">
            <p>Jan 12</p>
        </div>
       

    </div>
    <div className="under d-flex justify-content-around mt-2">
            <h6>I hope you will be fine without payme...</h6>

        </div>
</div>
<div className="card1 mt-4">
    <div className="top w-100 d-flex justify-content-between align-items-center">
       <div className="img d-flex align-items-center gap-2">
       <img src={Avatar5} alt="" />
        <h5>Angela Vatiga</h5>
       </div>
        <div className="clock">
            <p>Jan 10</p>
        </div>
       

    </div>
    <div className="under d-flex justify-content-around mt-2">
            <h6>You are great alesia! make that much...</h6>

        </div>
</div>
<div className="card1 mt-4">
    <div className="top w-100 d-flex justify-content-between align-items-center">
       <div className="img d-flex align-items-center gap-2">
       <img src={Avatar6} alt="" />
        <h5>Alex Hun</h5>
       </div>
        <div className="clock">
            <p>Jan 09</p>
        </div>
       

    </div>
    
</div>
        </div>
    );
}

export default Content;
