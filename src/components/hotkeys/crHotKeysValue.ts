import type { RefObject } from '../types';

type HmHotKeysType = Record<
  string, 
  [ref: RefObject<HTMLButtonElement>, onKeyDown?: ()=> void] | undefined
>

type CrHotKeysValueType = () => HmHotKeysType

const crHotKeysValue: CrHotKeysValueType = () => ({})

export default crHotKeysValue