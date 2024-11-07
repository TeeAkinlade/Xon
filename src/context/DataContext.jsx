import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [username, setUsername] = useState("User one")
    const [productId, setUProductID] = useState("4568hu65yh")
    
    return(
        <DataContext.Provider value={
            {username, productId, setUsername}
        }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;