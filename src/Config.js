export const LinkedInApi = {
  clientId: '78bddxwwm3ffby',
  redirectUrl: process.env.REACT_APP_LINKEDIN_REDIRECT_URL,
  oauthUrl:
    'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
  scope: 'r_liteprofile%20r_emailaddress',
  state: '123456',
}

export const NodeServer = {
  baseURL: process.env.REACT_APP_FRONTEND_BASE_URL,
  getUserCredentials: '/getUserCredentials',
}
