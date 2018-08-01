import { connect } from 'react-redux';
import UnitForm from '../components/UnitForm';
import { addUnit, setSuccess, updateUnit } from '../actions/unit';
import { setMsg } from '../actions/message';

const mapStateToProps = state => ({
  id: state.unit.id
});

const mapDispatchToProps = dispatch => ({
  setUnit: (id, name) => { dispatch(setSuccess(id, name)); },
  setMsg: msg => {dispatch(setMsg(msg))},
  handleSubmit: (id, unit) => {
    if (id) {
      dispatch(updateUnit(id, unit));
    } else {
      dispatch(addUnit(unit));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitForm);