type HttpsUrlType = `https://${string}`

export type StationType = {  
  title: string
  src: HttpsUrlType
  siteUrl?: HttpsUrlType
  br?: number
  category?: CategoriesType
} 

export type StationFilterType = (item: StationType) => boolean

export type CategoriesType = 'alternative'
 | 'chillout'
 | 'classical'
 | 'country'
 | 'instrumental'
 | 'piano'
 | 'pop'
 | 'sport'
 | 'talks'

export type CategoriesRouterType = Record<CategoriesType, StationType[]>



