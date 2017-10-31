<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePassengersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passengers', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name', 255);

            $table->date('birthdate');

            $table->string('cpf', 11);

            $table->string('sex', 15);

            $table->string('money_balance', 255);

            $table->integer('travel_id')->unsigned();
            $table->foreign('travel_id')->references('id')->on('travels')->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passengers');
    }
}