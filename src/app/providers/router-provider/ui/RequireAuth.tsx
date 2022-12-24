import {ReactElement, useMemo} from "react"
import {Navigate, useLocation} from "react-router-dom"
import {useSelector} from "react-redux"

import {getUser, getUserRoles, UserRole} from "@/entities/user"
import {getRouteForbidden} from "@/shared/const/router"



interface RequireAuthProps {
    to: string,
    roles?: UserRole[]
    children: ReactElement
}

const RequireAuth = (props: RequireAuthProps) => {
    const {to, roles, children} = props
    const auth = useSelector(getUser)
    const userRoles = useSelector(getUserRoles)
    const location = useLocation()

    const hasUserRequiredRoles = useMemo(() => {
        if (!roles) return true

        return roles.some((role) => userRoles.includes(role))
    }, [ roles, userRoles ])

    if (!auth.id) {
        return <Navigate to={to} state={{from: location}} replace />
    }

    if (!hasUserRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{from: location}} replace />
    }

    return children
}

export default RequireAuth
