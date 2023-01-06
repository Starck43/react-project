import { Profile, ValidateProfileError } from "@/entities/profile"

export const validateProfileData = (profile?: Profile) => {
    if (!profile) return [ValidateProfileError.NO_DATA]

    const { name, surname, email, phone } = profile
    const errors: ValidateProfileError[] = []

    if (!name || !surname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }
    if (!email) {
        errors.push(ValidateProfileError.INCORRECT_EMAIL)
    }
    if (!phone) {
        errors.push(ValidateProfileError.INCORRECT_PHONE)
    }
    return errors
}
