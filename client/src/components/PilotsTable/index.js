import React, { Component } from "react";
import TableHeader from "../TableHeader";
import { Table, Button } from "reactstrap";

class PilotsTable extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data, headers, handleClick, handleDelete } = this.props;
    return (
      <Table bordered striped>
        <TableHeader headers={headers} />
        <tbody>
          {data.map((pilot, index) => (
            <tr
              key={index}
              onClick={e => {
                if (e.target.innerHTML !== "delete") {
                  handleClick(pilot._id);
                }
              }}
            >
              <td>{pilot.name}</td>
              <td>{pilot.rank}</td>
              <td>{pilot.age}</td>
              <td>{pilot.gunnery + "/" + pilot.piloting}</td>
              <td>{pilot.mech && pilot.mech.model}</td>
              <td>
                <Button
                  color="secondary"
                  size="sm"
                  onClick={() => {
                    handleDelete(pilot._id);
                  }}
                >
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default PilotsTable;
