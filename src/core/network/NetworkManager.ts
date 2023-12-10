import { APIError } from '../model/APIError'

const url = 'http://localhost:3000/api/'
export namespace NetworkManager {
	export async function upload(
		path: string,
		data?: any,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}?` + new URLSearchParams(query), {
			method: 'POST',
			body: data,
		})
		return res
	}
	export async function post(
		path: string,
		data?: Object,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}?` + new URLSearchParams(query), {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		return res
	}
	export async function get(path: string, query?: string): Promise<any> {
		const res = await fetch(`${url}${path}?` + new URLSearchParams(query), {
			method: 'GET',
		})
		return res
	}
	export async function put(
		path: string,
		data?: Object,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}?` + new URLSearchParams(query), {
			method: 'PUT',
			body: JSON.stringify(data),
		})
		return res
	}

	export async function remove(
		path: string,
		data?: Object,
		query?: string
	): Promise<any> {
		const res = await fetch(`${url}${path}?` + new URLSearchParams(query), {
			method: 'DELETE',
			body: JSON.stringify(data),
		})
		return res
	}
}
