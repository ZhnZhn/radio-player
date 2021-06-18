import type { StationType } from "../../sound/types";

interface TitleProps {
  station?: StationType
  msgErr?: string
  title: string
}

const CL = {
  TITLE: 'audio__title',
  ERR: 'audio__title audio__title--err'
};

const Title = ({ 
  station, 
  msgErr, 
  title 
}: TitleProps) => {
  const _title = station && station.title || ''
  , _isErr = msgErr && _title
  , _msgErrOrTitle = _isErr
       ? `${msgErr} ${_title}`
       : _title || title
  , _cl = _isErr ? CL.ERR : CL.TITLE;
  return (
    <div className={_cl}>
      {_msgErrOrTitle}
    </div>
  );
}

export default Title
