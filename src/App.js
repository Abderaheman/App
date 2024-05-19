// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mon peremier App</Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>L'èlecteur</Card.Title>
                                <Card.Text>
                                    Chaque èlecteur doit se connecter a partir d'ici:
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Voter Bureau</Card.Title>
                                <Card.Text>
                                Chaque èlecteur peut trouver son bureau de vote ici:
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Selectionner voter Identification ici:</Card.Title>
                                <Card.Text>
                                    Vous pouver Selectionner voter Identification ici:
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
