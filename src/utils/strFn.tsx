export const toFirstUpperCase = (str?: string) => str 
  ? str[0].toUpperCase() + str.slice(1)
  : '';