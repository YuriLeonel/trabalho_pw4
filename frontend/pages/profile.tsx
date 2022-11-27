/* import { User } from "../types/user.types"; */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {

  return (
    <div>
      <main>
        <Card className="text-center">
          <Card.Header>Profile</Card.Header>
          <Card.Body>
            <Card.Title>User Name</Card.Title>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>NickName</Form.Label>
                <Form.Control type="email" placeholder="Enter nickname" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" placeholder="#00000" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" placeholder="Ex: EN, BR" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>



          </Card.Body>
        </Card>
      </main>
    </div>
  )
}

export default Profile

