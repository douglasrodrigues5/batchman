<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Travel extends Model{
    //The table we are current working on.
    public $table = "travels";

    //All fields are required for any HTTP requisition. 
    protected $fillable = [
        'start_location', //string
        'end_location', //string
        'price', //string
        'driver_id' //integer(driver_id foreign key)
    ];

    //Automatic fields.
    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ]; 

    public function passengers(){
        return $this->hasMany(App\Passenger::class);
    }
}