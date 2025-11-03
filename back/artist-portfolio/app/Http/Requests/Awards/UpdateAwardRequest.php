<?php

namespace App\Http\Requests\Awards;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAwardRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', 'exists:awards,id'],
            'photo' => ['required', 'image', 'mimes:jpg,jpeg,png'],
            'ar_title' => ['required', 'string'],
            'en_title' => ['required', 'string']
        ];
    }
}
