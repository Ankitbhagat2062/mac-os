import Navbar from "@components/Navbar.jsx";
import Welcome from "@components/Welcome.jsx";


function App() {
  return (
      <>
          <div className="w-dvw h-dvh overflow-hidden flex flex-col">
              <Navbar />
              <main className="flex-1 h-auto flex-center flex-col">
                  <Welcome />
              </main>
          </div>
      </>
  )
}

export default App
