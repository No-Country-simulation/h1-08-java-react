
export const fetchData = async (path, method, body, token) => {
    try {
        const URL = import.meta.env.VITE_URL_API
        const VERSION = import.meta.env.VITE_API_VERSION

        const headers = { "Content-Type": "application/json" };

        token && (headers["Authorization"] = `Bearer ${token}`)
        const options = { method, headers }
        body && method != "GET" && (options.body = JSON.stringify(body))

        const res = await fetch(`${URL}/api/${VERSION}/${path}`, options)

        return await res.json()
    } catch (error) {
        console.error(error);
        return { message: "ERROR DURANTE EL FETCH", error }

    }
}
