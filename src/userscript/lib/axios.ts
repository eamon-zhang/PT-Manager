const axios = require('axios')
const axiosGmxhrAdapter = require('axios-userscript-adapter')

axios.defaults.adapter = axiosGmxhrAdapter;

export default axios;