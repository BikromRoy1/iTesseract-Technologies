import React from 'react';

const GoogleMap = ({mapLink}) => {
    return (
      <div>
        <iframe
          src={mapLink}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    );
};

export default GoogleMap;