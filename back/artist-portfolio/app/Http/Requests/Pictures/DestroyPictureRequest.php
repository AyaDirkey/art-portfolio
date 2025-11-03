<?php

namespace App\Http\Requests\Pictures;

use Illuminate\Foundation\Http\FormRequest;

class DestroyPictureRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', 'exists:pictures,id']
        ];
    }
}
