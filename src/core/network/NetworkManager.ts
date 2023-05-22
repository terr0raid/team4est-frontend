export namespace NetworkManager {
	const url = 'http://localhost:3000/api/'

	export async function post(
		path: string,
		data?: Object,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}`, {
			method: 'POST',
			body: JSON.stringify(data),
		}).then(res => res.json())
		return res
	}
	export async function get(path: string, query?: Object): Promise<any> {
		const res = await fetch(`${url}${path}`, {
			method: 'GET',
		})
		return await res.json()
	}
	export async function put(
		path: string,
		data?: Object,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}/${query}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return await res.json()
	}

	export async function remove(
		path: string,
		data?: Object,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}/${query}`, {
			method: 'DELETE',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return await res.json()
	}
}
