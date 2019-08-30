import React from 'react'

import Drawer from '../zhn-ch/Drawer'
import DrawerMenu from './DrawerMenu'

const HeaderDrawer = (props) => (
  <Drawer>
    <DrawerMenu {...props} />
  </Drawer>
);

export default HeaderDrawer
