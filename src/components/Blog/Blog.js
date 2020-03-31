import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';

import { CardGrid } from '../CardGrid/CardGrid';
import { Header } from './Header';

export const Blog = (props) => {
  const { title } = props;
  const sections = [{ title: 'Home' }];

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header title={title} sections={sections} />
      <Switch>
        <Route exact path="/" component={CardGrid} />
        {/* <Route path="/:id" component={UserPage} /> */}
      </Switch>
    </Container>
  );
};
