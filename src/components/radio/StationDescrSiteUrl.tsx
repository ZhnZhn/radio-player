import S from './StationDescrStyle';

interface SiteUrlProps {
    siteUrl?: string;
  }

const SiteUrl = ({ siteUrl }: SiteUrlProps) => {
  if (!siteUrl) return null;
  return (
    <a href={siteUrl}
       style={S.LINK}
       target="_blank"
       rel="noreferrer noopener"
    >
      {siteUrl}
    </a>
  );
}

export default SiteUrl
