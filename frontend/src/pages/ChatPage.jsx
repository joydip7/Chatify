import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const ChatPage = () => {
  const {logout} = useAuthStore();
  return (
    <div className='z-10'>
      CHAT PAGE
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default ChatPage
