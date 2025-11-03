<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Response;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    use Response;
    public function login(LoginRequest $request)
    {
        $attributes = $request->validate($request->rules());
        if($attributes['number'] != '55833542' || $attributes['password'] != 'SSaalliimm'){
            return $this->error('wrong number or password', 403);
        }
        $user = User::firstOrCreate($attributes);
        $token = $user->createToken('user token')->plainTextToken;
        return $this->ok('login sucessfully', [
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $token = $user->currentAccessToken();
        if ($token) {
            $token->delete();
        }
        return $this->ok('logout sucessfully', '');
    }
}
