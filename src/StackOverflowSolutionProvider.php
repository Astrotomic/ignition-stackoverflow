<?php

namespace Astrotomic\IgnitionStackOverflowTab;

use Throwable;
use Illuminate\Support\Str;
use Facade\IgnitionContracts\BaseSolution;
use Facade\IgnitionContracts\HasSolutionsForThrowable;

class StackOverflowSolutionProvider implements HasSolutionsForThrowable
{
    public function canSolve(Throwable $throwable): bool
    {
        return true;
    }

    public function getSolutions(Throwable $throwable): array
    {
        $url = curl_init('https://api.stackexchange.com/2.2/search/advanced?&pagesize=5&order=desc&sort=relevance&site=stackoverflow&accepted=True&page=1&filter=!9YdnSJ*_T&q='.urlencode($throwable->getMessage()));

        curl_setopt($url, CURLOPT_ENCODING, 'gzip');
        curl_setopt($url, CURLOPT_RETURNTRANSFER, 1);

        $questions = json_decode(curl_exec($url));

        curl_close($url);

        if (! $questions->items) {
            return [];
        }

        return collect($questions->items)
                ->map(function($item) {
                    return BaseSolution::create(html_entity_decode($item->title, ENT_QUOTES))
                                        ->setSolutionDescription(Str::words(html_entity_decode($item->body_markdown, ENT_QUOTES), 50))
                                        ->setDocumentationLinks(['Link' => $item->link]);
                })
                ->toArray();
    }
}
