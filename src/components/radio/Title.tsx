import type { StationType } from "../../sound/types";

interface TitleProps {
  station?: StationType
  msgErr?: string
  title: string
}

const CL_AUDIO_TITLE = 'audio__title'
, CL_AUDIO_TITLE_ERR = `${CL_AUDIO_TITLE} ${CL_AUDIO_TITLE}--err text-ellipsis`;

const _crErrMsg = (
  errMsg: string, 
  title: string
  ) => [errMsg, title.split(":")[1]]
    .filter(Boolean)
    .join(":");
  
const Title = ({ 
  station, 
  msgErr, 
  title 
}: TitleProps) => {
  const _title = station && station.title || ''
  , _isErr = msgErr && _title
  , _msgErrOrTitle = _isErr
    ? _crErrMsg(msgErr, _title)
    : _title || title
  , _cl = _isErr 
    ? CL_AUDIO_TITLE_ERR 
    : CL_AUDIO_TITLE;
  return (
    <div className={_cl}>
      {_msgErrOrTitle}
    </div>
  );
}

export default Title
