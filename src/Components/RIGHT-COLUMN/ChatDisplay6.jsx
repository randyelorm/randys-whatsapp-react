import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg6 from "../../Images/6.jpeg"
import "./right.css"

const ChatDisplay6 = () => {
    const [microphoneicon6, setMicphoneIcon6] = useState( "fas fa-microphone")
   
    const handleIconChange6 = ()=> {
        setMicphoneIcon6("fab fa-google-play")
    }
    return (
    <div className = "chat-body">

        <div class ="chat-heading">
          <span class ="contact-img-name-last-seen">
            <img src={contactImg6} class ="contact-img" alt="" />
            <span>
               <h4 class ="chat-contact-name">Mummy💞</h4>
               <span class ="last_seen">last seen today at 14:23</span>
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
                Code man  <br />
               </Card.Text>
               <span className = "text-time-stamp">10:45</span>
           </Card.Body>
           </Card>
            
       </div>

       <div class="row">
       
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
               😂 😂 😂 😂 😂
               </Card.Text>
               <span className = "text-time-stamp">10:46<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
           
       </div>

        <br/>

       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
                Yes mummy
               </Card.Text>
               <span className = "text-time-stamp">10:56<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
       </div>


       <div class="row">
        
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
               <Card.Text>
               How are you?
               </Card.Text>
               <span className = "text-time-stamp">11:00</span>
           </Card.Body>
           </Card>
           </div>

           <br/>

       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               Code man
               </Card.Text>
               <span className = "text-time-stamp">11:39</span>
           </Card.Body>
           </Card>
       </div>
        
        <br/>

       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               You see that your laptop?
               </Card.Text>
               <span className = "text-time-stamp">11:48</span>
           </Card.Body>
           </Card>
       </div>
        <br />
       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received last-text ">
           <Card.Body>
   
               <Card.Text>
               Bring it along tonight okay?😂😂😂
               </Card.Text>
               <span className = "text-time-stamp">11:51</span>
           </Card.Body>
           </Card>
       </div>

      <br />
  
           <Form className = "form">
           <Form.Group className="mb-3 send-message-form-box"   controlId="">
           <i class="far fa-grin-alt"></i>
           <i class="fas fa-paperclip"></i>
           <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange6}   placeholder="Type a message" />
           <i class={microphoneicon6}></i>
           
           </Form.Group>


           </Form>

       </div>
    );
}

export default ChatDisplay6;
