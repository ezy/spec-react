import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { ArticleCard } from '../Card/Card';
import { Header } from './Header';

export const Blog = (props) => {
  const { title } = props;
  const sections = [{ title: 'Home' }];

  const initialUserState = {
    posts: [],
    loading: true,
  };

  const [posts, setPosts] = useState(initialUserState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(await response.json());
    };
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header title={title} sections={sections} />
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={UserPage} />
      </Switch> */}
      <main>
        {posts.loading ? (
          <h2 style={{ marginLeft: 20 }}>Loading posts...</h2>
        ) : (
          <Grid container spacing={9} style={{ marginTop: 10 }}>
            {posts &&
              posts.map((post) => (
                <ArticleCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
          </Grid>
        )}
      </main>
    </Container>
  );
};
