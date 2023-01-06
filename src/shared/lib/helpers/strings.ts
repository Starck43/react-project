export const capitalizeFirstLetter = (str = "", locale = navigator.language) =>
    str.charAt(0).toLocaleUpperCase(locale) + str.slice(1).toLowerCase()
