import { useContext } from "react";
import { authContext } from "../AuthProvider/Authprovider";


const useAuth = () => {

    const all = useContext(authContext);
    return all;
};

export default useAuth;