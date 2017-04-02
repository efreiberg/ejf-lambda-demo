exports.handle = function (e, ctx, cb) {
    console.log('Event:', JSON.stringify(e))
    console.log('Context: ', JSON.stringify(ctx));
    console.log('Env: ', JSON.stringify(process.env));
    cb(null, {
        "statusCode": 200,
        "headers": {
            "ContentType": "application/json"
        },
        "body": JSON.stringify({ message: "Success!" })
    })
}
