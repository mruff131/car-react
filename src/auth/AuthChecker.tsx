import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode
}


const AuthChecker = ({children }: Props) => {
    const navigate = useNavigate()
// This will check if the user is logged in , if  so it returns the children
// which are passed in as props -- its just whatever component is either protected
// or not
//otherwise it sends them to login route
useEffect(() => {
    if (!auth.currentUser){
        navigate("../")
        signInWithPopup(auth, Providers.google)
    }
}, []) // prevents useEffect from happening constantly or creating other issues
    return (
   <>{children}</>
  )
}

export default AuthChecker

