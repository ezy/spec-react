import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Comments } from '../Comment/Comment';

export const Article = (props) => {
  const initialState = {
    loading: true,
    post: {},
    comments: [],
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      );
      const commentsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1/comments`
      );
      setData({
        post: await postRes.json(),
        comments: await commentsRes.json(),
      });
    };
    fetchData();
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.match.params.id]);

  const { post, comments } = data;

  return (
    <main>
      {post.loading ? (
        <h2 style={{ marginLeft: 20 }}>Loading post...</h2>
      ) : (
        <Grid item lg={12} style={{ marginTop: 20 }}>
          <Typography variant="h5" gutterBottom>
            {post.title}
          </Typography>
          <Divider />
          <Typography variant="body1" paragraph style={{ marginTop: 20 }}>
            {post.body}
          </Typography>
          <Divider />
          {comments && <Comments comments={comments} />}
        </Grid>
      )}
    </main>
  );
};
