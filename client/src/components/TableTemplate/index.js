import React, { Component } from 'react';
import TableHeader from '../TableHeader';
import { Table, Button } from 'reactstrap';

class TableTemplate extends Component {

  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { data, headers, handleClick, handleDelete } = this.props;
    return (
      <Table bordered striped>
        <TableHeader headers={headers} />
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={e => {
              if (e.target.innerHTML !== "delete") {
                handleClick(item._id);
              }
            }}>
              {headers.map((key, idx) => (
                <td key={idx}>
                  { (typeof item[key.toLowerCase()]) === 'object' ? item[key.toLowerCase()].name : item[key.toLowerCase()]}
                </td>
              ))}
              <td>
                <Button color="secondary" size="sm" onClick={() => {handleDelete(item._id);}}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default TableTemplate;