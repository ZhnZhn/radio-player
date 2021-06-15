
export type StationType = {
  title: string,
  src: string,
  siteUrl?: string
  br?: number
} 

export type CategoriesType = 'alternative'
 | 'chillout'
 | 'classical'
 | 'country'
 | 'instrumental'
 | 'jazz'
 | 'lounge'
 | 'piano'
 | 'pop'
 | 'rock'
 | 'sport'
 | 'talks'

export type CategoriesRouterType = Record<CategoriesType, StationType[]>

