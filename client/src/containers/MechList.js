import { connect } from 'react-redux';
import { getMechs, setSelected, deleteMech } from '../actions/mechs';
import TableTemplate from '../components/TableTemplate';

const headers = ['Name', 'Model', 'Weight', 'Class'];

const mapStateToProps = state => ({
  headers,
  data: state.mechs.data
});

const mapDispatchProps = dispatch => ({
  getData: () => { dispatch(getMechs()); },
  handleClick: id => { dispatch(setSelected(id)); },
  handleDelete: id => { dispatch(deleteMech(id)); }
});

export default connect(mapStateToProps, mapDispatchProps)(TableTemplate);