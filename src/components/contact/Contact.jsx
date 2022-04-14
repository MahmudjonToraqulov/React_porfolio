import './contact.css'
import Phone from '../../img/phone.jpg'
import Email from '../../img/email.png'
import Adress from '../../img/adress.png'
import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'

export const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lorem ipsum dolor sit</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +998 33 334 334 343
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            example@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Adress} alt="" className="c-icon" />
                            London , UK
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="desc">
                        <b>Lorem ipsum dolor</b> sit amet, consectetur adipisicing elit. Dolorem aperiam, nobis sapiente magnam similique consectetur voluptatem optio necessitatibus enim consequatur aliquid tenetur.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && '#333' }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && '#333' }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && '#333' }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && '#333' }} name="message" cols="30" rows="5" placeholder='Message'></textarea>
                        <button>Submit</button>
                        {done && 'Thank you...'}
                    </form>
                </div>
            </div>
        </div>
    )
}
