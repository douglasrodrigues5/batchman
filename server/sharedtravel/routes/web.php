<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/drivers/', 'DriversController@index');
$router->post('/drivers/new', 'DriversController@store');
$router->put('drivers/edit/{id}', 'DriversController@update');
$router->delete('/drivers/delete/{id}', 'DriversController@destroy');
