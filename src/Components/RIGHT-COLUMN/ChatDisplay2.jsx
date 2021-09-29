import React, {useState} from 'react';
import "./right.css"
import Card from 'react-bootstrap/Card';


import { CheckAll} from 'react-bootstrap-icons';
import contactImg2 from "../../Images/2.jpg"

import Form from 'react-bootstrap/Form';

const ChatDisplay2 = () => {

    const [microphoneicon2, setMicphoneIcon2] = useState( "fas fa-microphone")
   
    const handleIconChange2 = ()=> {
        setMicphoneIcon2("fab fa-google-play")
    }

    return (

   
        <div className = "chat-body">

        <div class ="chat-heading">
          <span class ="contact-img-name-last-seen">
            <img src={contactImg2} class ="contact-img" alt="" />
            <span>
               <h4 class ="chat-contact-name">Mina</h4>
               <span class ="last_seen">last seen today at 12:43</span>
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
      
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received first-text">
           <Card.Body>
   
               <Card.Text>
                Did you really do that? 😂  <br />
               </Card.Text>
               <span className = "text-time-stamp">10:15</span>
           </Card.Body>
           </Card>
            
       </div>

       <div class="row">
       
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
               Yes please 😂<br />
               </Card.Text>
               <span className = "text-time-stamp">10:16<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
           
       </div>

       <div class="row">
        
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               Why did you do it 😂😂
               </Card.Text>
               <span className = "text-time-stamp">10:23</span>
           </Card.Body>
           </Card>
           </div>
      


       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
                 I don't know 🤷‍♂️🤷‍♂️
               </Card.Text>
               <span className = "text-time-stamp">10:23<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
       </div>


       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               So what came over you?
               </Card.Text>
               <span className = "text-time-stamp">11:13</span>
           </Card.Body>
           </Card>
       </div>

        <br/>

       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
              I can't stop laughing 😂😂😂😂
               </Card.Text>
               <span className = "text-time-stamp">11:14</span>
           </Card.Body>
           </Card>
       </div>


       <br/>


       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               Why are you offline😂😂
               </Card.Text>
               <span className = "text-time-stamp">11:19</span>
           </Card.Body>
           </Card>
       </div>
        
        <br/>

       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               Mr. I don't know why 😂😂
               </Card.Text>
               <span className = "text-time-stamp">11:20</span>
           </Card.Body>
           </Card>
       </div>
        <br />
       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received last-text ">
           <Card.Body>
   
               <Card.Text>
               😂😂😂😂😂 Come back here right now
               </Card.Text>
               <span className = "text-time-stamp">11:21</span>
           </Card.Body>
           </Card>
       </div>



      <br />

  
      
   
    

     
           <Form className = "form">
           <Form.Group className="mb-3 send-message-form-box"   controlId="">
           <i class="far fa-grin-alt"></i>
           <i class="fas fa-paperclip"></i>
           <Form.Control type="text" className ="send-mesage-form"  onChange = {handleIconChange2}   placeholder="Type a message" />
           <i class={microphoneicon2}></i>
           
           </Form.Group>


           </Form>

       </div>
    );
}

export default ChatDisplay2;
