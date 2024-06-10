<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::prefix('admin')->middleware('role:admin')->group(function () {
        Route::get('/try', [AdminController::class, 'try']);
    });

    Route::prefix('doctor')->middleware('role:doctor')->group(function () {
        Route::get('/try', [DoctorController::class, 'try']);
    });

    Route::prefix('patient')->middleware('role:patient')->group(function () {
        Route::get('/try', [PatientController::class, 'try']);
    });
});
