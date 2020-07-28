import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './Message.css';

const Message = forwardRef(
  ({ message: { text, username }, currentUser }, ref) => {
    const isUser = username === currentUser;
    const noUser = currentUser === null;

    return (
      <Card
        ref={ref}
        className={'message__card ' + (isUser && !noUser && 'message__user')}>
        <CardContent>
          <Typography
            className=''
            color='white'
            variant='h5'
            component='h2'
            gutterBottom>
            {!isUser && `${username || 'unKnown User'} : `} {text}
          </Typography>
        </CardContent>
      </Card>
    );
  }
);

export default Message;
