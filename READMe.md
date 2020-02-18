# no-secret-example

## there is 2 vulnerabilities

1. secret in `index.vuln.js` line `4`

```js
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
})
```

2. secret in `index.vuln.ts` line `1`

```js
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
})
```
