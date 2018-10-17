import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarGroup, NavbarHeading, Icon, Popover, Button, Position, Alignment } from '@blueprintjs/core';

import TopbarDropdown from '../../../components/common/TopbarDropdown';

import * as routes from '../../../routes';

const Topbar = () => (
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>Space Admin</NavbarHeading>

      <NavLink className="bp3-button bp3-minimal" key={routes.STATUS} to={routes.STATUS}>
        <Icon icon='dashboard'/>
        <span>Status</span>
      </NavLink>

      <NavLink className="bp3-button bp3-minimal" key={routes.INVESTORS} to={routes.INVESTORS}>
        <Icon icon='dashboard'/>
        <span>Investors</span>
      </NavLink>
    </NavbarGroup>

    <NavbarGroup align={Alignment.RIGHT}>
    <Popover content={<TopbarDropdown/>} position={Position.BOTTOM_RIGHT}>
      <Button minimal icon="more"/>
    </Popover>
    </NavbarGroup>
  </Navbar>
);


export default Topbar;
