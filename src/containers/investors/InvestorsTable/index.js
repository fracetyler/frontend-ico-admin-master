import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import s from './styles.scss';

const DATA = [
  {
    name: 'John Lennon',
    email: 'john.lennon@beatles.com',
    country: 'UK',
    dor: '12 Jan 1945',
    kyc: 'verified',
    lastLogin: '12 Jan 1945',
    invested: '1.594'
  },
  {
    name: 'Paul McCartney',
    email: 'the-greatest-paul@beatles.com',
    country: 'Cambodia',
    dor: '12 Jan 1945',
    kyc: 'not verified',
    lastLogin: '12 Jan 1945',
    invested: '0.594'
  },
  {
    name: 'John Harrison',
    email: 'thetypicaljohn@beatles.com',
    country: 'Scotland',
    dor: '12 Jan 1945',
    kyc: 'verified',
    lastLogin: '12 Jan 1945',
    invested: '10.304'
  },
  {
    name: 'Ringo Starr',
    email: 'be.a.starr@beatles.com',
    country: 'Thailand',
    dor: '12 Jan 1945',
    kyc: 'verified',
    lastLogin: '12 Jan 1945',
    invested: '12.394'
  }
];

const KEYS = [
  {
    key: 'name',
    title: 'Name'
  },
  {
    key: 'email',
    title: 'Email'
  },
  {
    key: 'country',
    title: 'Country'
  },
  {
    key: 'dor',
    title: 'DOR'
  },
  {
    key: 'kyc',
    title: 'KYC'
  },
  {
    key: 'lastLogin',
    title: 'Last Login'
  },
  {
    key: 'invested',
    title: 'Invested'
  }
];

class InvestorsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: 'name',
      desc: false
    };

    this._changeSort = this._changeSort.bind(this);
  }

  _changeSort(e) {
    // if sort have same key, just toggle asc/desc ordering
    if (this.state.key === e.target.dataset.key) {
      this.setState((prevState) => ({ desc: !prevState.desc }));
    }

    // else set up key and bring oridering to asc
    if (this.state.key !== e.target.dataset.key) {
      this.setState({ key: e.target.dataset.key, desc: false });
    }
  }

  render() {
    const {
      key,
      desc
    } = this.state;

    const renderTh = (th) => (
      <th key={th.key} data-key={th.key} onClick={this._changeSort} className={s.th}>
        {th.title}
        {key === th.key && !desc && <Icon className={s.icon} icon={IconNames.CHEVRON_UP}/>}
        {key === th.key && desc && <Icon className={s.icon} icon={IconNames.CHEVRON_DOWN}/>}
      </th>
    );

    return (
      <div className={s.investorsTableWrapper}>
        <table className="bp3-html-table bp3-interactive">
          <thead>
            <tr>
              {KEYS.map(renderTh)}
            </tr>
          </thead>
          <tbody>
            {DATA.map((el) => (
              <tr key={el.email}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.country}</td>
                <td>{el.dor}</td>
                <td>{el.kyc}</td>
                <td>{el.lastLogin}</td>
                <td>{el.invested}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InvestorsTable;
