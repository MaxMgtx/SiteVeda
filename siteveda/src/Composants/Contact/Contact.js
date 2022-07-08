import axios from 'axios';
import React, { useState } from 'react';
import './contact.css';

function Contact () {

    const [mail, setMail] = useState();
    const [text, setText] = useState();
    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
   
        //const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if(mail.match(regexp)){
            alert("ok");
            //sendMail(mail, text)
        }else{
            alert("non")
        }   
    }

    const sendMail = (mail, text) => {
        console.log(mail, text);
        axios.post('http://localhost:4000/api/emails', {name, text, mail});
    }


    return(
        <div className='contact'>
            <h1>Contact</h1>
                <form onSubmit={handleSubmit} >
                    <div id='name'>
                        <label htmlFor="">Your name : </label><br />
                        <input type="name" id='name' required onChange={e=>{setName(e.target.value)}}/>
                    </div>
                    <div id='email'>
                        <label htmlFor="">Your email : </label><br />
                        <input type="email" id='admail' required onChange={e=>{setMail(e.target.value)}}/>
                    </div>
                    <div id='msg'>
                        <label htmlFor="">Your message : </label><br />
                        <textarea name="text" id="text" cols="80" rows="10" required 
                        onChange={e=>{setText(e.target.value)}}></textarea>
                    </div>
                    <input type="submit" />  
                </form>
        </div>
    )
}

export default Contact;