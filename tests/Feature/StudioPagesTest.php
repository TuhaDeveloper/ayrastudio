<?php

it('can render the services overview page', function () {
    $response = $this->get('/services');

    $response->assertStatus(200);
});

it('can render individual service detail pages', function () {
    $validSlugs = [
        'architecture',
        'civil-engineering',
        '3d-visualization',
        'interior-exterior',
    ];

    foreach ($validSlugs as $slug) {
        $response = $this->get("/services/{$slug}");
        $response->assertStatus(200);
    }
});

it('returns 404 for invalid service slug', function () {
    $response = $this->get('/services/non-existent-service');

    $response->assertStatus(404);
});

it('can render the gallery page', function () {
    $response = $this->get('/gallery');

    $response->assertStatus(200);
});

it('can access gallery via projects alias', function () {
    $response = $this->get('/projects');

    $response->assertStatus(200);
});

it('can render the about page', function () {
    $response = $this->get('/about');

    $response->assertStatus(200);
});

it('can render the contact page', function () {
    $response = $this->get('/contact');

    $response->assertStatus(200);
});

it('can submit a contact inquiry successfully', function () {
    $response = $this->post('/contact', [
        'name' => 'Kazi Nazrul',
        'phone' => '+8801712345678',
        'email' => 'nazrul@example.com',
        'service' => 'Architecture & Master Planning',
        'location' => 'Banani, Dhaka',
        'plot_size' => '5 Katha',
        'message' => 'Looking for complete duplex architectural planning.',
    ]);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    $this->assertDatabaseHas('contact_inquiries', [
        'name' => 'Kazi Nazrul',
        'phone' => '+8801712345678',
        'service' => 'Architecture & Master Planning',
    ]);
});

it('validates required fields when submitting contact inquiry', function () {
    $response = $this->post('/contact', [
        'name' => '',
        'phone' => '',
    ]);

    $response->assertSessionHasErrors(['name', 'phone']);
});
