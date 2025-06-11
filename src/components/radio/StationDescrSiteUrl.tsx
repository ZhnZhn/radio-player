import toLink from '../zhn/toLink';
import { S_LINK } from './StationDescrStyle';

interface SiteUrlProps {
  siteUrl?: string;
}

const SiteUrl = ({ 
  siteUrl 
}: SiteUrlProps) => {
  const _href = toLink(siteUrl);  
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
