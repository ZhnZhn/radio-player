import toLink from '../zhn/toLink';
import { S_LINK } from './StationDescrStyle';

interface SiteUrlProps {
  isHttp: boolean;
  siteUrl?: string;
}

const SiteUrl = ({ 
  isHttp,
  siteUrl 
}: SiteUrlProps) => {
  const _href = toLink(siteUrl, isHttp);  
  return _href ? (
    <a href={_href}
       style={S_LINK}
       target="_blank"
       rel="noreferrer noopener"
    >
      {_href}
    </a>
  ) : null;
}

export default SiteUrl
