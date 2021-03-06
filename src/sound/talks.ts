import { StationType } from "./types";

const talks: StationType[] = [
  {
    title: 'BBC Radio Wales 103.9',
    src: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p',
    siteUrl: 'http://www.bbc.co.uk/radiowales/',
    br: 128
  },{
    title: 'USA: California: KCRW 89.9 FM',
    src: 'https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue',
    siteUrl: 'https://www.kcrw.com',
    br: 192
  },{
    title: 'USA: KUT 90.5 FM',
    src: 'https://kut.streamguys1.com/kut-web',
    siteUrl: 'https://www.kut.org',
    br: 128
  },{
    title: 'USA: NPR Radio',
    src: 'https://npr-ice.streamguys1.com/live.mp3',
    siteUrl: 'https://www.npr.org',
    br: 128
  },{
    title: 'USA: Portland: XRAY.FM',
    src: 'http://listen.xray.fm:8000/stream',
    siteUrl: 'https://xray.fm',
    br: 128
  },{
    title: 'USA: WABE 90.1 FM',
    src: 'https://pba-ice.wabe.org/wabe.aac',
    siteUrl: 'https://www.wabe.org',
    br: 96
  }
];

export default talks
