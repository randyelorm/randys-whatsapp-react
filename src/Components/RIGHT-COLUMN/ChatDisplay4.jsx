import React, {useState} from 'react';
import "./right.css"
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg4 from "../../Images/4.jpeg"

const ChatDisplay4 = () => {
    const [microphoneicon4, setMicphoneIcon4] = useState( "fas fa-microphone")
   
    const handleIconChange4 = ()=> {
        setMicphoneIcon4("fab fa-google-play")
    }

    return (
        <>
            <div  className = "chat-body">
                    
            <div class ="chat-heading">
            <span class ="contact-img-name-last-seen">
                <img src={contactImg4} class ="contact-img" alt="" />
                <span>
                <h4 class ="chat-contact-name">Bevelyn</h4>
                <span class ="last_seen">last seen yesterday at 01:03</span>
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
                       I will be going out soon
                    </Card.Text>
                    <span className = "text-time-stamp">10:15</span>
                </Card.Body>
                </Card>
                    
                </div>

                <br/>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
                <Card.Body>

                    <Card.Text>
                    What time will she get here? <br />
                    </Card.Text>
                    <span className = "text-time-stamp">10:15</span>
                </Card.Body>
                </Card>
                    
                </div>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
                <div class = "reply-box-2">
                    <span className = "them">Bevelyn</span> <br/>
                    <span className = "reply-text">What time will she get here?</span> 
                    </div>
                   
                <Card.Body className = "reply-body">
                Very soon, I just spoke to her.
              
                    <Card.Text>
                    
                    </Card.Text>
                    <span className = "text-time-stamp">11:05<CheckAll className = "received-check"/></span>
                </Card.Body>
                </Card>
                
                </div>

                <br/>

                <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>

                <Card.Text>
               Are you running late?
                </Card.Text>
                <span className = "text-time-stamp">11:05<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>

            </div>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
                <Card.Body>
              
                    <Card.Text>
                    Yes, Kind of
                    </Card.Text>
                    <span className = "text-time-stamp">11:10</span>
                </Card.Body>
                </Card>
                </div>


           <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>

                <Card.Text>
               Don't worry later tomorrow.
                </Card.Text>
                <span className = "text-time-stamp">11:35<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
            


            
                <Form className = "form">
                <Form.Group className="mb-3 send-message-form-box" onChange = {handleIconChange4}  controlId="">
                <i class="far fa-grin-alt"></i>
                <i class="fas fa-paperclip"></i>
                <Form.Control type="text" className ="send-mesage-form"  placeholder="Type a message" />
                <i class={microphoneicon4}></i>
                
                </Form.Group>


                </Form>

            
        </div>
        </>
    );
}

export default ChatDisplay4;
