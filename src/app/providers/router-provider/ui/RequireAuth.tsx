import {ReactElement} from "react"
import {Navigate, useLocation} from "react-router-dom"
import {useSelector} from "react-redux"

import {getUser} from "entities/user"


const RequireAuth = ({to, children}: { to: string, children: ReactElement }) => {
    const auth = useSelector(getUser)
    const location = useLocation()
    return (!auth)
        ? <Navigate to={to} state={{from: location}} replace />
        : children
}

export default RequireAuth
