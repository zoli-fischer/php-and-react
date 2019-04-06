<?php

function removeBaseUri($uri, $baseUri) {
    $baseUri = $baseUri[strlen($baseUri) - 1] === '/' ? substr($baseUri, 0, strlen($baseUri) - 2) : $baseUri;
    $array = explode($baseUri, $uri);
    array_shift($array);
    return implode($baseUri, $array);
}
