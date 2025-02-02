<?php

namespace App\Actions;

use App\Models\User;

final readonly class UpdateEvent
{
    /**
     * Handle the action.
     */
    public function handle(User $user, array $event): void
    {
        $user->events()->update($event);
    }
}
