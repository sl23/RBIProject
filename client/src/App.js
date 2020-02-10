import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Head from "./components/head"

function App() {
  return (
    <div>
      <Head />
      <header>
        <img className="logo" src="./assets/logo/thlogo.png" />
      </header>
      <body>
        <p className="sofia-pro">test 1</p>
        <p className="sofia-pro-bold">test 2</p>
        <p className="grease-pencil">test 3</p>
      </body>
      <footer>
        <img
          className="promotion"
          src="./assets/promotion/nutella/NutellaBakedGoods_DMB_MiniPromo_2019_CE.png"
        />
      </footer>
    </div>
  )
}

export default App
