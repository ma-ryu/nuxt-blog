const contentful = require('contentful')

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTF_SPACE,
      accessToken: process.env.CTF_ACCESS_TOKEN
    })
  }
}
