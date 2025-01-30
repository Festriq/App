<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health', function () {
    return 'ok';
});

Route::get('/', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/events', function () {
    return Inertia::render('events/page');
})->middleware(['auth', 'verified'])->name('events.index');

Route::get('/calendar', function () {
    return Inertia::render('calendar/page');
})->middleware(['auth', 'verified'])->name('calendar.index');

//tickets
Route::get('/tickets', function () {
    return Inertia::render('tickets/page');
})->middleware(['auth', 'verified'])->name('tickets.index');

//account
Route::get('/account', function () {
    return Inertia::render('account/page');
})->middleware(['auth', 'verified'])->name('account.index');

//announcements
Route::get('/announcements', function () {
    return Inertia::render('announcements/page');
})->middleware(['auth', 'verified'])->name('announcements.index');

//feedbacks
Route::get('/feedbacks', function () {
    return Inertia::render('feedbacks/page');
})->middleware(['auth', 'verified'])->name('feedbacks.index');

//campaigns
Route::get('/campaigns', function () {
    return Inertia::render('campaigns/page');
})->middleware(['auth', 'verified'])->name('campaigns.index');

//users
Route::get('/users', function () {
    return Inertia::render('users/page');
})->middleware(['auth', 'verified'])->name('users.index');

Route::prefix('reports')->group(function () {
    Route::get('/', function () {
        return Inertia::render('reports/page');
    })->middleware(['auth', 'verified'])->name('reports.index');

    Route::get('/campaigns', function () {
        return Inertia::render('reports/campaigns/page');
    })->middleware(['auth', 'verified'])->name('reports.campaigns');

    Route::get('/events', function () {
        return Inertia::render('reports/events/page');
    })->middleware(['auth', 'verified'])->name('reports.events');

    Route::get('/tickets', function () {
        return Inertia::render('reports/tickets/page');
    })->middleware(['auth', 'verified'])->name('reports.tickets');
});

require __DIR__.'/auth.php';
