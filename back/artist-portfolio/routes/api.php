<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AwardsController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\CVController;
use App\Http\Controllers\PicturesController;

/// Awards
Route::controller(AwardsController::class)->group(function(){
    Route::get('/amer-alkhatib/awards', 'index');
    Route::post('/amer-alkhatib/award-show', 'show');
    Route::post('/amer-alkhatib/award-search', 'search');
    Route::middleware('auth:sanctum')->group(function(){
        Route::post('/amer-alkhatib/award-store', 'store');
        Route::post('/amer-alkhatib/award-update', 'update');
        Route::post('/amer-alkhatib/award-destroy', 'destroy');
    });
});

/// Contacts

Route::controller(ContactsController::class)->group(function() {
    Route::get('/amer-alkhatib/contacts', 'index');
    Route::middleware('auth:sanctum')->group(function(){
        Route::post('/amer-alkhatib/contact-update', 'update');
        Route::post('/amer-alkhatib/contact-store', 'store');
    });
});

/// CV

Route::controller(CVController::class)->group(function() {
    Route::get('/amer-alkhatib/cv', 'index');
    Route::middleware('auth:sanctum')->group(function(){
        Route::post('/amer-alkhatib/cv-store', 'store');
        Route::post('/amer-alkhatib/cv-update', 'update');
    });
});

/// Pictures

Route::controller(PicturesController::class)->group(function() {
    Route::get('/amer-alkhatib/picures', 'index');
    Route::post('/amer-alkhatib/picture-show', 'show');
    Route::post('/amer-alkhatib/picture-search', 'search');
    Route::middleware('auth:sanctum')->group(function(){
        Route::post('/amer-alkhatib/picture-store','store');
        Route::post('/amer-alkhatib/picture-update','update');
        Route::post('/amer-alkhatib/picture-destroy','destroy');
    });
});

/// Auth

Route::controller(AuthController::class)->group(function() {
    Route::post('/amer-alkhatib/login', 'login');
    Route::post('/amer-alkhatib/logout', 'logout');
});