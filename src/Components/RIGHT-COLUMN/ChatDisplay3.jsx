import React from 'react';
import chatimg from "../../Images/chatimg1.jpeg"
import contactImg3 from "../../Images/3.jpeg"

import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import "./right.css"
const ChatDisplay3 = () => {
    return (
       <>
<div  className = "chat-body">
               
                
               <div class ="chat-heading">
                 <span class ="contact-img-name-last-seen">
                   <img src={contactImg3} class ="contact-img" alt="" />
                   <span>
                      <h4>Ella  <span role="img">💘💘</span> </h4>
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
                     He said its 80 cedis <br />
                     <span className = "text-time-stamp">10:23</span>
                  </div>
              </div>
              <div class="row">
                  
                  <div class="col-md-6 offset-md-6 each_text_sent">
                      
                      Isin't it too expensive? <br />
                      <span className = "text-time-stamp">10:26 <CheckAll className = "received-check"/></span>
                  
                  </div>
              </div>
          <br />
              <div class="col-md-6 offset-md-6 each_text_sent">
                      
                     Send a picture<br />
                       <span className = "text-time-stamp">10:26 <CheckAll className = "received-check"/></span>
                   
                   </div>
      
              <div class="row">
                  <div class="col-md-4 each_text_received">
                     I think it's okay<br />
                     <span className = "text-time-stamp">10:27</span>
                  </div>
              </div>
            
              <br/>
              <div class="row">
                  <div class="col-md-4 each_text_received">
                     But he said he can beat down the price <br />
                     <span className = "text-time-stamp">10:29</span>
                  </div>
              </div>
              <br/>
             
              <div class="row">
                  <div class="col-md-4 each_text_received">
                     <img src={chatimg} class = "chat-img" alt="" /><br />
                     <span className = "text-time-stamp">11:19</span>
                  </div>
              </div>
      
              <br/>
      
          
      
              <br />
              <div class="row">
                  <div class="col-md-4 each_text_received">
                  What do you think? <span role="img">🧐</span><br />
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
        </>
    );
}

export default ChatDisplay3;
