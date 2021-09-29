import React, {useState} from 'react';
import "./right.css";
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import contactImg11 from "../../Images/11.jpeg"



const ChatDisplay11 = () => {
    const [microphoneicon11, setMicphoneIcon11] = useState( "fas fa-microphone")
   
    const handleIconChange11 = ()=> {
        setMicphoneIcon11("fab fa-google-play")
    }
    return (
        <>
            <div  className = "chat-body">
                    
            <div class ="chat-heading">
            <span class ="contact-img-name-last-seen">
                <img src={contactImg11} class ="contact-img" alt="" />
                <span>
                <h4 class ="chat-contact-name">Aunt Yaa</h4>
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
                      I didn't see you with it.
                    </Card.Text>
                    <span className = "text-time-stamp">14:01</span>
                </Card.Body>
                </Card>
                    
                </div>

                <br/>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
                <Card.Body>

                    <Card.Text>
                    Did you bring it? <br />
                    </Card.Text>
                    <span className = "text-time-stamp">14:07</span>
                </Card.Body>
                </Card>
                    
                </div>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
                <div class = "reply-box-2">
                    <span className = "them">Auntie Yaa</span> <br/>
                    <span className = "reply-text">I didn't see you with it</span> 
                    </div>
                   
                <Card.Body className = "reply-body">
                
              
                    <Card.Text>
                    😂😂😂😂😂😂😂😂😂
                    </Card.Text>
                    <span className = "text-time-stamp">14:16<CheckAll className = "received-check"/></span>
                </Card.Body>
                </Card>
                
                </div>

                <br/>

                <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <div class = "reply-box-2">
                    <span className = "them">Auntie Yaa</span> <br/>
                    <span className = "reply-text">Did you bring it?</span> 
                    </div>
            <Card.Body>

                <Card.Text>
               Yes I did but I hid it 😂😂.
                </Card.Text>
                <span className = "text-time-stamp">14:17<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>

            </div>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
                <Card.Body>
              
                    <Card.Text>
                    Why?
                    </Card.Text>
                    <span className = "text-time-stamp">14:18</span>
                </Card.Body>
                </Card>
                </div>

        <br />
            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent last-text" >
            <Card.Body>

                <Card.Text>
                I didn't want anyone to know😂.
                </Card.Text>
                <span className = "text-time-stamp">14:23<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>
            


            
                <Form className = "form">
                <Form.Group className="mb-3 send-message-form-box"   controlId="">
                <i class="far fa-grin-alt"></i>
                <i class="fas fa-paperclip"></i>
                <Form.Control type="text" className ="send-mesage-form" onChange = {handleIconChange11}   placeholder="Type a message" />
                <i class={microphoneicon11}></i>
                
                </Form.Group>


                </Form>

            
        </div>
        </>
    );
}

export default ChatDisplay11;
