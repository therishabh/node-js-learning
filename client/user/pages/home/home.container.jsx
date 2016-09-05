import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as artistsActions from './../../scripts/actions/ArtistsActions';
import ArtistList from './../../scripts/components/ArtistCardList/ArtistCardList';
import {browserHistory} from 'react-router';
import TopBanner from './TopBanner/TopBanner';
import Categories from './Categories/Categories';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {

    this.props.actions.loadFeaturedArtists();
  }

    render() {

    const {featuredArtists} = this.props;

    return (
      <section id="home">
        <TopBanner />
        {/*<ArtistList artists={ featuredArtists } />*/}
        <Categories />
      </section>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    featuredArtists: state.featuredArtists
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(artistsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
