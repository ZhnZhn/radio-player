
const toLink = (
    href: string | undefined | null
): string | void => {
  const protocol = (href || '').split('://')[0];
  return protocol === 'https'
   ? href as string
   : void 0;
} 

export default toLink