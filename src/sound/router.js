import classical from './classical'
import country from './country'
import talks from './talks'
import sport from './sport'
import jazz from './jazz'
import chillout from './chillout'
import lounge from './lounge'
import rock from './rock'
import pop from './pop'
import piano from './piano'
import instrumental from './instrumental'

const _hm = {
  classical,
  country,
  talks,
  sport,
  jazz,
  chillout,
  lounge,
  rock,
  pop,
  piano,
  instrumental
};

const router = {
  getCategory: (category) => _hm[category] || []
}

export default router
