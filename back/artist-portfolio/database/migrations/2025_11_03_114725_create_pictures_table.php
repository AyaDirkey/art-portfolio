<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pictures', function (Blueprint $table) {
            $table->id();
            $table->string('picture');
            $table->string('ar_name');
            $table->string('en_name');
            $table->integer('height');
            $table->integer('width');
            $table->string('ar_paint');
            $table->string('en_paint');
            $table->string('ar_material');
            $table->string('en_material');
            $table->integer('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pictures');
    }
};
