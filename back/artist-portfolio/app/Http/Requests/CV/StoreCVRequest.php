<?php

namespace App\Http\Requests\CV;

use App\Models\CV;
use Illuminate\Foundation\Http\FormRequest;

class StoreCVRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $contacts = CV::all()->toArray();
        if(array_key_exists(0,$contacts))
            return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'photo' => ['required', 'image', 'mimes:jpg,jpeg,png'],
            'ar_headline' => ['required', 'string'],
            'en_headline' => ['required', 'string'],
            'ar_body' => ['required', 'string'],
            'en_body' => ['required', 'string']
        ];
    }
}
