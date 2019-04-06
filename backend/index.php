<?php

/****** Show errors ******/
error_reporting(E_ALL);
ini_set('display_errors', 1);

/****** Requires & Includes ******/
require_once './vendor/autoload.php';
require_once './utils/uri.php';
require_once './utils/pages.php';
require_once './utils/template.php';
require_once './utils/articles.php';

/****** Config ******/
$config = Noodlehaus\Config::load(__DIR__.'/../config.json');

/****** Routing ******/
$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    // Pages
    $r->addRoute('GET', '/[{name}]', 'renderHTML');

    // API endpoints
    $r->addRoute('GET', '/api/article/{id:\d+}', 'getArticleData');
    $r->addRoute('GET', '/api/articles/{count:\d+}', 'getArticles');

    /*
    $r->addRoute('GET', '/users', 'get_all_users_handler');
    // {id} must be a number (\d+)
    $r->addRoute('GET', '/user/{id:\d+}', 'get_user_handler');
    // The /{title} suffix is optional
    $r->addRoute('GET', '/articles/{id:\d+}[/{title}]', 'get_article_handler');
    */
});

// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode(removeBaseUri($uri, $config->get('baseUri')));

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);

switch ($routeInfo[0]) {
    /*
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        // ... 405 Method Not Allowed
        break;
    */
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
        $response = $handler($vars);
        if ($response) {
            if (gettype($response) === 'object') {
                header('Content-Type: application/json');
                echo json_encode($response);
            }
            break;
        }
    case FastRoute\Dispatcher::NOT_FOUND:
        // ... 404 Not Found
        header('HTTP/1.0 404 Not Found');
        renderHTML(['name' => '404']);
        break;
}
