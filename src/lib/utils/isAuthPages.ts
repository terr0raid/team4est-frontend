const AUTH_PAGES: string[] = ['/signin', '/signup', '/logout']

export const isAuthPages = (url: string) =>
	AUTH_PAGES.some(page => url.includes(page))
