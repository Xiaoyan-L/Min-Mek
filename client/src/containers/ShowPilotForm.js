import { connect } from 'react-redux';
import PilotForm from '../components/PilotForm';
import { setSelected, setReload, addPilot, updatePilot } from '../actions/pilots';
import { getMechs } from '../actions/mechs';


const mapStateToProps = state => ({
  id: state.pilots.selected,
  reload: state.pilots.reload,
  mechs: state.mechs.data
});

const mapDispatchToProps = dispatch => ({
  handleNewClick: () => {dispatch(setSelected(""));},
  handleResetClick: () => {dispatch(setReload());},
  handleSubmit: (id, pilot) => {
    if (id) {
      dispatch(updatePilot(id, pilot));
    } else {
      dispatch(addPilot(pilot));
    }
  },
  getMechs: () => {dispatch(getMechs())}
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotForm);
