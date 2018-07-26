import { connect } from 'react-redux';
import UnitForm from '../components/UnitForm';
import { addUnit, setSuccess, updateUnit } from '../actions/unit';


const mapDispatchToProps = dispatch => ({
  setUnit: (id) => { dispatch(setSuccess(id)); },
  handleSubmit: (unit) => {
    if (unit._id) {
      console.log("update")
      dispatch(updateUnit(unit));
    } else {
      console.log("add")
      dispatch(addUnit(unit));
    }
  }
});

export default connect(null, mapDispatchToProps)(UnitForm);