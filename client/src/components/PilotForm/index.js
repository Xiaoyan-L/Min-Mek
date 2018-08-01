import React, { Component } from 'react';
import { getPilot } from '../../apis';
import { Form, FormGroup, Label, Button, Input, Col } from 'reactstrap';
import OperatorButtons  from '../OperatorButtons';

class PilotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rank: 'Captain',
      age: '',
      gunnery: '',
      piloting: '',
      mech: '-1',
      message: ''
    };
  }

  componentDidMount() {
    this.props.getMechs();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id || prevProps.reload !== this.props.reload) {
      getPilot(this.props.id)
      .then (({data}) => {
        if (data) {
          this.setAllStates(data);
        }
      })
      .catch (({response}) => {
        this.setMsg(response.status + " " + response.statusText);
      });
      
      this.props.getMechs();      
    } 
    if (!this.props.id && prevProps.id) {
      this.setAllStates({});
    }
  }

  setAllStates = pilot => {
    this.setState({
      name: pilot.name || '',
      rank: pilot.rank || 'Captain',
      age: pilot.age || '',
      gunnery: pilot.gunnery || '',
      piloting: pilot.piloting || '',
      mech: (pilot.mech && pilot.mech._id) || ''
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
  onRankChange = e => {
    this.setState({
      rank: e.target.value
    });
    console.log(e.target.value);
  }

  onAgeChange = e => {
    this.setState({
      age: e.target.value.trim()
    });
  }

  onGunneryChange = e => {
    this.setState({
      gunnery: e.target.value.trim()
    });
  }

  onPilotingChange = e => {
    this.setState({
      piloting: e.target.value.trim()
    });
  }

  onMechChange = e => {
    this.setState({
      mech: e.target.value
    });
    console.log(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, rank, age, gunnery, piloting, mech} = this.state;
    const { id, handleSubmit } = this.props;
    const pilot = {
      name, 
      rank,
      age: age === '' ? 0 : +age,
      gunnery: gunnery === '' ? 0 : +gunnery,
      piloting: gunnery === '' ? 0 : +piloting,
      mech
    };
    if (name === '') {
      this.setMsg('name is empty');
    } else if (mech === '' || mech === '-1') {
      this.setMsg('mech is empty');
    } else if (id) {
      handleSubmit(id, pilot);
    } else {
      handleSubmit(null, pilot);
    }
    this.setAllStates({});
  }

  render() {
    const { name, rank, age, gunnery, piloting, mech, message } = this.state;
    const { mechs, handleNewClick, handleResetClick } = this.props;
    return (
      <div className="mt-2">
        <Form onSubmit={this.onSubmit}>
          <FormGroup row>
            <Label for="name" className="text-right" sm={3}>
              Name
            </Label>
            <Col sm={9}>
              <Input type="text" id="name" value={name} onChange={this.onNameChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="rank" className="text-right" sm={3}>
              Rank
            </Label>
            <Col sm={9}>
              <Input type="select" id="rank" value={rank} onChange={this.onRankChange}>
                <option value="Captain">Captain</option>
                <option value="Colonel">Corporal</option>
                <option value="Lieutenant">Lieutenant</option>
                <option value="Sergeant">Sergeant</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="age" className="text-right" sm={3}>
              Age
            </Label>
            <Col sm={9}>
              <Input type="text" id="age" value={age} onChange={this.onAgeChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="gunnery" className="text-right" sm={3}>
              gunnery
            </Label>
            <Col sm={9}>
              <Input type="text" id="gunnery" value={gunnery} onChange={this.onGunneryChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="piloting" className="text-right" sm={3}>
              Piloting
            </Label>
            <Col sm={9}>
              <Input type="text" id="piloting" value={piloting} onChange={this.onPilotingChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="mech" className="text-right" sm={3}>
              Mech
            </Label>
            <Col sm={9}>
              <Input type="select" id="mech" value={mech} onChange={this.onMechChange}>
                <option value="-1"> select a mech model </option>
                {mechs.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.model}
                  </option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="text-center text-danger" sm={{size: 10, offset: 2}}>
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

export default PilotForm;
