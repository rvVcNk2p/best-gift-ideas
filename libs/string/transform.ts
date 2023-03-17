import { capitalize } from './capitalize'

export const transformBlogPath = (path: string): string => {
	const pathParts = path.split('/')
	const lang = pathParts[2].toUpperCase()
	const title = pathParts[3].replaceAll('-', ' ')

	return `Gifty.land | Blog | ${capitalize(title)} `
}
