import React from 'react'
import {locations} from "@constants/index.js";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";
import useWindowStore from "@store/window.js";
import useLocationStore from "@store/location.js";

const projects = locations.work?.children || []
const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    useGSAP(()=>{
        Draggable.create(".folder")
    },[])
    const handleOpenProject = (project) => {
        setActiveLocation(project);
        openWindow("finder")
    }
    return (
        <>
            <section id="home">
                {projects.map((project) => (
                    <li key={project.id} onClick={()=> handleOpenProject(project)}
                        className={clsx("list-none group folder",project.windowPosition)}>
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </section>
        </>
    )
}
export default Home
