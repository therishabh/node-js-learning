import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as artistsActions from './../../scripts/actions/artistsActions';
import artistsList from './artistsList';
import {browserHistory} from 'react-router';

class BrowsePage extends React.Component {

    render() {

    const {artists} = this.props;

    return (
      <div>
        <artistsList artists={artists}/>
      </div>
    );
  }
}

BrowsePage.propTypes = {
  artists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(artistsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
