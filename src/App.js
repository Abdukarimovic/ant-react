import React from 'react';
import Navbar from './components/Navbar/navbar';
import Content from './components/Content/content';
import Chat from './components/Chat/chat';

const App = () => {
  return (
    <div className='d-flex'>
      <Navbar/>
      <Content/>
      <Chat/>
    </div>
  );
}

export default App;
