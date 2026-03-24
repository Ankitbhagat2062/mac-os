import React from 'react'
import {WindowControls} from "@components/index.js";
import WindowWrapper from "@hoc/windowWrapper.jsx";
import {ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf} from "lucide-react";
import {blogPosts} from "@constants/index.js";

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari"/>
                <PanelLeft className="icon ml-10"/>
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon"/>
                    <ChevronRight className="icon"/>
                </div>
                <div className="flex-1 flex-center gap-3 ">
                    <ShieldHalf className="icon"/>
                    <div className="search">
                        <Search className="icon"/>
                        <input type="text" placeholder="search or enter website name" className="flex-1" name="search" id="search" />
                    </div>
                </div>
                <div className=" flex items-center gap-5">
                    <Share className="icon"/>
                    <Plus className="icon"/>
                    <Copy className="icon"/>
                </div>
            </div>
            <div className="blog">
                <h2>MY Developer Blog</h2>
                <div className="space-y-8">
                    {blogPosts.map(({id , image , title ,date,  link})=>(
                        <div key={id} className=" flex items-center gap-3 ">
                            <div className="col-span-2">
                                <img src={image} alt={title} width={100}/>
                            </div>
                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    CheckOut full post <MoveRight className="icon-hover"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow
