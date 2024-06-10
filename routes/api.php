<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::prefix('admin')->middleware('role:admin')->group(function () {

    });

    Route::prefix('doctor')->middleware('role:doctor')->group(function () {

    });

    Route::prefix('patient')->middleware('role:patient')->group(function () {

    });
});
