<?php

namespace App\Http\Requests\Pictures;

use Illuminate\Foundation\Http\FormRequest;

class StorePictureRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'picture' => ['required', 'string'],
            'ar_name' => ['required', 'string'],
            'en_name' => ['required', 'string'],
            'height' => ['required', 'integer'],
            'width' => ['required', 'integer'],
            'ar_paint' => ['required', 'string'],
            'en_paint' => ['required', 'string'],
            'ar_material' => ['required', 'string'],
            'en_material' => ['required', 'string'],
            'date' => ['required', 'integer']
        ];
    }
}
