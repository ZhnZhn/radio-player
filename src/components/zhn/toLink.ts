
const toLink = (
    href: string | void | null,
    isHttp?: boolean
): string | void => {
  const protocol = (href || '')
    .split('://')[0];
  return protocol === 'https'
     || (isHttp && protocol === 'http')
   ? href as string
   : void 0;
} 

export default toLink