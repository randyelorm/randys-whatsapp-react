import React, {useState} from 'react';
import "./right.css"
import Card from 'react-bootstrap/Card';

import contactImg1 from "../../Images/1.jpeg"
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

const ChatDisplay1 = () => {

    const [microphoneicon, setMicphoneIcon] = useState( "fas fa-microphone")
   
    const handleIconChange = ()=> {
        setMicphoneIcon("fab fa-google-play")
    }


    return (
        <>
        <div className = "chat-body">

         <div class ="chat-heading">
           <span class ="contact-img-name-last-seen">
             <img src={contactImg1} class ="contact-img" alt="" />
             <span>
                <h4 class ="chat-contact-name">Randy Davoh</h4>
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
       
            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received first-text">
            <Card.Body>
    
                <Card.Text>
                How are you doing? <br />
                </Card.Text>
                <span className = "text-time-stamp">06:15</span>
            </Card.Body>
            </Card>
             
        </div>

        <div class="row">
        
            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>
    
                <Card.Text>
                I am awesome. Whatsapp? <br />
                </Card.Text>
                <span className = "text-time-stamp">06:15<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
            
        </div>

        <div class="row">
         
            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
            <Card.Body>
    
                <Card.Text>
                I am good <br />
                </Card.Text>
                <span className = "text-time-stamp">06:16</span>
            </Card.Body>
            </Card>
            </div>
       


        <div class="row">
            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>
    
                <Card.Text>
                Thats good! 
                </Card.Text>
                <span className = "text-time-stamp">06:17<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
        </div>


        <div class="row">
          
            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
            <Card.Body>
                <Card.Text>
                I will return the car today<br />
                </Card.Text>
                <span className = "text-time-stamp">06:18</span>
            </Card.Body>
            </Card>
           
        </div>


        <div class="row">      
            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>
    
                <Card.Text>
               Awesome, I will be home
                </Card.Text>
                <span className = "text-time-stamp">06:19<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
        </div>



        <div class="row">
            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
            <Card.Body>
    
                <Card.Text>
                Expect me at 5:30pm. Thanks so much bro.
                </Card.Text>
                <span className = "text-time-stamp">06:19</span>
            </Card.Body>
            </Card>
        </div>



       <br />

      
        <div class="row"> 
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent  last-text" >
            <Card.Body>
    
                <Card.Text>
                haha..You are welcome bro.😎😎  
                </Card.Text>
                <span className = "text-time-stamp">06:19<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
        </div>

       
    
     

      
            <Form className = "form">
            <Form.Group className="mb-3 send-message-form-box"   controlId="">
            <i class="far fa-grin-alt"></i>
            <i class= "fas fa-paperclip"></i>
            <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange}  placeholder="Type a message" />
            <i class={microphoneicon}></i>
            
            </Form.Group>


            </Form>

        </div>
        </>
    );
}

export default ChatDisplay1;