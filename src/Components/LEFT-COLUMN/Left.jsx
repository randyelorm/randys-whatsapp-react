import React, {useState} from 'react';
import "./left.css"
import { Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import myImg from "../../Images/me.jpg" 
import contactImg1 from "../../Images/1.jpeg"
import contactImg2 from "../../Images/2.jpg"
import contactImg3 from "../../Images/3.jpeg"
import contactImg4 from "../../Images/4.jpeg"
import contactImg5 from "../../Images/5.jpeg"
import contactImg6 from "../../Images/6.jpeg"
import contactImg7 from "../../Images/7.jpeg"
import contactImg8 from "../../Images/8.jpeg"
import contactImg9 from "../../Images/9.jpeg"
import contactImg10 from "../../Images/10.jpeg"
import contactImg11 from "../../Images/11.jpeg"

import { CheckAll} from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';


const Left = () => {

        const [notificationColor, setnotificationColor] = useState("#00AF9C")
        const [notificationColor2, setnotificationColor2] = useState("#00AF9C")
        const [notificationColor3, setnotificationColor3] = useState("#00AF9C")
        const [notificationColor4, setnotificationColor4] = useState("#00AF9C")
        const [notificationColor5, setnotificationColor5] = useState("#00AF9C")
        const [notificationColor6, setnotificationColor6] = useState("#00AF9C")
        const [notificationColor7, setnotificationColor7] = useState("#00AF9C")
        const [notificationColor8, setnotificationColor8] = useState("#00AF9C")
        const [notificationColor9, setnotificationColor9] = useState("#00AF9C")
        const [notificationColor10, setnotificationColor10] = useState("#00AF9C")
        const [notificationColor11, setnotificationColor11] = useState("#00AF9C")

        const [notificationCount, setnotificationCount] = useState("block")
        const [notificationCount2, setnotificationCount2] = useState("block")
        const [notificationCount3, setnotificationCount3] = useState("block")
        const [notificationCount4, setnotificationCount4] = useState("block")
        const [notificationCount5, setnotificationCount5] = useState("block")
        const [notificationCount6, setnotificationCount6] = useState("block")
        const [notificationCount7, setnotificationCount7] = useState("block")
        const [notificationCount8, setnotificationCount8] = useState("block")
        const [notificationCount9, setnotificationCount9] = useState("block")
        const [notificationCount10, setnotificationCount10] = useState("block")
        const [notificationCount11, setnotificationCount11] = useState("block")

        const [dropdownIcon, setdropdownIcon] = useState("none")
        const [dropdownIcon2, setdropdownIcon2] = useState("none")
        const [dropdownIcon3, setdropdownIcon3] = useState("none")
        const [dropdownIcon4, setdropdownIcon4] = useState("none")
        const [dropdownIcon5, setdropdownIcon5] = useState("none")
        const [dropdownIcon6, setdropdownIcon6] = useState("none")
        const [dropdownIcon7, setdropdownIcon7] = useState("none")
        const [dropdownIcon8, setdropdownIcon8] = useState("none")
        const [dropdownIcon9, setdropdownIcon9] = useState("none")
        const [dropdownIcon10, setdropdownIcon10] = useState("none")
        const [dropdownIcon11, setdropdownIcon11] = useState("none")

       const handleRemoveNotificationOnlclick =()=> {
                setnotificationColor("transparent")
                setnotificationCount("none")
        }

        const handleRemoveNotificationOnlclick2 =()=> {
                setnotificationColor2("transparent")
                setnotificationCount2("none")
        }

        const handleRemoveNotificationOnlclick3 =()=> {
                setnotificationColor3("transparent")
                setnotificationCount3("none")
        }

        const handleRemoveNotificationOnlclick4 =()=> {
                setnotificationColor4("transparent")
                setnotificationCount4("none")
        }

        const handleRemoveNotificationOnlclick5 =()=> {
                setnotificationColor5("transparent")
                setnotificationCount5("none")
        }

        const handleRemoveNotificationOnlclick6 =()=> {
                setnotificationColor6("transparent")
                setnotificationCount6("none")
        }

        const handleRemoveNotificationOnlclick7 =()=> {
                setnotificationColor7("transparent")
                setnotificationCount7("none")
        }

        const handleRemoveNotificationOnlclick8 =()=> {
                setnotificationColor8("transparent")
                setnotificationCount8("none")
        }

        const handleRemoveNotificationOnlclick9 =()=> {
                setnotificationColor9("transparent")
                setnotificationCount9("none")
        }

        const handleRemoveNotificationOnlclick10 =()=> {
                setnotificationColor10("transparent")
                setnotificationCount10("none")
        }

        const handleRemoveNotificationOnlclick11 =()=> {
                setnotificationColor11("transparent")
                setnotificationCount11("none")
        }



        const handleOnMouseEnter= ()=> {
                setdropdownIcon("block")
        }

        const handleOnMouseLeave= ()=> {
                setdropdownIcon("none")
        }

        const handleOnMouseEnter2= ()=> {
                setdropdownIcon2("block")
        }

        const handleOnMouseLeave2= ()=> {
                setdropdownIcon2("none")
        }

        const handleOnMouseEnter3= ()=> {
                setdropdownIcon3("block")
        }

        const handleOnMouseLeave3= ()=> {
                setdropdownIcon3("none")
        }

        const handleOnMouseEnter4= ()=> {
                setdropdownIcon4("block")
        }

        const handleOnMouseLeave4= ()=> {
                setdropdownIcon4("none")
        }

        const handleOnMouseEnter5= ()=> {
                setdropdownIcon5("block")
        }

        const handleOnMouseLeave5= ()=> {
                setdropdownIcon5("none")
        }

        const handleOnMouseEnter6= ()=> {
                setdropdownIcon6("block")
        }

        const handleOnMouseLeave6= ()=> {
                setdropdownIcon6("none")
        }

        const handleOnMouseEnter7= ()=> {
                setdropdownIcon7("block")
        }

        const handleOnMouseLeave7= ()=> {
                setdropdownIcon7("none")
        }

        const handleOnMouseEnter8= ()=> {
                setdropdownIcon8("block")
        }

        const handleOnMouseLeave8= ()=> {
                setdropdownIcon8("none")
        }

        const handleOnMouseEnter9= ()=> {
                setdropdownIcon9("block")
        }

        const handleOnMouseLeave9= ()=> {
                setdropdownIcon9("none")
        }

        const handleOnMouseEnter10= ()=> {
                setdropdownIcon10("block")
        }

        const handleOnMouseLeave10= ()=> {
                setdropdownIcon10("none")
        }
        const handleOnMouseEnter11= ()=> {
                setdropdownIcon11("block")
        }

        const handleOnMouseLeave11= ()=> {
                setdropdownIcon11("none")
        }


        

  
    return (
        <div class = "left-box">

<div class ="left-profile-heading">
           <span class ="">    
         </span>

             <span className = "left-heading-icons">
             <img src={myImg} class ="contact-img" alt="" />
             <i class="fas fa-circle-notch"></i>
             <i class="far fa-edit"></i>
             <i class="fas fa-angle-down"></i>
           
             </span>

 </div>
        <br />
                <Form>
                <Form.Group className="mb-3 p-3">
               
                <Form.Control type="text" className = "search-form"  placeholder="Search or start new chat" />
                </Form.Group>
                 
                </Form>
            <hr />
            <Link to = "/" onClick = {handleRemoveNotificationOnlclick} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter} onMouseLeave = {handleOnMouseLeave}> 
                 <div className = "img-nd-descrip" >
   
             
                              <img src={contactImg1} class ="contact-img" alt="" />   
                                <span className = "contactName-text-preview">
                                
                                        <span>
                                        <h5 className = "chat-name">Randy Davoh</h5>  
                                        <p className = "text-preview">
                                        <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                                </p>
                                        </span>
                                </span> 
            
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        {/* <span className = "notification-count" style = {{backgroundColor: notificationColor, display:notificationCount, color:"black" }}>
                                              8   
                                         </span> */}
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                        
                 </div>
            </Link> 
            <hr />


            <Link to = "/chatdisplay2"  onClick = {handleRemoveNotificationOnlclick2} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter2} onMouseLeave = {handleOnMouseLeave2}> 
        
            <div className = "img-nd-descrip" >
                         <img src={contactImg2} class ="contact-img" alt="" />

                         <span className = "contactName-text-preview">
                                 <span>
                                 <h5 className = "chat-name">Mina </h5>  
                                 <p className = "text-preview">
                                 😂😂😂😂😂 Come back
                                         </p>
                                 </span>
                         </span>    
                                 <p class = "time-stamp">
                                     11:21 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor2, display:notificationCount2, color:"black" }}>
                                              6 
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon2}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         
                 </div>
            </Link> 
            <hr />
            <Link to = "/chatdisplay3" onClick = {handleRemoveNotificationOnlclick3} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter3} onMouseLeave = {handleOnMouseLeave3}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg3} class ="contact-img" alt="" />

                         <span className = "contactName-text-preview">
                                 <span>
                                 <h5 className = "chat-name">Ella  <span role="img">💘💘</span> </h5>  
                                 <p className = "text-preview">
                                 What do you think? <span role="img">🧐</span>
                                         </p>
                                 </span>
                          </span> 
                                 <p class = "time-stamp">
                                     11:30 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor3, display:notificationCount3, color:"black" }}>
                                              2  
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon3}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                       
                 </div>
            </Link> 
            <hr />
            <Link to = "/chatdisplay4" onClick = {handleRemoveNotificationOnlclick4} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter4} onMouseLeave = {handleOnMouseLeave4}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg4}class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Bevelyn</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor4, display:notificationCount4, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon4}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
            </Link> 
            <hr />

            <Link to = "/chatdisplay5"  onClick = {handleRemoveNotificationOnlclick5} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter5} onMouseLeave = {handleOnMouseLeave5}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg5}class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Nioski</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor5, display:notificationCount5, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon5}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div> 
            </Link> 
            <hr />
            <Link to = "/chatdisplay6"   onClick = {handleRemoveNotificationOnlclick6} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter6} onMouseLeave = {handleOnMouseLeave6}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg6} class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Mummy<span role="img">💞</span></h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor6, display:notificationCount6, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon6}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
            </Link> 
            <hr />

            <Link to = "/chatdisplay7"   onClick = {handleRemoveNotificationOnlclick7} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter7} onMouseLeave = {handleOnMouseLeave7}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg7} class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Tim</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor7, display:notificationCount7, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon7}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
            </Link> 
            <hr />
                      <Link to = "/chatdisplay8"   onClick = {handleRemoveNotificationOnlclick8} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter8} onMouseLeave = {handleOnMouseLeave8}> 
                      <div className = "img-nd-descrip" >
                         <img src={contactImg8}class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Araba</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor8, display:notificationCount8, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon8}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
            </Link> 
            <hr />
            <Link to = "/chatdisplay9"   onClick = {handleRemoveNotificationOnlclick9} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter9} onMouseLeave = {handleOnMouseLeave9}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg9} class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Genevieve</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor9, display:notificationCount9, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon9}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
            </Link> 
            <hr />

            <Link to = "/chatdisplay10"   onClick = {handleRemoveNotificationOnlclick10} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter10} onMouseLeave = {handleOnMouseLeave10}> 
            <div className = "img-nd-descrip" >
                         <img src={contactImg10}class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Isaac</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor10, display:notificationCount10, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon10}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
            </Link>  
            <hr />

            <hr />

        <Link to = "/chatdisplay11"   onClick = {handleRemoveNotificationOnlclick11} className = "each-link-to-chats" onMouseEnter ={handleOnMouseEnter11} onMouseLeave = {handleOnMouseLeave11}> 
        <div className = "img-nd-descrip" >
                         <img src={contactImg11} class ="contact-img" alt="" />

                         <span className = "contactName-text-preview-nd-timestamp">
                                 <span>
                                 <h5 className = "chat-name">Auntie Yaa</h5>  
                                 <p className = "text-preview">
                                 <CheckAll class = "received-check "/> You are welcome <span role="img">😎</span>
                                         </p>
                                 </span>
                               
                                 <p class = "time-stamp">
                                     06:19 <br /> 
                                    <span class ="time-stamp-dropdown">
                                        <span className = "notification-count" style = {{backgroundColor: notificationColor11, display:notificationCount11, color:"black" }}>
                                              8   
                                         </span>
                                        
                                         <Dropdown>
                                        <Dropdown.Toggle style = {{display:dropdownIcon11}} id="dropdown-basic" class = "dropdown-toggle" >
                                        <i class="fas fa-angle-down dropdown-icon" ></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className = "dropdown-menu">
                                        <Dropdown.Item href="#/action-1" className = "each-drop-item">Archive chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className = "each-drop-item">Mute notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Delete chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Pin chat</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className = "each-drop-item">Mark as read</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                   
                                   </span>
                                       
                                 </p> 
                                
                         </span>
                 </div>
        </Link>  
<hr />
         
        </div>
    );
}

export default Left;
