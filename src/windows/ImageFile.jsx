import React from 'react'
import WindowWrapper from "@hoc/windowWrapper.jsx";
import {WindowControls} from "@components/index.js";
import {Image} from "lucide-react";
import useWindowStore from "@store/window.js";

const ImageFile = () => {
    const item = useWindowStore((state) => state.windows?.imgfile?.data);
    // Return null if no item data
    if (!item) return null;

    const { name = '', icon = '', imageUrl, subtitle, description = [] } = item;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
                <Image className="icon" title="Image File" />
            </div>
            <div className="p-6 bg-white flex flex-col h-full items-center justify-center">
                {imageUrl && (
                    <div className="w-full max-w-4xl flex-1 flex items-center justify-center p-4">
                        <img 
                            src={imageUrl} 
                            alt={name} 
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                        />
                    </div>
                )}
                <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold mb-2">{name}</h3>
                    {subtitle && (
                        <p className="text-lg text-gray-600 mb-4 italic">{subtitle}</p>
                    )}
                    <div className="space-y-2 max-w-md mx-auto">
                        {description.length > 0 ? (
                            description.map((line, index) => (
                                <p key={index} className="text-gray-800 leading-relaxed text-sm">
                                    {line}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500 italic text-sm">Image file</p>
                        )}
                    </div>
                </div>
                {icon && !imageUrl && (
                    <img 
                        src={icon} 
                        alt={name} 
                        className="w-16 h-16 mt-4"
                    />
                )}
            </div>
        </>
    )
}

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageFileWindow;