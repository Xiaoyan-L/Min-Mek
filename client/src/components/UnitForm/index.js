import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { getUnit } from '../../apis';

class UnionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      name: '',
      affliation: '',
      message: ''
    }
  }

  componentDidMount() {
    getUnit()
    .then(res => {
      const { data } = res;
      if (data) {
        this.setAllStates(data);
        this.props.setUnit(data._id);
      }
    });
    
  }

  setAllStates = unit => {
    this.setState({
      _id: unit._id,
      name: unit.name,
      affiliation: unit.affiliation
    });
  }

  setMsg = msg => {
    this.setState({
      message: msg
    });
  }

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  onAffiliChange = e => {
    this.setState({
      affiliation: e.target.value
    });
  }

  onSubmit =  e => {
    e.preventDefault();
    const { _id, name, affiliation } = this.state;
    const { handleSubmit } = this.props;
    if ( name.trim() === ' ') {
      this.setMsg('Name is empty');
    } else if (affiliation.trim() === '') {
      this.setMsg('Affiliation is empty');
    } else if (_id !== '') {
      handleSubmit({
        _id,
        name, 
        affiliation
      });
    } else {
      handleSubmit({name, affiliation});
    }
  }

  render() {
    const { _id, name, affiliation } = this.state;
    return (
      <Form className="mt-5" onSubmit={this.onSubmit}>
        <FormGroup row>
          <Label for="name" className="text-right" sm={{size: 1, offset: 4}}>
            Name
          </Label>
          <Col sm={2}>
            <Input type="text" id="name" value={name} onChange={this.onNameChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="affiliation"  className="text-right" sm={{size: 1, offset: 4}}>
            Affiliation
          </Label>
          <Col sm={2}>
            <Input type="text" id="affiliation" value={affiliation} onChange={this.onAffiliChange} />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label color="text-danger">
            {this.props.error}
          </Label> 
        </FormGroup>
        <FormGroup row>
          <Col sm={{size: 1, offset: 5}}>
          <Button type="submit" color="primary">
            Submit
          </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }

}

export default UnionForm;