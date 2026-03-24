import React from 'react'
import WindowWrapper from "@hoc/windowWrapper.jsx";
import {socials} from "@constants/index.js";
import {WindowControls} from "@components/index.js";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/ankit.jfif" alt="Ankit" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>Got an idea ? A bug to spanish? or just wanna talk tech ? I'm in</p>
                <p>ankitbhagat2062@gmail.com</p>
                <ul>
                    {socials.map((social)=>(
                        <li key={social.id} style={{backgroundColor:social.bg}}>
                            <a href={social.link} target="_blank" rel="noopener noreferrer" title={social.text} >
                                <img src={social.icon} alt={social.text} className="size-5" />
                                <p>{social.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const ContactWindow = WindowWrapper(Contact,"contact");
export default ContactWindow
