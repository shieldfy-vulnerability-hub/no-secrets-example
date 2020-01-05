const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
})

const params = {
    Bucket: 'test',
    Key: 'test.txt',
    Body: 'hello world!'
};

const response = s3.upload(params).promise();

response.then((data)=>{
    console.log(data);

}).catch((err)=>{        
    console.log(err);
})
