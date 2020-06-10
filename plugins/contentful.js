const contentful = require('contentful')


const config = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN
}

module.exports = {
  createClient(config) {
    return contentful.createClient({
      space: config.CTF_SPACE,
      accessToken: config.CTF_ACCESS_TOKEN
    })
  }
}
