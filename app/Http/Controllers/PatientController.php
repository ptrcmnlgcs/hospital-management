<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function try() {
        return response()->json(['message' => 'patient goods']);
    }
}
