# no-secret-example

## there is 1 vulnerability

1. secret in `index.vuln.js` line `4`

```js
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
})
```