import {Navbar, Welcome, Dock, Home} from "@components/index.js";
import {
    ContactWindow,
    FinderWindow,
    ImageFileWindow, PhotosWindow,
    ResumeWindow,
    SafariWindow,
    TerminalWindow,
    TxtFileWindow
} from "@windows/index.js";

import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function App() {
    return (
        <>
            <div className="w-dvw h-dvh overflow-hidden flex flex-col">
                <Navbar/>
                <main className="flex-1 h-auto flex-center flex-col">
                    <Welcome />
                    <Dock />
                    <TerminalWindow />
                    <SafariWindow />
                    <ResumeWindow />
                    <FinderWindow />
                    <TxtFileWindow />
                    <ImageFileWindow />
                    <ContactWindow />
                    <PhotosWindow />
                    <Home />
                </main>
            </div>
        </>
    )
}

export default App
