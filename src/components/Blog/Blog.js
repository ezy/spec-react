import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';

import { CardGrid } from '../CardGrid/CardGrid';
import { Header } from './Header';
import { Article } from '../Article/Article';

export const Blog = (props) => {
  const { title } = props;
  const sections = [{ title: 'Home' }];

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header title={title} sections={sections} />
      <Switch>
        <Route exact path="/" component={CardGrid} />
        <Route path="/post/:id" component={Article} />
      </Switch>
    </Container>
  );
};
