<?php

require_once 'pages.php';
require_once 's3.php';

function renderHTML($data) {
    $name = isset($data['name']) ? $data['name'] : 'frontpage';
    $page = getPageDataByName($name);
    if (!$page) {
        return false;
    }
    $template = file_get_contents(__DIR__ . '/../templates/index.html');
    $template = setTemplateMetaData($template, $page);
    $template = setTemplateUrlData($template);
    $template = setTemplateLanguageData($template);
    $template = setTemplateScriptsData($template, $name);
    $template = setTemplateStylesData($template);
    echo $template;
    return true;
}

function setTemplateUrlData($template) {
    $from = [ 's3.url' ];
    $to = [ getS3BucketUrl() ];

    foreach ($from as $key => $value) {
        $from[$key] = '{'.$value.'}';
    }

    return str_replace($from, $to, $template);
}

function setTemplateMetaData($template, $page) {
    $fields = [ 'title', 'description', 'keywords' ];

    $from = [];
    $to = [];
    foreach ($fields as $field) {
        $from[] = '{meta.' . $field. '}';
        $to[] = $page[$field];
    }

    return str_replace($from, $to, $template);
}

function setTemplateLanguageData($template) {
    $from = [ 'lang' ];
    $to = [ 'en_US' ];

    foreach ($from as $key => $value) {
        $from[$key] = '{'.$value.'}';
    }

    return str_replace($from, $to, $template);
}

function getScriptFile($name) {
    $pageJs = glob(__dir__.'/../../frontend/dist/*.'.$name.'.js');
    $filemtime = 0;
    $filepath = false;
    foreach ($pageJs as $value) {
        if (filemtime($value) > $filemtime) {
            $filemtime = filemtime($value);
            $filepath = basename($value);
        }
    }
    return $filepath;
}

function setTemplateScriptsData($template, $name) {
    $scripts = [];

    $scripts[] = 'dist/'.getScriptFile('vendor');
    if ($name) {
        $scripts[] = 'dist/'.getScriptFile($name);
    }

    $scripts = array_map(function($value){
        return '<script src="'.$value.'"></script>';
    }, $scripts);

    $from = [ 'scripts' ];
    $to = [ implode('', $scripts) ];

    foreach ($from as $key => $value) {
        $from[$key] = '{'.$value.'}';
    }

    return str_replace($from, $to, $template);
}

function setTemplateStylesData($template) {
    $styles = [ 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' ];

    $styles = array_map(function($value){
        return '<link rel="stylesheet" href="'.$value.'" />';
    }, $styles);

    $from = [ 'styles' ];
    $to = [ implode('', $styles) ];

    foreach ($from as $key => $value) {
        $from[$key] = '{'.$value.'}';
    }

    return str_replace($from, $to, $template);
}
