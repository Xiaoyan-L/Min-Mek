import React from 'react';
import { Button } from 'reactstrap';

const OperatorButtons = ({ handleNewClick, handleResetClick}) => (
  <div className="mt-5">
    <Button color="success" onClick={handleNewClick} className="mr-4">
      New
    </Button>
    <Button color="secondary" onClick={handleResetClick}>
      Reset
    </Button>
  </div>
);

export default OperatorButtons;