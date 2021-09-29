import React, {useState} from 'react';
import "./right.css";
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg8 from "../../Images/8.jpeg"

const ChatDisplay8 = () => {
    const [microphoneicon8, setMicphoneIcon8] = useState( "fas fa-microphone")
   
    const handleIconChange8 = ()=> {
        setMicphoneIcon8("fab fa-google-play")
    }
    return (
        <div className = "chat-body">

        <div class ="chat-heading">
          <span class ="contact-img-name-last-seen">
            <img src={contactImg8} class ="contact-img" alt="" />
            <span>
               <h4 class ="chat-contact-name">Araba</h4>
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
                Hello dear.
               </Card.Text>
               <span className = "text-time-stamp">11:45</span>
           </Card.Body>
           </Card>
            
       </div>


        <div class="row">
       
       <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
       <Card.Body>

           <Card.Text>
            hey dear 🤓🤓🤓🤓
           </Card.Text>
           <span className = "text-time-stamp">11:45<CheckAll className = "received-check"/></span>
       </Card.Body>
       </Card>
       
      </div>

       <div class="row">
        
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
               <Card.Text>
             <a href = "https://randys-portfolio.netlify.app/" className = "sent-links">
                 https://randys-portfolio.netlify.app/</a>
               </Card.Text>
               <span className = "text-time-stamp">12:18</span>
           </Card.Body>
           </Card>
           </div>

           <br/>

           <div class="row">
        
        <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
        <Card.Body>
            <Card.Text>
          <a href = "https://my-react-quiz-game.netlify.app/" className = "sent-links">
          https://my-react-quiz-game.netlify.app/</a>
            </Card.Text>
            <span className = "text-time-stamp">12:18</span>
        </Card.Body>
        </Card>
        </div>

           <br/>

           <div class="row">
        
        <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
        <Card.Body>
            <Card.Text>
          <a href = "https://linkedin-tailored.netlify.app/" className = "sent-links">
          https://linkedin-tailored.netlify.app/</a>
            </Card.Text>
            <span className = "text-time-stamp">12:18</span>
        </Card.Body>
        </Card>
        </div>

        <br/>
        <div class="row">
        
        <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
        <Card.Body>
            <Card.Text>
          <a href = "https://instagram-hybrid.netlify.app/" className = "sent-links">
            https://instagram-hybrid.netlify.app/</a>
            </Card.Text>
            <span className = "text-time-stamp">12:18</span>
        </Card.Body>
        </Card>
        </div>
        <br/>

        <div class="row">
        
           <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
           <Card.Body>
               <Card.Text>
             <a href = "https://randys-netflix-clone.netlify.app/" className = "sent-links">
             https://randys-netflix-clone.netlify.app/</a>
               </Card.Text>
               <span className = "text-time-stamp">12:18</span>
           </Card.Body>
           </Card>
           </div>

        <br/>

        <div class="row">
        
        <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received last-text">
        <Card.Body>
            <Card.Text>
            Check these out when you can😘
            </Card.Text>
            <span className = "text-time-stamp">12:19</span>
        </Card.Body>
        </Card>
        </div>

        <br/>




  

      
  
       <br />

           <Form className = "form">
           <Form.Group className="mb-3 send-message-form-box"   controlId="">
           <i class="far fa-grin-alt"></i>
           <i class="fas fa-paperclip"></i>
           <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange8}    placeholder="Type a message" />
           <i class={microphoneicon8}></i>
           
           </Form.Group>


           </Form>

       </div>
    );
}

export default ChatDisplay8;
