import Left from "../src/Components/LEFT-COLUMN/Left"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatDisplay1 from "./Components/RIGHT-COLUMN/ChatDisplay1";
import ChatDisplay2 from "./Components/RIGHT-COLUMN/ChatDisplay2";
import ChatDisplay3 from "./Components/RIGHT-COLUMN/ChatDisplay3";
import ChatDisplay4 from "./Components/RIGHT-COLUMN/ChatDisplay4";
import ChatDisplay5 from "./Components/RIGHT-COLUMN/ChatDisplay5";
import ChatDisplay6 from "./Components/RIGHT-COLUMN/ChatDisplay6";
import ChatDisplay7 from "./Components/RIGHT-COLUMN/ChatDisplay7";
import ChatDisplay8 from "./Components/RIGHT-COLUMN/ChatDisplay8";
import ChatDisplay9 from "./Components/RIGHT-COLUMN/ChatDisplay9";
import ChatDisplay10 from "./Components/RIGHT-COLUMN/ChatDisplay10";
import ChatDisplay11 from "./Components/RIGHT-COLUMN/ChatDisplay11";
import "./App.css"
import {BrowserRouter as Router, Switch} from "react-router-dom"
import { Link} from "react-router-dom"


function App() {
  return (
    <>
    <div>
     <Router>
   
      <Container fluid>
          <Row>
            <Col xs = {4} class = "left-box-in-App.js">
               <Left/>
            </Col>
               
            
                <Col className = "All_Chat_Display_Container">
                    <Switch>
                        <ChatDisplay1 exact path = "/"/>
                        <ChatDisplay2 path = "/chatdisplay2"/>
                        <ChatDisplay3 path = "/chatdisplay3"/>
                        <ChatDisplay4 path = "/chatdisplay4"/>
                        <ChatDisplay5 path = "/chatdisplay5"/>
                        <ChatDisplay6 path = "/chatdisplay6"/>
                        <ChatDisplay7 path = "/chatdisplay7"/>
                        <ChatDisplay8 path = "/chatdisplay8"/>
                        <ChatDisplay9 path = "/chatdisplay9"/>
                        <ChatDisplay10 path = "/chatdisplay10"/>
                        <ChatDisplay11 path = "/chatdisplay11"/>
                    
                    </Switch>
                </Col> 
              
          
          </Row>

      </Container>
     
      </Router>
  
    </div>
    </>
  );
}

export default App;
