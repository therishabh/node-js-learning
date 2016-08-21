import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as artistsActions from './../../scripts/actions/ArtistsActions';
import ArtistList from './ArtistList';
import {browserHistory} from 'react-router';

class BrowsePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount() {

    this.props.actions.loadArtists();
  }

  loadMore() {

    this.props.actions.loadMoreArtists();

  }

    render() {

    const {artists} = this.props;

    return (
      <div>
        <ArtistList artists={artists} />
        <input type="button"
               value="Load More"
               className="btn btn-primary"
               onClick={this.loadMore}/>
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
