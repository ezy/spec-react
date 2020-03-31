import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Comments = (props) => {
  const { comments } = props;

  return (
    <div style={{ marginTop: 20 }}>
      <Typography variant="h5">Comments</Typography>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>
              [{comment.id}] {comment.name}:
            </strong>{' '}
            {comment.body}
          </p>
        </div>
      ))}
    </div>
  );
};
