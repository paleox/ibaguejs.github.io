process.env.VUE_APP_MEETUP_URL = 'https://api.meetup.com/IbagueJS'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ibaguejs.com/' : '/'
}
