<?php

namespace App\Http\Controllers;

use App\Actions\CreateEvent;
use App\Http\Requests\Event\CreateEventRequest;
use App\Models\User;

class EventController extends Controller
{
    public function store(CreateEventRequest $request, User $user, CreateEvent $action)
    {
        $action->handle($user, $request->array('event'));

        return response(status: 201);
    }
}
