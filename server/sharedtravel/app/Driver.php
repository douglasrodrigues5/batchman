<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model{
    //The table we are current working on.
    public $table = 'drivers';

    //All fields are required for any HTTP requisition. 
    protected $fillable = [
        'name', //string
        'birthdate', //date(not datetime)
        'cpf', //string
        'carmodel', //string
        'status', //boolean
        'sex' //string
    ];

    //Automatic fields.
    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function travels(){
        return $this->hasMany(App\Travel::class);
    }
}

?>