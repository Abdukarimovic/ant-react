import React from 'react';
import DiveSea from '../Images/Logo.png';
import icon1 from '../Images/home-2.png';
import icon2 from '../Images/Group.png';
import icon3 from '../Images/message.png';
import icon4 from '../Images/card.png';
import icon5 from '../Images/Group2.png';


const Navbar = () => {
    return (
            <div  style={{width:"20%", height: '100vh', backgroundColor:" #F9F9F9"}}>
                <img className='mx-5 my-2' src={DiveSea} alt="" /><hr />
                <ul >
                    <li className='d-flex p-3 gap-3' >
                        <img src={icon1} alt="" />
                        <a href="#" style={{textDecoration:"none",color:"gray"}}>Dashboard</a>
                    </li>
                    <li className='d-flex p-3 gap-3' >
                        <img src={icon2} alt="" />
                        <a href="#" style={{textDecoration:"none",color:"gray"}}>Market</a>
                    </li>
                    <li className='d-flex p-3 bg-dark  rounded justify-content-between'  >
                        <div className="messge d-flex gap-3">
                        <img src={icon3} alt="" />
                        <a href="#" style={{textDecoration:"none",color:"white"}}>Messages</a>
                        </div>
                      
                        <div className='d-flex  justify-content-center' style={{width:'20px', height:'20px', backgroundColor:"white",color:"black", borderRadius:"50%"}}><p>5</p></div>
                    </li>
                    <li className='d-flex p-3 gap-3' >
                        <img src={icon4} alt="" />
                        <a href="#" style={{textDecoration:"none",color:"gray"}}>My Wallets</a>
                    </li>
                    <li className='d-flex p-3 gap-3' >
                        <img src={icon5} alt="" />
                        <a href="#" style={{textDecoration:"none",color:"gray"}}>Activities</a>
                    </li>
                </ul>
            </div>
    );
}

export default Navbar;
