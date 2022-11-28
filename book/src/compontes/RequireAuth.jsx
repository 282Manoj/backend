// import { Route } from "react-router-dom"

// is t veryfy fi the user is authenticated 
// if yes , then navigate him/her to the protected Routeelse take tem to the login page
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const RequireAuth=({children})=>{
    const location =useLocation();
   
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth);
   
        if(isAuth){
            return <Navigate to="/login" state={{data:location.pathname}}/>
        }
        return children;

}
export default RequireAuth;