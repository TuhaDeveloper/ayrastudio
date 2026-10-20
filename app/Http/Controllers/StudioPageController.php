<?php

namespace App\Http\Controllers;

use App\Models\ContactInquiry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StudioPageController extends Controller
{
    /**
     * Services catalog index page.
     */
    public function services(): Response
    {
        return Inertia::render('services/index');
    }

    /**
     * Single service deep-dive detail page.
     */
    public function serviceShow(string $slug): Response
    {
        $validSlugs = [
            'architecture',
            'civil-engineering',
            '3d-visualization',
            'interior-exterior',
        ];

        if (! in_array($slug, $validSlugs, true)) {
            abort(404);
        }

        return Inertia::render('services/show', [
            'slug' => $slug,
        ]);
    }

    /**
     * About studio page.
     */
    public function about(): Response
    {
        return Inertia::render('about');
    }

    /**
     * Architectural project gallery showcase page.
     */
    public function gallery(): Response
    {
        return Inertia::render('gallery');
    }

    /**
     * Contact and consultation page.
     */
    public function contact(): Response
    {
        return Inertia::render('contact');
    }

    /**
     * Store a contact or project consultation inquiry.
     */
    public function submitContact(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'email' => ['nullable', 'email', 'max:255'],
            'service' => ['nullable', 'string', 'max:100'],
            'location' => ['nullable', 'string', 'max:255'],
            'plot_size' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:3000'],
        ]);

        ContactInquiry::create($validated);

        return back()->with('success', 'Your inquiry has been received. Our architectural team will contact you within 24 hours.');
    }
}
