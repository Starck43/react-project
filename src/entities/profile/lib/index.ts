import { Country } from "@/entities/country"
import { capitalizeFirstLetter } from "@/shared/lib/helpers/strings"

export const translatedCountry = (country: string | undefined, language: string) => {
    if (!country) return null

    return language === "en"
        ? capitalizeFirstLetter(country, language)
        : Country[country.toUpperCase() as keyof typeof Country]
}
