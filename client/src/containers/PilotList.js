import { connect } from 'react-redux';
import { getPilots, deletePilot, setSelected } from '../actions/pilots';
import PilotsTable from '../components/PilotsTable';

const headers = ["Name", "Rank", "Age", "Skills", "Mech"];

const mapStateToProps = state => ({
  data: state.pilots.data,
  headers: headers
});

const mapDispatchToProps = dispatch => ({
  handleClick: (id) => { dispatch(setSelected(id)); },
  getData: () => { dispatch(getPilots()); },
  handleDelete: (id) => { dispatch(deletePilot(id)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotsTable);