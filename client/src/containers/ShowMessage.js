import { connect } from 'react-redux';
import { setMsg } from '../actions/message';
import Message from '../components/Message';

const mapStateToProps = state => ({
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  setMsgToEmpty: () => { 
    setTimeout(() => {
      dispatch(setMsg()); 
    }, 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);