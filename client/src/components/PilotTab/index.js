import React from 'react';
import PilotList from '../../containers/PilotList';
import ShowPilotForm from '../../containers/ShowPilotForm';
import { Container, Row, Col } from 'reactstrap';

const PilotTab = () => (
  <Container>
    <Row>
      <Col xs="8">
        <PilotList />
      </Col>
      <Col xs="4">
        <ShowPilotForm />
      </Col>
    </Row>
  </Container>
)

export default PilotTab;