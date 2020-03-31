import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Article = (props) => {
  const initialUserState = {
    post: {},
    loading: true,
  };

  // Getter and setter for user state
  const [post, setPost] = useState(initialUserState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      );
      setPost(await response.json());
    };
    fetchPosts();
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.match.params.id]);

  return (
    <main>
      {post.loading ? (
        <h2 style={{ marginLeft: 20 }}>Loading post...</h2>
      ) : (
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Divider />
          <div>
            {post.id} {post.title} {post.body}
          </div>
        </Grid>
      )}
    </main>
  );
};
