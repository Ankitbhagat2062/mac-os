import Navbar from "@components/Navbar.jsx";
import Welcome from "@components/Welcome.jsx";


function App() {
  return (
      <>
          <Navbar/>
          <main className="flex-center flex-col">
              <Welcome/>
          </main>
      </>
  )
}

export default App
