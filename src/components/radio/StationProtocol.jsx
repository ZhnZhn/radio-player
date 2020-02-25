import React from 'react'

import utils from '../../sound/utils'

const { isHttp } = utils;

const StationProtocol = ({ src }) => {
  const _protocol = isHttp(src)
    ? '(http)'
    : '';
  return (
     <span>&nbsp;{_protocol}</span>
  );
};

export default StationProtocol
