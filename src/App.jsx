import { createContext, useState } from "react"
import MainProduct from "./components/MainProduct";
import Demo, { Counter } from "./components/Demo";

export const UserContext = createContext();

function App() {

  const [username, setUsername] = useState("User one")
  const [productId, setUProductID] = useState("4568hu65yh")

  return (
    <>
      <UserContext.Provider value={{username, productId, setUsername}}>
          <h1 className="user">Hello, {username}</h1>
          <MainProduct />
      </UserContext.Provider>
      <Demo name="yoger"/>
      <Counter />
    </>
  )
}

export default App
