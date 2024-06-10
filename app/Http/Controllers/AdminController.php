<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function try() {
        return response()->json(['message' => 'admin goods']);
    }
}
