module.exports = {
    sleep: async function (seconds) {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    },
    sleep_ms: async function (miliseconds) {
        return new Promise((resolve) => setTimeout(resolve, miliseconds));
    }
}
