<?php

namespace App\Http\Controllers;

use App\Travel; //Travel Model

use Illuminate\Http\Request; //Requests class

class TravelsController extends Controller
{
    //Rules for validation
    public $rules = [
        'start_location' => 'required|max:255',
        'end_location' => 'required|max:255',
        'price' => 'required|max:255',
        'max_lotation' => 'required|max: 255',
        'driver_id' => 'required|max:255'
    ];

    public function __construct()
    {
        //
    }

    /*
        Return all travels registered to db

        METHOD: GET
        RETURNS: A json with all travels.
    */
    public function index(){
        $travels = Travel::all();

        return response()->json($travels);
    }

    /*
        Return a travel record by id

        METHOD: GET
        RETURNS: A json with a record.
    */
    public function show($id){
        $travel = Travel::findOrFail($id);
        return response()->json($travel);
    }

    /*
        Store a new travel

        METHOD: POST
        RETURNS: A new travel record.
    */
    public function store(Request $request){
        $this->validate($request, $this->rules);
        $travel = new Travel($request->all());
        $travel->save();
        
        return response()->json($travel);
    }
 
    /*
        Update travel fields.

        METHOD: PUT
        RETURNS: The updated travel record. 
    */
    public function update(Request $request, $id){
        $travel = Travel::findOrFail($id);
        $travel->update($request->all());

        return response()->json($travel);
    }

    /*
        Destroy a travel by id

        METHOD: DELETE
        RETURNS: A response message.
    */
    public function destroy($id){
        Travel::destroy($id);

        return response('Deleted. ', 200);
    }
    //
}
