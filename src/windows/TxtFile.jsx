import React from 'react'
import WindowWrapper from "@hoc/windowWrapper.jsx";
import {WindowControls} from "@components/index.js";
import {FileText} from "lucide-react";
import useWindowStore from "@store/window.js";

const TxtFile = () => {
    const { windows } = useWindowStore();
    const item = windows?.txtfile.data
    // Return null if no item data
    if (!item) return null;

    const { name = '', icon = '', image, subtitle, description = [] } = item;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
                <FileText className="icon" title="Text File" />
            </div>
            <div className="p-6 bg-white flex flex-col h-full">
                {image && (
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-32 h-32 object-cover rounded-lg mb-4 self-start"
                    />
                )}
                {icon && !image && (
                    <img 
                        src={icon} 
                        alt={name} 
                        className="w-16 h-16 mb-4 self-start"
                    />
                )}
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                {subtitle && (
                    <p className="text-lg text-gray-600 mb-4 italic">{subtitle}</p>
                )}
                <div className="space-y-2 flex-1">
                    {description.length > 0 ? (
                        description.map((line, index) => (
                            <p key={index} className="text-gray-800 leading-relaxed">
                                {line}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No description available.</p>
                    )}
                </div>
            </div>
        </>
    )
}

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");
export default TxtFileWindow;