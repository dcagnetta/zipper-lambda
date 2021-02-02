console.log('Loading function');

const s3Zip = require('s3-zip')
const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = (event, context) => {
    
    console.time('ZipFileUpload');

    const files = [
        // put key path for file
    ];

    const bucket = '';
    const folder = null;
    const body = s3Zip.archive({ region: 'us-east-1', bucket: bucket }, folder, files);
    const zipParams = { params: { Bucket: 'zip-bucket', Key: 'test-from-lambda.zip' } };
    const zipFile = new aws.S3(zipParams);

    console.log('zipFileUpload');
    return zipFile.upload({ Body: body })
        .on('httpUploadProgress', function (evt) { console.log(evt) })
        .send(function (e, r) {
            // Failure
            if (e) {
                const err = 'zipFile.upload error ' + e
                console.log(err);
                context.fail(err);
            }
            // Success
            console.log(r);
            context.succeed(r);

            console.timeEnd('ZipFileUpload');
        });
    
    
};