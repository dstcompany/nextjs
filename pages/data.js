import { Container, Row, Col, Button } from 'react-bootstrap';

function detailUser() {
  return (
    <div>
      <Container>
        <h2>Detail Data User</h2>
        <Row>
          <Col> 
          <h2>Andi Kharisma Rachmadian</h2>
          <br>
          <h2>Judul </h2>
          <br>
          <input type="text" placeholder="Submit judul" />
          <Button>Submit</Button>
          <br>
          <h2>Status: </h2>
          <br>
          <input type="text" placeholder="Submit status" />
          <Button>Submit</Button>
          <br>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default detailUser;
