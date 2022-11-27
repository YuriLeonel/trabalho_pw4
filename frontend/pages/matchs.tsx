import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Matchs() {
    return (
      <div>
      <main>
        <Card className="text-center">
          <Card.Header>Matchs</Card.Header>
          <Card.Body>
            <Card.Title>Match List</Card.Title>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Main</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MSP Mamaco Louco</td>
          <td>Chamber</td>
          <td>Sentinel</td>
          <td><Button variant="danger">Exclude Match</Button>{' '}<Button variant="primary">Chat</Button>{' '}</td>
        </tr>
        <tr>
        <td>2</td>
          <td>LDJ Superman</td>
          <td>Astra</td>
          <td>Control</td>
          <td><Button variant="danger">Exclude Match</Button>{' '}<Button variant="primary">Chat</Button>{' '}</td>
        </tr>
        <tr>
        <td>1</td>
          <td>LDJ Arrow</td>
          <td>Fade</td>
          <td>Iniciator</td>
          <td><Button variant="danger">Exclude Match</Button>{' '}<Button variant="primary">Chat</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>



          </Card.Body>
        </Card>
      </main>
    </div>
    )
  }
  