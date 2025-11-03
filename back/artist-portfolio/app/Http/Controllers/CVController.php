<?php

namespace App\Http\Controllers;

use App\Http\Requests\CV\StoreCVRequest;
use App\Http\Requests\CV\UpdateCVRequest;
use App\Models\CV;
use App\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class CVController extends Controller
{
    use Response;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cv = CV::first();
        return $this->ok('cv sent', $cv);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCVRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $attributes['photo'] = $attributes['photo']->store('cv_photo', 'public');
        $cv = CV::create($attributes);
        return $this->ok('cv added', $cv);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCVRequest $request)
    {
        $attributes = $request->validate($request->rules());
        
        $cv = CV::first();
        Storage::disk('public')->delete($cv->photo);
        $attributes['photo'] = $attributes['photo']->store('cv_photo', 'public');
        $cv->update($attributes);
        return $this->ok('cv updated', $cv);
    }

}
