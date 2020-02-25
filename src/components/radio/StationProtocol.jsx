import React from 'react'

const _isHttp = (src='') => src.split('://')[0] === 'http';

const StationProtocol = ({ src }) => {
  const _protocol = _isHttp(src)
    ? '(http)'
    : '';
  return (
     <span>&nbsp;{_protocol}</span>
  );
};

export default StationProtocol
