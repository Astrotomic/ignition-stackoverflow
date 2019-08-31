<?php

namespace Astrotomic\IgnitionStackOverflowTab;

use Throwable;
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
        $url = curl_init('https://api.stackexchange.com/2.2/search/advanced?&pagesize=5&order=desc&sort=relevance&site=stackoverflow&accepted=True&page=1&q='.urlencode($throwable->getMessage()));

        curl_setopt($url, CURLOPT_ENCODING, 'gzip');
        curl_setopt($url, CURLOPT_RETURNTRANSFER, 1);

        $questions = json_decode(curl_exec($url));

        curl_close($url);

        if (! $questions->items) {
            return [];
        }

        return [
            BaseSolution::create('Check Similar Stack Overflow Questions')
                ->setSolutionDescription('')
                ->setDocumentationLinks(
                    collect($questions->items)
                    ->mapWithKeys(function ($item) {
                        return [htmlspecialchars_decode($item->title) => $item->link];
                    })->toArray()
                ),
        ];
    }
}
