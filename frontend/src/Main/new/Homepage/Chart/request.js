import axios, { CancelToken } from 'axios';

const pendingRequests = {};

const makeCancellable = (headers, requestId) => {
    if (!requestId) {
        return headers;
    }

    if (pendingRequests[requestId]) {
        // cancel an existing request
        pendingRequests[requestId].cancel();
    }
    const source = CancelToken.source();
    const newHeaders = {
        ...headers,
        cancelToken: source.token
    };
    pendingRequests[requestId] = source;
    return newHeaders;
};

const request = ({
    url,
    method = 'GET',
    headers,
    id
}) => {
    const requestConfig = {
        url,
        method,
        headers: makeCancellable(headers || {}, id)
    };

    return axios.request(requestConfig)
        .then((res) => {
            delete pendingRequests[id];
            console.log(res.data);
            return ({ data: res.data });
        })
        .catch((error) => {
            delete pendingRequests[id];
            if (axios.isCancel(error)) {
                console.log(`A request to url ${url} was cancelled`); // cancelled
            } else {
                return Promise.reject(error);
            }
        });
};

export default request;