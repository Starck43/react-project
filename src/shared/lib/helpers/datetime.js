export const isDarkness = (start, end) => {
	if (isNaN(start-end)) return false

	const date = new Date()
	const hours = date.getHours()
	return (hours >= start || hours < start && hours <= end)
}

