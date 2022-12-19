import React, {useState} from 'react'
import '../assets/popup.css'

const Popup  = ({open, onClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { 
      members: [
        {
          email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    LNAME: text
                }
        }
      ]
    };
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
  };

  if (!open) return null;

  return (
    
    <div className="popUp">
      <div className="close">
        <p className="closeBtn" onClick={onClose}>X</p>
      </div>
      <form className="formFields" onSubmit={handleSubmit}>
        <div className="subscribePop">
          Join Us!
        </div>
        <div className="namePop">
        <label htmlFor="">Your name:  </label>
          <input 
            type="text" 
            placeholder='Enter your name' 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="emailPop">
          <label htmlFor="" >Your email:  </label>
          <input 
            placeholder='Enter your email' 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="textPop">
          <label htmlFor="" className='textPop1'>Enter text:  </label>
          <textarea 
            placeholder='Enter some text' 
            className='textPop2'
            cols="18" rows="8"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="submitBtn">
          <button className='submit'>
            <span>JOIN</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Popup