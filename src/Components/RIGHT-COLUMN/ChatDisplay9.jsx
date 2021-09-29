import React, {useState} from 'react';
import "./right.css"
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg9 from "../../Images/8.jpeg"

const ChatDisplay9 = () => {
    const [microphoneicon9, setMicphoneIcon9] = useState( "fas fa-microphone")
   
    const handleIconChange9 = ()=> {
        setMicphoneIcon9("fab fa-google-play")
    }
    return (
        
        <div className = "chat-body">

        <div class ="chat-heading">
          <span class ="contact-img-name-last-seen">
            <img src={contactImg9} class ="contact-img" alt="" />
            <span>
               <h4 class ="chat-contact-name">Genevieve</h4>
               <span class ="last_seen">last seen today at 08:43</span>
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
                Helloooooooo <br />
               </Card.Text>
               <span className = "text-time-stamp">06:15</span>
           </Card.Body>
           </Card>
            
       </div>

       <div class="row">
       
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
               How are you doing?<br />
               </Card.Text>
               <span className = "text-time-stamp">06:16<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
           
       </div>

       <div class="row">
        
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               I am good, Yourself?
               </Card.Text>
               <span className = "text-time-stamp">06:17</span>
           </Card.Body>
           </Card>
           </div>
      


       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
                I am awesome 🥳🥳🥳🥳
               </Card.Text>
               <span className = "text-time-stamp">06:23<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
       </div>


       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
   
               <Card.Text>
               What time are we meeting?
               </Card.Text>
               <span className = "text-time-stamp">06:25</span>
           </Card.Body>
           </Card>
       </div>

        <br/>

        <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
                 brb
               </Card.Text>
               <span className = "text-time-stamp">06:26<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
       </div>

        
       <br />
        <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent" >
           <Card.Body>
   
               <Card.Text>
                I will leave home at 12pm
               </Card.Text>
               <span className = "text-time-stamp">10:23<CheckAll className = "unread-check"/></span>
           </Card.Body>
           </Card>
       </div>

        <br />
        <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent last-text " >
           <Card.Body>
   
               <Card.Text>
               See you soon😇😇😇😇😇😇😇
               </Card.Text>
               <span className = "text-time-stamp">12:32<CheckAll className = "unread-check"/></span>
           </Card.Body>
           </Card>
       </div>



      <br />

  
      

     
           <Form className = "form">
           <Form.Group className="mb-3 send-message-form-box"   controlId="">
           <i class="far fa-grin-alt"></i>
           <i class="fas fa-paperclip"></i>
           <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange9}   placeholder="Type a message" />
           <i class={microphoneicon9}></i>
           
           </Form.Group>


           </Form>

       </div>
    );
}

export default ChatDisplay9;
