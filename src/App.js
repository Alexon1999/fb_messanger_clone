import React, { useState, useEffect } from 'react';
import './App.css';
import FlipMove from 'react-flip-move';
//+ npm i react-flip-move (animation when a message come in)

import {
  Button,
  Input,
  FormControl,
  InputLabel,
  IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import Message from './Message';

import firebase from 'firebase';
import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // { username: 'alexon', text: 'Hello' },
    // { username: 'Jack', text: 'hi' },
  ]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapShot) => {
        setMessages(
          snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    // it gonna be null , if we not put some thing
    setUserName(prompt('Enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      text: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([{ text: input, username: userName }, ...messages]);
    setInput('');
  };
  return (
    <div className='App'>
      <img
        class='hu5pjgll bixrwtb6'
        src='https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png'
        style={{ height: '50px', width: '50px' }}
        alt=''
      />
      <h1>Welcom to Messanger</h1>
      <h2>Hello {userName}</h2>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__input'
            placeholder='Enter message'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            type='submit'
            onClick={sendMessage}
            variant='contained'
            color='primary'
            disabled={!input}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} currentUser={userName} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
