import { v1, v4 } from 'uuid'
type Algorithm = 'v1' | 'v4'
type UUID = {
	generate: (algorithm: Algorithm) => string
}

export const UUIDGenerator: UUID = {
	generate: (algorithm: Algorithm) => {
		if (algorithm === 'v1') {
			return v1().split('-').join('')
		} else if (algorithm === 'v4') {
			return v4().split('-').join('')
		}
		return v4().split('-').join('')
	},
}
