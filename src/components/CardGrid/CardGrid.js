import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import { ArticleCard } from '../Card/Card';

export const CardGrid = () => {
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
    <main>
      {posts.loading ? (
        <h2 style={{ marginLeft: 20 }}>Loading posts...</h2>
      ) : (
        <Grid container spacing={9} style={{ marginTop: 10 }}>
          {posts &&
            posts.map((post) => (
              <ArticleCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
        </Grid>
      )}
    </main>
  );
};
