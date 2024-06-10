<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function try() {
        return response()->json(['message' => 'doctor goods']);
    }
}
