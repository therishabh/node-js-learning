import React, {PropTypes} from 'react';
import ArtistListRow from './artistListRow';

const ArtistsList = ({artists}) => {

  debugger;

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {artists.map(artist =>
        <ArtistListRow key={artist._id} artist={artist}/>
      )}
      </tbody>
    </table>
  );
};

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistsList;
