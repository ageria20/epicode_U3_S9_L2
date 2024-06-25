import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import sciFi from '../data/scifi.json';
import { Row, Col } from "react-bootstrap";
import WelcomeAlert from "./Welcome";

class AllTheBooks extends Component {

    state = {
        library: null
    }

    render() {
        return (

            <>
            <div className="d-flex justify-content-between container mx-auto mb-5">
            <Button variant="primary" onClick={() => this.setState({library: fantasy })
            }>Fantasy</Button>
            <Button variant="primary" onClick={() => this.setState({library: history })
            }>History</Button>
            <Button variant="primary" onClick={() => this.setState({library: horror })
            }>Horror</Button>
            <Button variant="primary" onClick={() => this.setState({library: romance })
            }>Romanance</Button>
            <Button variant="primary" onClick={() => this.setState({library: sciFi })
            }>SciFi</Button>
            </div>
            {!this.state.library ? <WelcomeAlert/> :(
            <Row className="container mx-auto row-gap-5">
            {this.state.library.map(book => {
            return ( 
            <Col>
            <Card style={{width: "20rem"}} key={book.asin}> 
            <Card.Img variant="top" src={book.img} style={{aspectRatio: "3/4"}}/>
            <Card.Body>
              <Card.Title className="text-truncate">{book.title}</Card.Title>
              <Card.Text>
                    <div>{book.category}</div>
              </Card.Text>
              <Button  variant="primary">
                Buy <Badge bg="secondary">${book.price}</Badge>
                <span className="visually-hidden"></span>
             </Button>
               
            </Card.Body>
          </Card>
          </Col>
           )
        })}
    
        </Row>
        )}
        </>
        )
    }
}

export default AllTheBooks