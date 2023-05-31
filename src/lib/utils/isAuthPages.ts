const AUTH_PAGES = ['/signin', '/signup', '/logout']

export const isAuthPages = (url: string) =>
	AUTH_PAGES.some(page => url.includes(page))
