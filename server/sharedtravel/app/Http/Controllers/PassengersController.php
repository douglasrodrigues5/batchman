<?php

namespace App\Http\Controllers;

use App\Passenger; //Passenger Model

use Illuminate\Http\Request; //Requests class

class PassengersController extends Controller
{
    //Rules for validation
    public $rules = [
        'name' => 'required|max:255',
        'birthdate' => 'required',
        'cpf' => 'required|unique:passengers|max:11' , //CPF MUST BE UNIQUE
        'sex' => 'required|max:15',
        'money_balance' => 'required|max:255', //CAN BE 0, BUT STILL REQUIRED.
        'travel_id' => 'required' 
    ];

    /*
        Return all passengers registered to db

        METHOD: GET
        RETURNS: A json with all passengers.
    */
    public function index(){
        $passengers = Passenger::all();

        return response()->json($passengers);
    }

    /*
        Return a passenger record by id

        METHOD: GET
        RETURNS: A json with a passenger.
    */
    public function show($id){
        $passenger = Passenger::findOrFail($id);

        return response()->json($passenger);
    }

    /*
        Store a new passenger

        METHOD: POST
        RETURNS: A new passenger record.
    */
    public function store(Request $request){
        $this->validate($request, $this->rules);

        $passenger =  new Passenger($request->all());
        $passenger->save();

        return response()->json($passenger);
    }

    /*
        Update passenger fields.

        METHOD: PUT
        RETURNS: The updated passenger record. 
    */
    public function update(Request $request, $id){
        $passenger = Passenger::findOrFail($id);
        $passenger->update($request->all());

        return response()->json($passenger);
    }

    /*
        Destroy a passenger by id
        METHOD: DELETE
        RETURNS: A response message.
    */
    public function destroy($id){
        Passenger::destroy($id);

        return response('Deleted. ', 200);
    }

    /*
        Get a list of passengers in the given travel
    */
    public function getTravelPassengers($travel_id){
        $passengers = Passenger::where('travel_id', '=', $travel_id)->get();
        return response()->json($passengers);
    }
}

?>