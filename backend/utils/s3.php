<?php

function getS3FileUrl($file) {
    return getS3BucketUrl().ltrim($file, '/');
}

function getS3BucketUrl() {
    global $config;
    return $config->get('S3BucketUrl'); 
}
