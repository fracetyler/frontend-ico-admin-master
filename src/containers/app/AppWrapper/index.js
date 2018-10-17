import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Topbar from '../Topbar';
import Investors from '../../investors/Investors';
import Status from '../../status/Status';

import * as routes from '../../../routes';
import s from './styles.scss';

class AppWrapper extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.topbar}>
          <Topbar/>
        </div>
        <Switch>
          <Route exact path={routes.INVESTORS} component={Investors}/>
          <Route exact path={routes.STATUS} component={Status}/>
          <Redirect exact from="/" to={routes.STATUS} />
        </Switch>
      </div>
    );
  }
}

export default connect()(AppWrapper);
