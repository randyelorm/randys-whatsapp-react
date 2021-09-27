import React from 'react';
import "./right.css"



import contactImg2 from "../../Images/2.jpg"
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

const ChatDisplay2 = () => {
    return (

   
        <div  className = "chat-body">
               
                
         <div class ="chat-heading">
           <span class ="contact-img-name-last-seen">
             <img src={contactImg2} class ="contact-img" alt="" />
             <span>
                <h4>Mina</h4>
                <span class ="last_seen">last seen today at 12:19</span>
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
            <span role="img">I can't stop laughing 😂😂😂 </span>  <br />
               <span className = "text-time-stamp">11:15</span>
            </div>
        </div>
        <div class="row">
            
            <div class="col-md-6 offset-md-6 each_text_sent">
                
                hahahaha😂😂😂<br />
                <span className = "text-time-stamp">11:15 <CheckAll className = "received-check"/></span>
            
            </div>
        </div>
    <br />
        <div class="col-md-6 offset-md-6 each_text_sent">
                
                I am going away 🏃 🏃 🏃 🏃 <br />
                 <span className = "text-time-stamp">11:16 <CheckAll className = "received-check"/></span>
             
             </div>

        <div class="row">
            <div class="col-md-4 each_text_received">
               Oh 😂😂😂 <br />
               <span className = "text-time-stamp">11:18</span>
            </div>
        </div>
      
        <br/>
        <div class="row">
            <div class="col-md-4 each_text_received">
               Please don't go <br />
               <span className = "text-time-stamp">11:18</span>
            </div>
        </div>
        <br/>
       
        <div class="row">
            <div class="col-md-4 each_text_received">
               I will stop laughing<br />
               <span className = "text-time-stamp">11:19</span>
            </div>
        </div>

        <br/>

        <div class="row">
            <div class="col-md-4 each_text_received">
               I will try to stop laughing  😂  <br />
               <span className = "text-time-stamp">11:20</span>
            </div>
        </div>
       <br />

        <div class="row">
            <div class="col-md-4 each_text_received">
               Oh you left? 😂😂😂 <br />
               <span className = "text-time-stamp">11:21</span>
            </div>
        </div>

        <br />
        <div class="row">
            <div class="col-md-4 each_text_received">
            😂😂😂😂😂 Come back<br />
               <span className = "text-time-stamp">11:21</span>
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

    );
}

export default ChatDisplay2;
