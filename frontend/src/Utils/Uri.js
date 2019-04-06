export function getUrl(path) {
    return (CONFIG.baseUri + path).replace(/\/\//g, '/');
}

export function getS3Url(path) {
    return (CONFIG.S3BucketUrl + path).replace(/\/\//g, '/');
}
