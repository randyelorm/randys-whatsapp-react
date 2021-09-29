import React, {useState} from 'react';
import "./right.css";
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg10 from "../../Images/10.jpeg"

const ChatDisplay10 = () => {
    const [microphoneicon10, setMicphoneIcon10] = useState( "fas fa-microphone")
   
    const handleIconChange10 = ()=> {
        setMicphoneIcon10("fab fa-google-play")
    }
    return (
 <div className = "chat-body">

            <div class ="chat-heading">
            <span class ="contact-img-name-last-seen">
                <img src={contactImg10} class ="contact-img" alt="" />
                <span>
                <h4 class ="chat-contact-name">Isaac</h4>
                <span class ="last_seen">last seen today at 18:21</span>
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
                    Did you make the sale?
                </Card.Text>
                <span className = "text-time-stamp">13:01</span>
            </Card.Body>
            </Card>
                
            </div>

            <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>

                <Card.Text>
                Yes, I did.
                </Card.Text>
                <span className = "text-time-stamp">13:39<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
            
            </div>

            <br/>

            <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>

                <Card.Text>
                About 10 minutes ago.
                </Card.Text>
                <span className = "text-time-stamp">13:39<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>

            </div>

            <br/>

            <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>

            <Card.Text>
            How do I get it?
            </Card.Text>
            <span className = "text-time-stamp">13:40<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>

            </div>

            <div class="row">
            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received ">
            <div class = "reply-box">
                <span className = "You">You</span> <br/>
                <span className = "reply-text">How do I get it?</span> 
                </div>
            <Card.Body>

                <Card.Text>
                I gave it to a delivery guy.
                </Card.Text>
                <span className = "text-time-stamp">13:42</span>
            </Card.Body>
            </Card>
            </div>

            <br/>

            <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received last-text">
            <Card.Body>
                <Card.Text>
                Let me know when you receive it.
                </Card.Text>
                <span className = "text-time-stamp">13:43</span>
            </Card.Body>
            </Card>
            </div>

         

    

            <Form className = "form">
            <Form.Group className="mb-3 send-message-form-box"   controlId="">
            <i class="far fa-grin-alt"></i>
            <i class="fas fa-paperclip"></i>
            <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange10} placeholder="Type a message" />
            <i class={microphoneicon10}></i>
            
            </Form.Group>


            </Form>

</div>
     
    );
}

export default ChatDisplay10;
