<?php

function getPageDataByName($name) {
    global $config;
    foreach ($config->get('pages') as $value) {
        if ($value['name'] === $name) {
            return $value;
        }
    }
    return false;
}

function getPages() {
    global $config;
    return $config->get('pages');
}

function getPageNames() {
    $pages = getPages();
    $result = [];
    foreach ($pages as $page) {
        $result[] = $page['name'];
    }
    return $result;
}