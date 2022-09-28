export const getWindowDimensions = () => {
    if (typeof window === "undefined") {
        return {
            width: 0,
            height: 0,
            ratio: 0,
            media: null,
        }
    }
    const w = window.innerWidth

    const getMediaScreen = () => {
        switch (true) {
            case w < 320:
                return "xs"
            case w >= 320 && w < 576:
                return "sm"
            case w >= 576 && w < 756:
                return "md"
            case w >= 756 && w < 992:
                return "lg"
            case w >= 992 && w < 1200:
                return "xl"
            default:
                return "xxl"
        }
    }
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,
        media: getMediaScreen(),
    }
}
