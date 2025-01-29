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

require __DIR__.'/auth.php';
