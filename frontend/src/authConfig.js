const authConfig = {
    authority: 'https://conference-4t3at3.zitadel.cloud/', //Replace with your issuer URL
    client_id: '203135403132256513@conference', //Replace with your client id
    redirect_uri: 'http://localhost:3000/backoffice',
    response_type: 'code',
    scope: 'openid profile email',
    post_logout_redirect_uri: 'http://localhost:3000/',
    userinfo_endpoint: 'https://conference-4t3at3.zitadel.cloud/oidc/v1/userinfo', //Replace with your user-info endpoint
    response_mode: 'query',
    code_challenge_method: 'S256',
  };

 export default authConfig;
