import toLink from '../zhn/toLink';
import {
  S_LINK
} from './StationDescrStyle';

interface SiteUrlProps {
  isHttp: boolean;
  siteUrl?: string;
}

const SiteUrl = ({ 
  isHttp,
  siteUrl 
}: SiteUrlProps) => {
  const _href = toLink(siteUrl, isHttp);
  if (!_href) return null;
  return (
    <a href={_href}
       style={S_LINK}
       target="_blank"
       rel="noreferrer noopener"
    >
      {_href}
    </a>
  );
}

export default SiteUrl
