<?php

namespace App\Http\Controllers;

use App\Search; //Search Model
use DB;

use Illuminate\Http\Request; //Requests class

class SearchsController extends Controller
{
    /*
        Search engine.

        Handle all the search.
    */
    public function search(Request $request){
        $results = DB::table('travels') //Access travels table
        ->where('price', '<=', $request->price) //Just shows travels the passenger can pay for.
        ->where('start_location', 'LIKE', $request->start_location) // Initial travel location
        ->where('end_location', 'LIKE', '%'.$request->end_location.'%') // end location
        ->get();

        return response()->json($results);
    }
}