<?php

namespace App\Http\Requests\Contacts;

use App\Models\Contact;
use Illuminate\Foundation\Http\FormRequest;

class UpdateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $contacts = Contact::all()->toArray();
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
            'gmail' => ['required', 'email'],
            'facebook' => ['required', 'string']
        ];
    }
}
