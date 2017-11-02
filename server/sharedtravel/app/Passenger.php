<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Passenger extends Model{
    //The table we are current working on.
    public $table = "passengers";
    
    //All fields are required for any HTTP requisition. 
    protected $fillable = [
        'name', //string
        'birthdate', //date(not datetime)
        'cpf', //string
        'sex', //string
        'money_balance', //string
        'travel_id'  //string 
    ];
    
    //Automatic fields.
    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ]; 
    
}
?>