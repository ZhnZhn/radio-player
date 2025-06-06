import type { 
  CSSProperties, 
  PropsWithChildren
} from "../types";

const S_KEY: CSSProperties = {  
  textDecoration: 'underline'  
};

interface CaptionInputProps {
  className?: string, 
  style?: CSSProperties, 
  caption?: string, 
  hotKey?: string, 
}

const _crCaption = (
  caption: string,
  hotKey?: string  
) => {
  const _index = hotKey
    ? caption.toLowerCase().indexOf(hotKey)
    : -1;
  if (_index !== -1) {
    const _before = caption.substring(0, _index)
        , _key = caption.substring(_index, _index+1)
        , _after = caption.substring(_index+1);
    return (
      <>
       <span>{_before}</span>
       <span style={S_KEY}>{_key}</span>
       <span>{_after}</span>
      </>
    )    
  }
  return caption;      
};

const CaptionInput = ({ 
  className, 
  style, 
  caption='', 
  hotKey, 
  children 
}: PropsWithChildren<CaptionInputProps>) => (
  <span className={className} style={style}>
     {_crCaption(caption, hotKey)}
     {children}
  </span>
);

export default CaptionInput
