import React, {PropTypes} from 'react';

const ArtistList = ({artists}) => {

  return (
    <table className="table">
      <tbody>
      {artists.map(artist =>
        <tr>
          <td>
            <span>{artist.name}</span>
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistList;
