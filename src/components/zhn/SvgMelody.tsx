import Svg from './Svg';

const SvgMelody = () => (
    <Svg 
      w="24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
    >
       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
       <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
       <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
       <path d="M9 17v-13h10v13" />
       <path d="M9 8h10" />
    </Svg>
);

export default SvgMelody