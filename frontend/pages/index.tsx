/* import { useState, useEffect } from "react"; */
import { Card, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="app-container">
        <div className="app-dismiss-button">
          <Button variant="danger" size="lg">Dismiss</Button>
        </div>
        <div className="app-match-card">
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src="/img/sova.svg" />
            <Card.Body>
              <Card.Title>userName</Card.Title>
              <Card.Text>mainAgent</Card.Text>
              <Card.Text>description of the match</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="app-accept-button">
            <Button variant="success" size="lg">Accept</Button>
          </div>
      </div>
    </>
  );
}

export default Home;
