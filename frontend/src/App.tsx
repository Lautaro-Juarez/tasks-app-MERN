import { LayOut } from "./layout/LayOut"

function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">
          Heloo world!!
        </h1>
        <LayOut />
      </div>
    </div>
  )
}

export default App
