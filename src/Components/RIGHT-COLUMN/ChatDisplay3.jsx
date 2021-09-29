import React, {useState} from 'react';
import chatimg from "../../Images/chatimg1.jpeg"
import contactImg3 from "../../Images/3.jpeg"
import Card from 'react-bootstrap/Card';
import { CheckAll} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import "./right.css"
const ChatDisplay3 = () => {
    const [microphoneicon3, setMicphoneIcon3] = useState( "fas fa-microphone")
   
    const handleIconChange3 = ()=> {
        setMicphoneIcon3("fab fa-google-play")
    }

    return (
       <>
<div className = "chat-body">

            <div class ="chat-heading">
            <span class ="contact-img-name-last-seen">
                <img src={contactImg3} class ="contact-img" alt="" />
                <span>
                <h4 class ="chat-contact-name">Ella💘💘</h4>
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
                       What's your budget? <br />
                    </Card.Text>
                    <span className = "text-time-stamp">10:15</span>
                </Card.Body>
                </Card>
                    
                </div>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
                <Card.Body>

                    <Card.Text>
                     I can pay 50 cedis.
                    </Card.Text>
                    <span className = "text-time-stamp">10:16<CheckAll className = "received-check"/></span>
                </Card.Body>
                </Card>
                
                </div>

                <br/>

                <div class="row">

            <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
            <Card.Body>

                <Card.Text>
                Please send me a picture.
                </Card.Text>
                <span className = "text-time-stamp">10:16<CheckAll className = "received-check"/></span>
            </Card.Body>
            </Card>

            </div>

                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received">
                <Card.Body>
              
                    <Card.Text>
                    I will ask him.
                    </Card.Text>
                    <span className = "text-time-stamp">10:23</span>
                </Card.Body>
                </Card>
                </div>



                <div class="row">

                <Card style={{ width: '18rem' }}  className="col-md-6 offset-md-6 each_text_sent " >
                <Card.Body>

                    <Card.Text>
                     Please do.
                    </Card.Text>
                    <span className = "text-time-stamp">10:16<CheckAll className = "received-check"/></span>
                </Card.Body>
                </Card>
                
                </div>


                <br/>

            <div class="row">
            
            <Card style={{ width: '18rem' }}  className="col-md-4 img-text each_text_received img-text">
            <div class = "reply-box">
               <span className = "You">You</span> <br/>
               <span className = "reply-text">Please send me a picture</span> 
            </div>
            <Card.Img variant="top" src={chatimg} />
            <Card.Body>
                <span className = "text-time-stamp">11:13</span>
            </Card.Body>
            </Card>
            </div>

                <br/>

                <div class="row">
                <Card style={{ width: '18rem' }}  className="col-md-4 each_text_received last-text">
                <Card.Body>

                    <Card.Text>
                    What do you think about it now?🧐🧐
                    </Card.Text>
                    <span className = "text-time-stamp">11:30</span>
                </Card.Body>
                </Card>
                </div>

            


            
                <Form className = "form">
                <Form.Group className="mb-3 send-message-form-box"  onChange = {handleIconChange3}    controlId="">
                <i class="far fa-grin-alt"></i>
                <i class="fas fa-paperclip"></i>
                <Form.Control type="text" className ="send-mesage-form"  placeholder="Type a message" />
                <i class={microphoneicon3}></i>
                
                </Form.Group>


                </Form>

</div>
        </>
    );
}

export default ChatDisplay3;
