import React from "react";
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from 'components/Chat/ChatFeed';
import LoginForm from 'components/Chat/LoginForm';
import './ChatLayout.css';

export default function ChatLayout(){

    if(!localStorage.getItem('username')) return <LoginForm />
    
    return(
        <ChatEngine
            height="100vh"
            projectID="63df2c81-0a47-4f4c-a0cc-44e077d2a40f"
            userName = {window.userSesion[0].Usuario}
            userSecret = {window.userSesion[0].Contraseña}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} /> }
        />
    )
}