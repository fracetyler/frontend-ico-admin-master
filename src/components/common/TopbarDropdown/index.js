import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem, MenuDivider, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import * as routes from '../../../routes';

const TopbarDropdown = () => (
  <Menu>
    <NavLink
      to={routes.STATUS}
      className="bp3-menu-item"
      tabIndex="0">
      <Icon icon={IconNames.COG}/>
      <span>Settings</span>
    </NavLink>

    <MenuDivider/>

    <MenuItem
      icon="log-out"
      text="Logout"
      onClick={() => null}/>
  </Menu>
);


export default TopbarDropdown;
