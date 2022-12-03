import {createSelector} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider"
import {UserRole} from "../types/user"

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles || []

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserEditor = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.EDITOR)))
