import { connect } from 'react-redux';

import ProfileView from '../../components/views/ProfileView';

const mapStateToProps = state => ({
  isLoading: state.profile.isLoading,
  user: state.profile.data,
});

export default connect(
  mapStateToProps,
  null
)(ProfileView);
