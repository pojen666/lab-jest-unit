const pipePromise = function (promise, catchFunction, finallyFunction) {
    return promise
        .then(data => data)
        .catch(error => catchFunction(error))
        .finally(() => finallyFunction)
}

export default pipePromise