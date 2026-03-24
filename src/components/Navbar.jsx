import React from 'react'
import {navIcons, navLinks} from "@constants/index.js";
import dayjs from "dayjs";
import useWindowStore from "@store/window.js";

const Navbar = () => {
    const { openWindow } = useWindowStore()
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo"/>
                <p className={`font-bold`}>Ankit's Portfolio</p>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <button type="button" onClick={() => openWindow(item.type)}>
                                <p>{item.name}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} alt={`icon-${id}`} />
                    </li>
                ))}
                </ul>
                <time>
                    {dayjs().format("ddd MMM D h:mm A")}
                </time>
            </div>
        </nav>
    )
}
export default Navbar
