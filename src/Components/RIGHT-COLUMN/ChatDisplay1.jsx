import React from 'react';
import "./right.css"

import contactImg1 from "../../Images/1.jpeg"
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

const ChatDisplay1 = () => {
    return (
        <>
        <div className = "chat-body">

         <div class ="chat-heading">
           <span class ="contact-img-name-last-seen">
             <img src={contactImg1} class ="contact-img" alt="" />
             <span>
                <h4>Randy Davoh</h4>
                <span class ="last_seen">online</span>
             </span>
           
         </span>

             <span className = "chat-display-heading-icons">
             <i class="fas fa-video"></i>
             <i class="fas fa-phone-alt"></i>
             <i class="fas fa-search"></i>
             <i class="fas fa-angle-down"></i>
             </span>

         </div>

        <br />
        <div class="row">
            <div class="col-md-4 each_text_received">
               How are you doing? <br />
               <span className = "text-time-stamp">06:15</span>
            </div>
        </div>
        <div class="row">
            
            <div class="col-md-6 offset-md-6 each_text_sent">
                
                I am awesome. Whatsapp? <br />
                <span className = "text-time-stamp">06:15 <CheckAll className = "received-check"/></span>
            
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 each_text_received">
               I am good? <br />
               <span className = "text-time-stamp">06:16</span>
            </div>
        </div>
        <div class="row">
            
            <div class="col-md-6 offset-md-6 each_text_sent">
                
               Thats good! <br />
                <span className = "text-time-stamp">06:18 <CheckAll className = "received-check"/></span>
            
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 each_text_received">
               I will return the car today <br />
               <span className = "text-time-stamp">06:18</span>
            </div>
        </div>
        <div class="row">
            
            <div class="col-md-6 offset-md-6 each_text_sent">
                
                Awesome, I will be home<br />
                <span className = "text-time-stamp">06:18 <CheckAll className = "received-check"/></span>
            
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 each_text_received">
               Definitely, expect me at 1pm. <br />
               <span className = "text-time-stamp">06:19</span>
            </div>
        </div>
       <br />

        <div class="row">
            <div class="col-md-4 each_text_received">
               Thanks for the other time <br />
               <span className = "text-time-stamp">06:19</span>
            </div>
        </div>

        <div class="row">
            
            <div class="col-md-6 offset-md-6 each_text_sent">
                
               Definitely bro<br />
                <span className = "text-time-stamp">06:19 <CheckAll className = "received-check"/></span>
            
            </div>
        </div>
        <br />
        <div class="row">
            
            <div class="col-md-6 offset-md-6 each_text_sent">
                
               You are welcome <span role="img">😎</span><br />
                <span className = "text-time-stamp">06:19 <CheckAll className = "received-check"/></span>
            
            </div>
        </div>
             
            <Form>
            <Form.Group className="mb-3 send-message-form-box"   controlId="">
            <i class="far fa-grin-alt"></i>
            <i class="fas fa-paperclip"></i>
            <Form.Control type="text" className ="send-mesage-form"  placeholder="Type a message" />
            <i class="fas fa-microphone"></i>
            
            </Form.Group>


            </Form>

        </div>
        </>
    );
}

export default ChatDisplay1;