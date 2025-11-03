<?php

namespace App\Http\Controllers;

use App\Http\Requests\Awards\DestroyAwardRequest;
use App\Http\Requests\Awards\SearchAwardRequest;
use App\Http\Requests\Awards\ShowAwardRequest;
use App\Http\Requests\Awards\StoreAwardRequest;
use App\Http\Requests\Awards\UpdateAwardRequest;
use App\Models\Award;
use App\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AwardsController extends Controller
{
    use Response;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $awards = Award::all();
        return $this->ok('awards sent', $awards);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAwardRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $attributes['photo'] = $attributes['photo']->store('Awards', 'public');
        $award = Award::create($attributes);
        return $this->ok('award created', $award);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowAwardRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $award = Award::find($attributes['id']);
        return $this->ok('award sent', $award);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAwardRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $award = Award::find($attributes['id']);
        Storage::disk()->delete($award->photo);
        $attributes['photo'] = $attributes['photo']->store('Awards', 'public');
        $award->update($attributes);
        return $this->ok('award updated', $award);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DestroyAwardRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $award = Award::find($attributes['id']);
        Storage::disk()->delete($award->photo);
        $award->delete();
        return $this->ok('award deleted', '');
    }

    public function search(SearchAwardRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $pictures = Award::where('ar_name', 'like', '%' . $attributes['term'] . '%')
            ->orWhere('en_name', 'like', '%' . $attributes['term'] . '%')
            ->get();
        return $this->ok('pictures sent', $pictures);
    }
}
