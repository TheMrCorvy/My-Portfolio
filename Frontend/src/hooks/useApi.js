export const useApi = async (request) => {
	const { method, endpoint, body, token, apiUri, headers } = request

	const headerToken = { Authorization: token ? "Bearer " + token : "" }

	const reqHeaders = headers
		? new Headers({ ...headers, ...headerToken })
		: new Headers({
				"Content-Type": "application/json",
				Accept: "application/json",
				"Accept-Language": "en",
				...headerToken,
		  })

	const reqUrl = apiUri ? apiUri + endpoint : "/api" + endpoint

	return await fetch(reqUrl, { method, headers: reqHeaders, body: JSON.stringify(body) })
		.then((res) => res.json())
		.then((data) => {
			if (data.status !== 200) {
				throw new Error(data)
			}

			return data
		})
		.catch((error) => {
			return error
		})
}
