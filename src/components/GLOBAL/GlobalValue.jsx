import { useContext, createContext, useState } from "react";


  const GlobalValue = createContext({})

export const AuthProvider = ({ children }) => {
  const [col,setCol]=useState()
 
return <GlobalValue.Provider value ={{col,setCol}}>
{children}

</GlobalValue.Provider>
}
export default function useAuthContext(){

return useContext(GlobalValue);
}

