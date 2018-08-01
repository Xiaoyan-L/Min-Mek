import { connect } from 'react-redux';
import MechForm from '../components/MechForm';
import { setSelected, setReload, addMech, updateMech } from '../actions/mechs';

const mapStateToProps = state => ({
  id: state.mechs.selected,
  reload: state.mechs.reload,
  unit: state.unit.id
});

const mapDispatchToProps = dispatch => ({
  handleNewClick: () => {dispatch(setSelected(""));},
  handleResetClick: () => {dispatch(setReload());},
  handleSubmit: (id, mech) => {
    if (id) {
      dispatch(updateMech(id, mech));
    } else {
      dispatch(addMech(mech));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MechForm);
