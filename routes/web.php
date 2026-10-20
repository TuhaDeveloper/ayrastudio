<?php

use App\Http\Controllers\StudioPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/services', [StudioPageController::class, 'services'])->name('services.index');
Route::get('/services/{slug}', [StudioPageController::class, 'serviceShow'])->name('services.show');
Route::get('/gallery', [StudioPageController::class, 'gallery'])->name('gallery');
Route::get('/projects', [StudioPageController::class, 'gallery'])->name('projects');
Route::get('/about', [StudioPageController::class, 'about'])->name('about');
Route::get('/contact', [StudioPageController::class, 'contact'])->name('contact');
Route::post('/contact', [StudioPageController::class, 'submitContact'])->name('contact.store');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
