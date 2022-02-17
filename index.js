/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-central-1:be5cc3c6-e1b3-486a-a0f7-7c6913e2993d', 
        // REQUIRED - Amazon Cognito Region
        region: 'eu-central-1', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-central-1_ibmSn2KjO',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '2a6nilqjljobd129mb0eo5qbca', 
        oauth: {},
      },
      Analytics:{
        disabled:true
      },
})

AppRegistry.registerComponent(appName, () => App);
