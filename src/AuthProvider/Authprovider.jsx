import { createContext } from "react";
export const authContext = createContext(null)
const Authprovider = ({ children }) => {
    const authInfo = { hoe: 'hoe' }
    console.log(authInfo)
    return (

        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>



    );
};

export default Authprovider;