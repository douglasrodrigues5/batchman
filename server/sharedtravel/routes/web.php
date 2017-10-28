<?php

$router->get('/', function () use ($router) {
    return response('SharedTravel API 100% Working. ', 200);
});


/*
    Prefix: driver
    URL Example: http://localhost/drivers/1      <- GET HTTP REQUEST
*/
$router->group(['prefix' => 'drivers'], function () use ($router){
    //GET routes
    $router->get('/', 'DriversController@index'); // index
    $router->get('/{id}', 'DriversController@show'); // show

    //POST routes
    $router->post('new', 'DriversController@store'); // create

    //PUT routes
    $router->put('edit/{id}', 'DriversController@update'); // edit

    //DELETE routes
    $router->delete('delete/{id}', 'DriversController@destroy'); // delete
});


/*
    Prefix: travels
    URL Example: http://localhost/travels/edit/1     <- GET HTTP REQUEST
*/
$router->group(['prefix' => 'travels'], function () use ($router){
    //GET routes
    $router->get('/', 'TravelsController@index'); // index
    $router->get('/{id}', 'TravelsController@show'); // show

    //POST routes
    $router->post('new', 'TravelsController@store'); // create

    //PUT routes
    $router->put('edit/{id}', 'TravelsController@update'); // edit

    //DELETE routes
    $router->delete('delete/{id}', 'TravelsController@destroy'); // delete
});

