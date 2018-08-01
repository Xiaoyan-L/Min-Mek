import React from 'react';
import MechList from '../../containers/MechList';
import ShowMechForm from '../../containers/ShowMechForm';
import { Container, Row, Col } from 'reactstrap';

const MechTab = () => (
  <Container>
    <Row>
      <Col xs="8">
        <MechList />
      </Col>
      <Col xs="4">
        <ShowMechForm />
      </Col>
    </Row>
  </Container>
)

export default MechTab;