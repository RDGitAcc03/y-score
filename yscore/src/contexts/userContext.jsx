import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { getUserInfoAxios } from "../lib/apiFuncrtionality";
// import instance from './axiosContext';
const userContext = createContext({});
export const useUserContext = () => {
  return useContext(userContext);
};
const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [isUserLogged, setIsUserLogged] = useState(false);

  const getUserDetails = async() => {
    const user = await getUserInfoAxios();
    console.log("userDeatilsPersisted", user);
    if (user) {
      setUserDetails(user);
      setIsUserLogged(true);
    }
    return user;
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <userContext.Provider
      value={{
        userDetails,
        setUserDetails,
        isUserLogged, 
        setIsUserLogged,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;