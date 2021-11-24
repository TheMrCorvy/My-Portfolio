export const useApi = async (request) => {
	const { method, endpoint, body, token, apiUri, headers } = request

	const local = process.env.NODE_ENV === "development"

	const baseUri = local ? "http://localhost:5000/api" : "https://backend.corvalangonzalo.xyz/api"

	const headerToken = { Authorization: token ? "Bearer " + token : "" }

	const reqHeaders = headers
		? new Headers({ ...headers, ...headerToken })
		: new Headers({
				"Content-Type": "application/json",
				Accept: "application/json",
				"Accept-Language": "en",
				...headerToken,
		  })

	const reqUrl = apiUri ? apiUri + endpoint : baseUri + endpoint

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
/***
 * How to use this hook:
 *
 * 1) You first call it in the component, without instanciating it:
 *
 * const callApi = useApi
 *
 * 2) Then, you create the request object:
 *
 * const req = {
 * 		method: "GET",
 * 		endpoint: "/endpoint"
 * }
 *
 * the "/"" in "/endpoint" is necesary
 *
 * 3) Lastly, you instanciate the hook with a .then() function:
 *
 * callApi(req).then(data => {
 * 		if(data.status !== 200) handle the error
 *
 * 		the request was ok
 * })
 *
 * since the .catch() in this hook returns the response, you'll have to handle the error when calling the api
 * in a component
 */
