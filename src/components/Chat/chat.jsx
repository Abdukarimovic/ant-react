import React from 'react';
import Angela from '../Images/avatar.png';
import Video from '../Images/video.png';
import Phone from '../Images/phone.png';
import Dots from '../Images/dots-vertical.png';
import img from '../Images/Rectangle 4324.png'
import send from '../Images/Path 92.png'
import voice from '../Images/Group 62.png'

const Chat = () => {
    return (
        <div style={{width:'55%', height:'100vh',borderLeft:"1px solid lightgray"}}>
            <div className="card-header p-4 d-flex justify-content-between border border-bottom-secondary " style={{height:"100px", width:'100%'}}>
                <div className=" d-flex gap-3">
                    <div className="img">
                    <img style={{borderRadius:"50%"}} src={Angela} alt="" />

                    </div>
                    <div className="text">
                        <h4>Angela Vatiga</h4>
                        <p style={{color:"lime"}}>Online</p>
                    </div>

                </div>
                <div className="icons d-flex gap-3">
                    <div className="video d-flex justify-content-center align-items-center" style={{width:"40px", height:"40px", border:"1px solid lightgray", borderRadius:"50%"}}>
                        <img src={Video} alt="" />
                    </div>
                    <div className="phone d-flex justify-content-center align-items-center" style={{width:"40px", height:"40px", border:"1px solid lightgray", borderRadius:"50%"}}>
                        <img src={Phone} alt="" />
                    </div>
                    <div className="dots d-flex justify-content-center align-items-center" style={{width:"40px", height:"40px", border:"1px solid lightgray", borderRadius:"50%"}}>
                        <img src={Dots} alt="" />
                    </div>
                </div>
            </div>
            <div className="card-body">
           <div className="row">
            <div className="col-md-4 offset-7  p-3 rounded mt-2" style={{backgroundColor:"lightgray"}}>
                <p>Hi, I See Your NFTs And They Are Really Awesome Bro.</p>
            </div>
            <div className="col-md-4 offset-10 mt-1">10:52</div>
           </div>
           <div className="col-md-5 offset-1 py-1 rounded mt-2 bg-dark text-light d-flex justify-content-center align-items-center">
            <p>Thanks Buddy, Glad You Like It.</p>
           </div>
           <div className="col-md-2 offset-1 mt-1">10:53</div>
           <div className="col-md-3 offset-8 p-1 rounded d-flex justify-content-center" style={{backgroundColor:"lightgray"}}><p>Your Best NFT So Far</p></div>
            <div className="col-md-4 offset-10 mt-1">10:53</div>
            <div className="col-md-3 offset-1 py-1 rounded mt-2 bg-dark text-light d-flex justify-content-center align-items-center"><p>Here’s The Image !!</p> </div>
            <img className='col-md-2 offset-1' src={img} alt="" />
            <div className="col-md-2 offset-1 ">10:53</div>
            </div>
            <div className="card-footer">
              <div className="col-md-10 offset-1 mt-3 d-flex  gap-2  "> 
               <div className='voice rounded bg-dark text-light position-relative' style={{width:"50px", height:"50px"}}>
                    <img style={{position:"absolute", right:"15px", top:"10px"}}  src={voice} alt="" />
                    
                </div>
                <button className='d-flex px-3 justify-content-between align-items-center rounded text-secondary border border-none' style={{height:"50px", width:"94%"}}>
                    <p>Write now...</p>
                <img src={send} alt="" />
                </button>
                </div>
            </div>
          
           
            
        </div>
    );
}

export default Chat;
