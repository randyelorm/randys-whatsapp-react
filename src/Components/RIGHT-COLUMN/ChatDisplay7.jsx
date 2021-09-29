import React,{useState}from 'react';
import "./right.css"
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg7 from "../../Images/7.jpeg"

const ChatDisplay7 = () => {
    const [microphoneicon7, setMicphoneIcon7] = useState( "fas fa-microphone")
   
    const handleIconChange7= ()=> {
        setMicphoneIcon7("fab fa-google-play")
    }
    return (
        <div className = "chat-body">

        <div class ="chat-heading">
          <span class ="contact-img-name-last-seen">
            <img src={contactImg7} class ="contact-img" alt="" />
            <span>
               <h4 class ="chat-contact-name">Tim</h4>
               <span class ="last_seen">last seen today at 17:21</span>
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
                Can you please check your mail?
               </Card.Text>
               <span className = "text-time-stamp">11:45</span>
           </Card.Body>
           </Card>
            
       </div>

       <div class="row">
       
           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
           <Card.Body>
   
               <Card.Text>
               Yes, I will get back shortly.
               </Card.Text>
               <span className = "text-time-stamp">11:45<CheckAll className = "received-check"/></span>
           </Card.Body>
           </Card>
           
       </div>

        <br/>

        <div class="row">
       
       <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
       <Card.Body>

           <Card.Text>
           I am a bit busy now.
           </Card.Text>
           <span className = "text-time-stamp">11:45<CheckAll className = "received-check"/></span>
       </Card.Body>
       </Card>
       
      </div>

       <div class="row">
        
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
               <Card.Text>
               I sent it yesterday.
               </Card.Text>
               <span className = "text-time-stamp">11:46</span>
           </Card.Body>
           </Card>
           </div>

           <br/>

       <div class="row">
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received last-text">
           <div class = "reply-box">
               <span className = "You">You</span> <br/>
               <span className = "reply-text">Yes, I will get back shortly</span> 
            </div>
           <Card.Body>
   
               <Card.Text>
               Thank you. Let's about it soon 😎
               </Card.Text>
               <span className = "text-time-stamp">12:01</span>
           </Card.Body>
           </Card>
       </div>
        
        <br/>



  

      
  
       <br />

           <Form className = "form">
           <Form.Group className="mb-3 send-message-form-box"   controlId="">
           <i class="far fa-grin-alt"></i>
           <i class="fas fa-paperclip"></i>
           <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange7}   placeholder="Type a message" />
           <i class={microphoneicon7}></i>
           
           </Form.Group>


           </Form>

       </div>
    );
}

export default ChatDisplay7;
