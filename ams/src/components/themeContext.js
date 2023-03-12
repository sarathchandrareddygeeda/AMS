import {useState,createContext,useContext} from 'react'

 const ThemeContext =createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(false)
    const [login ,setLogin] =useState(false)
     const hand = ()=>
 {
   if(theme===false){
    setTheme(true);
   }
   else{
     setTheme(false);
    }
 }
  const handlogin=()=>
  {
    setLogin(true)
  }
  const handlogout=()=>{
    setLogin(false)
  }
    return(
        <ThemeContext.Provider value={{theme,hand,login,handlogin,handlogout}}>{children}</ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ThemeContext)
}