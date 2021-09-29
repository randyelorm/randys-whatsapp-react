import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg5 from "../../Images/5.jpeg"
import "./right.css"

const ChatDisplay5 = () => {
    const [microphoneicon5, setMicphoneIcon5] = useState( "fas fa-microphone")
   
    const handleIconChange5 = ()=> {
        setMicphoneIcon5("fab fa-google-play")
    }
    return (
        <>
        <div  className = "chat-body">
                
        <div class ="chat-heading">
        <span class ="contact-img-name-last-seen">
            <img src={contactImg5} class ="contact-img" alt="" />
            <span>
            <h4 class ="chat-contact-name">Nioski</h4>
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
                  Randyyyyyyyy
                </Card.Text>
                <span className = "text-time-stamp">09:15</span>
            </Card.Body>
            </Card>
                
            </div>

            <br/>

            <div class="row">
            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <div class = "reply-box-2">
                <span className = "them">Nioski</span> <br/>
                <span className = "reply-text"> Randyyyyyyyy</span> 
                </div> 
            <Card.Body className = "reply-body">
                <Card.Text>
                How are you doing bro?
                </Card.Text>
                <span className = "text-time-stamp">11:05<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
            
            </div>

            <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
            <Card.Body>

                <Card.Text>
                 Iam great. Have you read through yet?
                </Card.Text>
                <span className = "text-time-stamp">09:15</span>
            </Card.Body>
            </Card>
                
            </div>

            <div class="row">

        <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
        <Card.Body>

            <Card.Text>
             Not really 😂 😂
            </Card.Text>
            <span className = "text-time-stamp">11:05<CheckAll className = "received-check"/></span>
        </Card.Body>
        </Card>

        </div>

            <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
            <Card.Body>
          
                <Card.Text>
                Oh why 😂 😂 😂 😂
                </Card.Text>
                <span className = "text-time-stamp">11:10</span>
            </Card.Body>
            </Card>
            </div>


       <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
        <Card.Body>

            <Card.Text>
           Its' too long  😂😂😂😂😂😂😂😂
            </Card.Text>
            <span className = "text-time-stamp">11:43<CheckAll className = "received-check"/></span>
        </Card.Body>
        </Card>
        


        
            <Form className = "form">
            <Form.Group className="mb-3 send-message-form-box"   controlId="">
            <i class="far fa-grin-alt"></i>
            <i class="fas fa-paperclip"></i>
            <Form.Control type="text" className ="send-mesage-form"  onChange = {handleIconChange5}  placeholder="Type a message" />
            <i class={microphoneicon5}></i>
            
            </Form.Group>


            </Form>

        
    </div>
    </>
    );
}

export default ChatDisplay5;
