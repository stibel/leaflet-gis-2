import React, { useReducer } from 'react';
import { useCustomContext } from "../hooks/useCustomContext";
import MainStyle from "../styles/MainStyle";
import AltStyle from "../styles/AltStyle";

const StyleContext = React.createContext(null)

const styleReducer = (state, action) => {
    return state === MainStyle ? AltStyle : MainStyle
}

const StyleContextProvider = ({ children }) => {
    const [curStyle, dispatchStyle] = useReducer(styleReducer, MainStyle)

    return <StyleContext.Provider value={{ curStyle, dispatchStyle }}>{children}</StyleContext.Provider>
}


const useStyle = () => {
    return useCustomContext(StyleContext)
}

export { StyleContextProvider, useStyle };