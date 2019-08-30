import React from 'react'

const S = {
  TITLE: {
    color: '#64e346',
    marginLeft: 8,
    fontWeight: 600
  },
  MSG_ERR: {
    color: '#673ab7'
  }
};

const Title = ({ station, msgErr, title }) => {
  const _title = station && station.title || ''
  , _msgErrOrTitle = msgErr
       ? `${msgErr} ${_title}`
       : _title || title
  , _style = !msgErr
      ? S.TITLE
      : { ...S.TITLE, ...S.MSG_ERR };
  return (
    <div style={_style}>
      {_msgErrOrTitle}
    </div>
  )
}

export default Title
