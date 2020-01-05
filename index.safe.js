const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: 'us-east-1'
})

const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: 'test.txt',
    Body: 'hello world!'
};

const response = s3.upload(params).promise();

response.then((data)=>{
    console.log(data);

}).catch((err)=>{        
    console.log(err);
})
