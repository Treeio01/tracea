<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class SolPriceService
{
    private const BASE_URL = 'https://api.binance.com/api/v3';
    private const SYMBOL = 'SOLUSDT';
    private const USDC_SYMBOL = 'USDCUSDT';
    private const HTTP_TIMEOUT = 3;

    public function getKlines(string $interval = '1m', int $limit = 60, string $symbol = self::SYMBOL): array
    {
        $cacheKey = "market:klines:{$symbol}:{$interval}:{$limit}";
        $ttl = $interval === '1m' ? 5 : 15;

        return Cache::remember($cacheKey, $ttl, function () use ($interval, $limit, $symbol) {
            $response = Http::timeout(self::HTTP_TIMEOUT)
                ->get(self::BASE_URL . '/klines', [
                    'symbol' => $symbol,
                    'interval' => $interval,
                    'limit' => $limit,
                ]);

            $response->throw();

            return array_map(fn(array $k) => [
                't' => (int) $k[0],
                'p' => round((float) $k[4], 4),
            ], $response->json());
        });
    }

    public function getChart(string $timeframe = '24H', string $symbol = self::SYMBOL): array
    {
        [$interval, $limit] = match ($timeframe) {
            'Time' => ['1m', 30],
            '1H' => ['1m', 60],
            default => ['5m', 288],
        };

        $klines = $this->getKlines($interval, $limit, $symbol);
        $price = !empty($klines) ? end($klines)['p'] : 0;

        return [
            'klines' => $klines,
            'price' => $price,
        ];
    }

    public function getSolChart(string $timeframe = '24H'): array
    {
        return $this->getChart($timeframe, self::SYMBOL);
    }

    public function getUsdcChart(string $timeframe = '24H'): array
    {
        return $this->getChart($timeframe, self::USDC_SYMBOL);
    }
}
