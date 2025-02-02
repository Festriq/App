<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Support\Facades\DB;

final readonly class UpdateEvent
{
    /**
     * Handle the action.
     */
    public function handle(User $user, array $event): void
    {
        DB::transaction(function () use ($user, $event): void {
            $user->events()->update($event);
        });
    }
}
