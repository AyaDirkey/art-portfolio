<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contacts\StoreContactRequest;
use App\Http\Requests\Contacts\UpdateContactRequest;
use App\Models\Contact;
use App\Response;
use Illuminate\Http\Request;
use function PHPUnit\Framework\returnArgument;

class ContactsController extends Controller
{
    use Response;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::all();
        return $this->ok('contacts sent', $contacts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $contact = Contact::create($attributes);
        return $this->ok('contacts stored', $contact);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $contact = Contact::first();
        $contact->update($attributes);
        return $this->ok('contacts updated', $contact);
    }

}
