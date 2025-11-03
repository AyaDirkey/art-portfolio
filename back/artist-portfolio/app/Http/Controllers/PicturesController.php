<?php

namespace App\Http\Controllers;

use App\Http\Requests\Pictures\DestroyPictureRequest;
use App\Http\Requests\Pictures\SearchPictureRequest;
use App\Http\Requests\Pictures\ShowPictureRequest;
use App\Http\Requests\Pictures\StorePictureRequest;
use App\Http\Requests\Pictures\UpdatePictureRequest;
use App\Models\Picture;
use App\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function PHPUnit\Framework\returnArgument;

class PicturesController extends Controller
{
    use Response;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pictures = Picture::all();
        return $this->ok('pictures sent', $pictures);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePictureRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $attributes['picture'] = $attributes['picture']->store('Pictures', 'public');
        $picture = Picture::create($attributes);
        return $this->ok('picture stored', $picture);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowPictureRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $picture = Picture::find($attributes['picture_id']);
        return $this->ok('picture sent', $picture);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePictureRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $picture = Picture::find($attributes['id']);
        Storage::disk()->delete($picture->picture);
        $attributes['picture'] = $attributes['picture']->store('Pictures', 'public');
        $picture->update($attributes);
        return $this->ok('picture updated', $picture);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DestroyPictureRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $picture = Picture::find($attributes['id']);
        Storage::disk()->delete($picture->picture);
        $picture->delete();
        return $this->ok('picture deleted', '');
    }

    public function search(SearchPictureRequest $request)
    {
        $attributes = $request->validate($request->rules());
        $pictures = Picture::where('ar_name', 'like', '%' . $attributes['term'] . '%')
            ->orWhere('en_name', 'like', '%' . $attributes['term'] . '%')
            ->get();
        return $this->ok('pictures sent', $pictures);
    }
}
