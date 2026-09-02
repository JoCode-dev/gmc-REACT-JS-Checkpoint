import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">React Checkpoint</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#concepts">Concepts</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-5">
          <h1 className="display-5 fw-bold text-center mb-3">
            Premier contact avec React
          </h1>
          <p className="lead text-center text-muted mb-5">
            Une page construite avec des composants React-Bootstrap : navbar,
            titre et cartes.
          </p>

          <Row xs={1} md={3} className="g-4" id="concepts">
            <Col>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                  alt="Illustration de composants React"
                />
                <Card.Body>
                  <Card.Title>Composants</Card.Title>
                  <Card.Text>
                    Les composants permettent de découper l’interface en
                    blocs réutilisables. Ici, App assemble navbar, titre et
                    cartes.
                  </Card.Text>
                  <Button variant="primary">En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Illustration JSX"
                />
                <Card.Body>
                  <Card.Title>JSX</Card.Title>
                  <Card.Text>
                    JSX décrit l’UI avec une syntaxe proche du HTML. Un
                    fragment React regroupe plusieurs éléments sans ajouter
                    de nœud DOM supplémentaire.
                  </Card.Text>
                  <Button variant="primary">En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Illustration React-Bootstrap"
                />
                <Card.Body>
                  <Card.Title>React-Bootstrap</Card.Title>
                  <Card.Text>
                    React-Bootstrap fournit des composants Bootstrap prêts à
                    l’emploi : Navbar, Card, Container, Row et Col.
                  </Card.Text>
                  <Button variant="primary">En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
