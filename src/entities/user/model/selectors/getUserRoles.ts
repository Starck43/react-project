import { createSelector } from "@reduxjs/toolkit"
import type { StateSchema } from "@/app/providers/store-provider"

import { UserRole } from "../consts"

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles || []
export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserEditor = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.EDITOR)))
