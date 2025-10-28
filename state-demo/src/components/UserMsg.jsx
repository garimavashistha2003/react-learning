import React from 'react'
import { useState } from "react";

function UserMsg() {
    const [text, setText] = useState('');
    // const [isSending, setIsSending] = useState(false);
    // const [isSent, setIsSent] = useState(false);
    const [status, setStatus] = useState('typing');



    async function handleSubmit(e){
        e.preventDefault(); 
        // setIsSending(true);
        // await sendMessage(text);
        // setIsSending(false);
        // setIsSent(true);

        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');


    }


    const isSending = status === 'sending';
    const isSent = status === 'sent';


  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }


  return (
    
    <form onSubmit = {handleSubmit} >
    <p>How was your stay at The Prancing Pony?</p>
    <textarea 
    value={text}
    onChange={e => setText(e.target.value)}
    disabled={isSending}
    >

    </textarea>

    <br />
    <button disabled={isSending} type='submit'>Send</button>
    {isSending && <p>Sending...</p>}
</form>

  )
}
// Pretend to send a message.
function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

export default UserMsg