import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLoading: state.profile.isLoading,
  user: state.profile.data,
});

const UserProfileContainer = props => props.render(props);

export default connect(
  mapStateToProps,
  null
)(UserProfileContainer);
