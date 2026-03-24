import React, {useCallback} from 'react'
import WindowWrapper from "@hoc/windowWrapper.jsx";
import {WindowControls} from "@components/index.js";
import {Search} from "lucide-react";
import {locations} from "@constants/index.js";
import useLocationStore from "@store/location.js";
import clsx from "clsx";
import useWindowStore from "@store/window.js";

const Finder = () => {
    const { activeLocation , setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();
    const handleClick = useCallback((item) => {
        setActiveLocation(item);
    }, [])
    const renderList =( name,items)=> (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item, index) => (
                  <li key={index} className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                       onClick={()=>handleClick(item)}>
                      <img src={item.icon} alt={item.name} className="w-4" />
                      <p className="text-sm font-medium truncate">{item.name}</p>
                  </li>
                ))}
            </ul>
        </div>
    )

    const openItem = (item) => {
       if(item.fileType === "pdf")return openWindow("resume");
       if(item.kind === "folder") return setActiveLocation(item);
       if ( ["fig","url"].includes(item.fileType) && item.href )
           return window.open(item.href,"_blank");
       if(item.kind === "file" ) openWindow(`${item.fileType}${item.kind}`,item);
    }
    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList('Favourites',Object.values(locations))}
                    {renderList('Work',locations.work.children)}
                </div>
                <ul className="content">
                    {activeLocation.children.map((item, index) => (
                        <li key={index} className={item.position} onClick={()=>openItem(item)}>
                            <img src={item.icon} alt={item.name} className="icon" />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}
const FinderWindow = WindowWrapper(Finder,"finder");
export default FinderWindow
