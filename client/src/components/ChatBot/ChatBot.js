import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';




  function Bot () {

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#487AFA',
        headerFontColor: '#fff',
        headerFontSize: '35px',
        botBubbleColor: '#487AFA',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
      
      const steps = [
        {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
        {
            id: '4',
            message: 'How can I assist you today?',
            trigger: '5',
          },
          {
            id: '5',
            user: true,
            trigger: '6',
          },
          {
            id: '6',
            message: 'Okay lets see what I can find about {previousValue}, one moment please!',
            end: true,
          },

      ];
    

    return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} style={{ float: 'right'}}/>;
    </ThemeProvider>
     )};
  
  export default Bot;