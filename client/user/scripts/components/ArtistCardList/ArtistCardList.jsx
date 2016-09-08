import React, { PropTypes } from 'react';

const ArtistList = ({artists}) => {

  return (
    <ul>
      { artists.map(artist => <li>
                                <span>{ artist.name }</span>
                              </li>
        ) }
    </ul>
    );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistList;
