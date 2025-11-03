<?php

namespace App;

use function PHPUnit\Framework\returnArgument;

trait Response
{
    public function ok($message, $data){
        return response()->json([
            'message' => $message,
            'data' => $data
        ], 200);
    }

    public function error($message, $statusCode){
        return response()->json($message, $statusCode);
    }
}
