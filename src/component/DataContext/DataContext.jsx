import React, { useState } from 'react'
import { createContext } from 'react'
export const Data = createContext();

function DataContext({children}) {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
  return (
    <Data.Provider value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs
    }}>
        {children}

    </Data.Provider>
   )
}

export default DataContext