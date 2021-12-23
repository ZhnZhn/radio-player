import { Ref } from 'react';

type HmHotKeysType = Record<
  string, 
  [ref: Ref<HTMLElement>, onKeyDown?: ()=> void] | undefined
>

type CrHotKeysValueType = () => HmHotKeysType

const crHotKeysValue: CrHotKeysValueType = () => ({})

export default crHotKeysValue