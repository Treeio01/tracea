<?php

use App\Http\Controllers\RenderController;
use App\Http\Controllers\WalletController;
use Illuminate\Support\Facades\Route;

Route::get('/', [RenderController::class, 'landing'])->name('landing');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [RenderController::class, 'dashboard'])->name('dashboard');
    Route::post('/wallet/analyze', [WalletController::class, 'analyze'])->name('wallet.analyze');
});

require __DIR__ . '/auth.php';
