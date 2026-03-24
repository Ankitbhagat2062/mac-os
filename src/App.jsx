import { Navbar ,Welcome ,Dock } from "@components/index.js";
import { TerminalWindow } from "@windows/index.js";

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
                </main>
            </div>
        </>
    )
}

export default App
