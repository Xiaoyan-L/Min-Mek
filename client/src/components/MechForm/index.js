import React, { Component } from 'react';
import { getMech } from '../../apis';
import { Form, FormGroup, Label, Button, Input, Col } from 'reactstrap';
import OperatorButtons  from '../OperatorButtons';

class MechForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      model: '',
      weight: '',
      class: '',
      message: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id || prevProps.reload !== this.props.reload) {
      getMech(this.props.id)
      .then (({data}) => {
        if (data) {
          this.setState({
            name: data.name,
            model: data.model,
            weight: data.weight,
            class: data.class
          });
        }
      })
      .catch (({response}) => {
        this.setMsg(response.status + " " + response.statusText);
      });
    } 
    if (!this.props.id && prevProps.id) {
      this.setAllStates({});
    }
  }

  setAllStates = mech => {
    this.setState({
      name: mech.name || '',
      model: mech.model || '',
      weight: mech.weight || '',
      class: mech.class || ''
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
  onModelChange = e => {
    this.setState({
      model: e.target.value.trim()
    });
  }

  onWeightChange = e => {
    this.setState({
      weight: e.target.value.trim()
    });
  }

  onClassChange = e => {
    this.setState({
      class: e.target.value.trim()
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const { id, handleSubmit, unit } = this.props;
    if (unit === '') {
      this.setMsg("You haven no Unit yet!");
      return;
    }
    
    const { name, model, weight } = this.state;
    const mech = {
      name: name, 
      model: model,
      weight: weight,
      class: this.state.class,
      unit: unit
    };
    if (name === '') {
      this.setMsg('name is empty');
    } else if (model === '') {
      this.setMsg('model is empty');
    } else if (id) {
      handleSubmit(id, mech);
    } else {
      handleSubmit(null, mech);
    }
    this.setAllStates({});
  }

  render() {
    const { name, model, weight, message } = this.state;
    const { handleNewClick, handleResetClick } = this.props;
    return (
      <div className="mt-2">
        <Form onSubmit={this.onSubmit}>
          <FormGroup row>
            <Label for="name" className="text-right" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input type="text" id="name" value={name} onChange={this.onNameChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="model" className="text-right" sm={2}>
              Model
            </Label>
            <Col sm={10}>
              <Input type="text" id="model" value={model} onChange={this.onModelChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="weight" className="text-right" sm={2}>
              Weight
            </Label>
            <Col sm={10}>
              <Input type="text" id="weight" value={weight} onChange={this.onWeightChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="class" className="text-right" sm={2}>
              Class
            </Label>
            <Col sm={10}>
              <Input type="text" id="class" value={this.state.class} onChange={this.onClassChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="text-center" sm={{size: 10, offset: 2}}>
              {message}
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col className="text-center" sm={{size: 3, offset: 3}}>
              <Button color="primary" onClick={this.onSumit}>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <div>
          <OperatorButtons handleNewClick={handleNewClick} handleResetClick={handleResetClick} />
        </div>
      </div>
    )
  }
}

export default MechForm;
