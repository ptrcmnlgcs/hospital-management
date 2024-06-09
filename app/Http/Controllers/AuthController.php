<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Doctor;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|in:admin,doctor,patient',
            'age' => 'nullable|integer',
            'gender' => 'nullable|string',
            'specialization' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()->first(),
            ], 422);
        }

        $validatedData = $validator->validated();

        $user = User::create(array_merge($validatedData, ['password' => Hash::make($request->password)]));

        $data = ['user_id' => $user->id] + $request->only('age', 'gender', 'specialization');
        $modelClass = $request->role === 'patient' ? Patient::class : Doctor::class;
        $modelClass::create($data);

        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Wrong Credentials!'], 401);
        }

        $user = User::where('email', $request->email)->first();

        return response()->json(['user' => $user, 'token' => $user->createToken('AuthToken')->plainTextToken, 'message' => 'Login successfully.']);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
