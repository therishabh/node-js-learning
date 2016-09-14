import React, { PropTypes } from 'react';

const ArtistList = ({artists}) => {

  return (
    <ul>
      { artists.map(artist => <li>
                                <div class="artist-card">
                                  <div className="image-container">
                                    <img src={ artist.image } />
                                  </div>
                                  <div className="details-container">
                                    <p>
                                      { artist.name }
                                    </p>
                                    <p>
                                      { artist.genre }
                                    </p>
                                    <p>
                                      { artist.location }
                                    </p>
                                  </div>
                                  <div>View Details</div>
                                </div>
                              </li>
        ) }
    </ul>
    );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistList;
