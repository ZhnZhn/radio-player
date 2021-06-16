import { ActionHmType } from '../../flux/types';

export * from '../types';

type AudioPlayerActionType = 'SET_LOADING'
 | 'SET_PLAYING'
 | 'PAUSE'
 | 'UNLOAD'
 | 'STOP'
 | 'SET_VOLUME'
 | 'SET_TITLE'
 | 'SET_ERROR'

export type AudioPlayerHmActionType = ActionHmType<AudioPlayerActionType>

export type AudioPlayerStateType = Readonly<{
  msgErr: string,
  title: string,
  isUnloaded: boolean,
  isPlaying: boolean,
  volume: number
}>

export type AudioPlayerReducerActionType = {
   type: AudioPlayerActionType,
   volume?: number,
   title?: string,
   msgErr?: string 
}
