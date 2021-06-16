
export type StationType = {  
  title: string,
  src: string,
  siteUrl?: string
  br?: number
  category?: CategoriesType
} 

export type StationFilterType = (item: StationType) => boolean

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

export type ProtocolType = 'http' | 'https'

