import { connect } from 'react-redux';
import OrganizationTab from '../components/OrganizationTab';

const mapStateToProps = ({unit, mechs, pilots}) => ({
  units: [
    {
      _id: unit.id,
      name: unit.name
    }
  ],
  mechs: mechs.data,
  pilots: pilots.data
});

export default connect(mapStateToProps)(OrganizationTab);