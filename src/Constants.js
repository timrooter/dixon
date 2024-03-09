const prod = {
  url: {
    API_BASE_URL: 'https://mybeapp.herokuapp.com',
    OAUTH2_REDIRECT_URI: 'https://myfeapp.herokuapp.com/oauth2/redirect'
  }
}

const dev = {
  url: {
    API_BASE_URL: 'https://dixon-project-f2ff26836789.herokuapp.com',
    OAUTH2_REDIRECT_URI: 'http://localhost:3000/oauth2/redirect'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod
