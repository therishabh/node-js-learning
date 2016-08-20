
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ArtistListRow = ({artist}) => {
  return (
    <tr>
      <td><a href={artist.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + artist._id}>{artist.title}</Link></td>
      <td>{artist.name}</td>
    </tr>
  );
};

ArtistListRow.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistListRow;
