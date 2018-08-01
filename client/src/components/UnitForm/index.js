import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { getUnitById, getUnit } from '../../apis';

class UnitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      affiliation: '',
      message: ''
    }
  }

  componentDidMount() {
    try {
      const { setMsg, setUnit } = this.props;
      getUnit()
      .then(({data}) => {
        if (data) {
          this.setAllStates(data);
          setUnit(data._id, data.name);
        }
      })
      .catch(({response}) => {
        setMsg(response.status + " " + response.StatusText);
      });
    } catch (err) {
      this.props.setMsg(err);
    }
  }

  setAllStates = unit => {
    this.setState({
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
      name: e.target.value.trim()
    });
  }

  onAffiliChange = e => {
    this.setState({
      affiliation: e.target.value.trim()
    });
  }

  onSubmit =  e => {
    e.preventDefault();
    const { name, affiliation } = this.state;
    const { id, handleSubmit } = this.props;
    console.log(id);
    if ( name === ' ') {
      this.setMsg('Name is empty');
    } else if (affiliation === '') {
      this.setMsg('Affiliation is empty');
    } else if (id !== '') {
      handleSubmit(id, {name, affiliation});
    } else {
      handleSubmit(null, {name, affiliation});
    }
  }

  render() {
    const { name, affiliation, message } = this.state;
    return (
      <Form className="mt-5" onSubmit={this.onSubmit}>
        <FormGroup row>
          <Label for="name" className="text-right" sm={{size: 1, offset: 4}}>
            Name
          </Label>
          <Col sm={4}>
            <Input type="text" id="name" value={name} onChange={this.onNameChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="affiliation"  className="text-right" sm={{size: 1, offset: 4}}>
            Affiliation
          </Label>
          <Col sm={4}>
            <Input type="text" id="affiliation" value={affiliation} onChange={this.onAffiliChange} />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label color="text-danger">
            {message}
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

export default UnitForm;