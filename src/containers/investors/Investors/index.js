import React from 'react';
import { Button, InputGroup } from '@blueprintjs/core';

import PageTitle from '../../../components/common/PageTitle';
import InvestorsTable from '../InvestorsTable';

const Investors = () => (
  <div>
    <PageTitle
      title="Investors"
      rightSide={[
        <InputGroup key="1" leftIcon="filter" placeholder="Search..."/>,
        <Button key="2" text="Search"/>,
        <Button key="3" text="Export CSV"/>
      ]}/>
    <InvestorsTable/>
  </div>
);

export default Investors;
