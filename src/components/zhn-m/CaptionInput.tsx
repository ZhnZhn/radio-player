import type { CSSProperties, WithChildren } from "../types";

const S_KEY: CSSProperties = {  
  textDecoration: 'underline'  
};

interface CaptionInputProps {
  className?: string, 
  rootStyle?: CSSProperties, 
  caption?: string, 
  accessKey?: string, 
}

type CaptionInputType = WithChildren<CaptionInputProps>

const CaptionInput = ({ 
  className, 
  rootStyle, 
  caption='', 
  accessKey, 
  children 
}: CaptionInputType) => {  
  const _index = accessKey 
    ? caption.toLowerCase().indexOf(accessKey)
    : -1;
  if (_index !== -1) {
    const _before = caption.substring(0, _index)
        , _key = caption.substring(_index, _index+1)
        , _after = caption.substring(_index+1);
    return (
      <span className={className} style={rootStyle}>
         <span>{_before}</span>
         <span style={S_KEY}>{_key}</span>
         <span>{_after}</span>
         {children}
      </span>
    );
  } else {
    return (
      <span className={className} style={rootStyle}>
        {caption}
        {children}
      </span>
    );
  }
};

export default CaptionInput
