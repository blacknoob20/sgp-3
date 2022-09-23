

export const useFetch = () => {
    const fetchSinToken = async <T extends Object>(url: string, body: T) => {

        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
            redirect: 'follow',
        };

        const res = await fetch(url, requestOptions);

        return await res.json();

    }

    return {
        fetchSinToken
    }
}
