import { isStr } from '../../utils/isTypeFn';

const toLink = (
  href: unknown
) => isStr(href) && href.split('://')[0] === 'https'
  ? href        
  : void 0;

export default toLink