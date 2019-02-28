import auth0 from 'auth0-js'

export const newAuth = () => new auth0.WebAuth({
  domain: 'grand-conquest.eu.auth0.com',
  clientID: 'L5oTAT2RTUBNy8dUyUWqPX52dCAKap2m',
  redirectUri: (window.location.origin + window.location.pathname).replace(/\/$/g, ''),
  responseType: 'token id_token',
  scope: 'openid profile email'
})

export const checkSession = (auth) => (
  new Promise((resolve, reject) => {
    auth.checkSession({}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
)

export const parseHash = (auth) => (
  new Promise((resolve, reject) => {
    auth.parseHash({ hash: window.location.hash }, (err, res) => {
      window.location.hash = ''
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
)
