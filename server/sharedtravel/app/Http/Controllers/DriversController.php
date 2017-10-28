<?php

namespace App\Http\Controllers;

use App\Driver; //Driver Model
use Illuminate\Http\Request; //Requests class

class DriversController extends Controller
{
    //Rules for validation
    public $rules = [
        'name' => 'required|max:255',
        'birthdate' => 'required',
        'cpf' => 'required|unique:drivers|max:11' , //CPF MUST BE UNIQUE
        'carmodel' => 'required|max:255',
        'status' => 'required',
        'sex' => 'required'
    ];

    public function __construct()
    {
        //
    }

    /*
        Return all drivers registered to db

        METHOD: GET
        RETURNS: A json with all drivers.
    */
    public function index(){
        $drivers = Driver::all();

        return response('Success', 200)->json($drivers);
    }

    /*
        Store a new driver 

        METHOD: POST
        RETURNS: A new driver record.
    */
    public function store(Request $request){
        $this->validate($request, $this->rules);
        $driver = new Driver($request->all());
        $driver->save();
        
        return response('Registered.', 200)->json($driver);
    }
 
    /*
        Update driver fields.

        METHOD: PUT
        RETURNS: The updated driver record. 
    */
    public function update(Request $request, $id){
        $driver = Driver::findOrFail($id);
        $driver->update($request->all());

        return response('Driver updated.', 200)->json($driver);
    }

    /*
        Destroy a driver by id
        METHOD: DELETE
        RETURNS: A response message.
    */
    public function destroy($id){
        Driver::destroy($id);

        return response('Deleted. ', 200);
    }
    //
}
