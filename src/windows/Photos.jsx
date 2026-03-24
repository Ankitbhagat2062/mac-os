import React from 'react'
import WindowWrapper from "@hoc/windowWrapper.jsx";
import {WindowControls} from "@components/index.js";
import {Mail, Search} from "lucide-react";
import {gallery, photosLinks} from "@constants/index.js";
import clsx from "clsx";

const Photos = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon" />
                </div>
            </div>
            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul className="space-y-2 mt-4">
                        {photosLinks.map((link) => (
                            <li key={link.id} className={clsx("flex items-center", link.id)}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-500
                                group-hover:scale-110 transition-all
                                 duration-200 shadow-lg hover:shadow-xl">
                                    <img
                                        src={link.icon}
                                        alt={link.title}
                                        className="w-6 h-6 filter brightness-0 invert"
                                    />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-white
                                transition-colors tracking-wide">{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="gallery flex-1 p-6
                 rounded-2xl mx-4 my-4 border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                        {gallery.map((photo) => (
                            <div key={photo.id} onClick={() => openWindow("imgfile",{
                                id: photo.id,
                                name: "Gallery Image",
                                icon: "/images/image.png",
                                kind: "file",
                                fileType: "img",
                                imageUrl: photo.img,
                            })}
                                 className="group relative overflow-hidden rounded-2xl cursor-pointer
                            hover:scale-105 transition-all duration-300 bg-gray-500 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2">
                                <img
                                    src={photo.img}
                                    alt={`Photo ${photo.id}`}
                                    className="w-100 h-50 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0  bg-linear-to-t from-black/60 via-transparent to-transparent
                                opacity-10 group-hover:opacity-100
                                transition-all duration-300 flex items-end p-4">
                                    <div className="text-white drop-shadow-lg">
                                        <h3 className="font-bold text-lg mb-1">Photo {photo.id}</h3>
                                        <p className="text-sm opacity-90">Beautiful moment captured</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
const PhotosWindow = WindowWrapper(Photos,"photos")
export default PhotosWindow
