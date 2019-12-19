export default {
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-rixapp-uploads'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://qlpq4cn3wd.execute-api.us-west-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_2C1cxhphc',
    APP_CLIENT_ID: '360bp6e6hf59vl9b794k3q3dqr',
    IDENTITY_POOL_ID: 'us-west-2:2bcbac74-d760-444f-9e3c-259e345025e0'
  }
};

/*

export default {
  s3: {
    REGION: 'YOUR_S3_UPLOADS_BUCKET_REGION',
    BUCKET: 'YOUR_S3_UPLOADS_BUCKET_NAME'
  },
  apiGateway: {
    REGION: 'YOUR_API_GATEWAY_REGION',
    URL: 'YOUR_API_GATEWAY_URL'
  },
  cognito: {
    REGION: 'YOUR_COGNITO_REGION',
    USER_POOL_ID: 'YOUR_COGNITO_USER_POOL_ID',
    APP_CLIENT_ID: 'YOUR_COGNITO_APP_CLIENT_ID',
    IDENTITY_POOL_ID: 'YOUR_IDENTITY_POOL_ID'
  }
};
*/
