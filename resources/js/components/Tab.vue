<template>
    <div class="tab-content">
        <div class="layout-col py-2">

            <input type="search" class="mt-2 mb-2 w-full py-2 px-2 border-b border-tint-400" v-model.trim="query" v-on:change="search" />

            <a :href="url" target="_blank" class="inline-block text-sm text-purple-400 hover:text-purple-500">
                <i class="fab fa-stack-overflow"></i>
                StackOverflow
            </a>

            <section class="mb-2">
                <div v-if="is_loading">
                    <i class="fas fa-spinner fa-spin fa-3x"></i>
                </div>
                <div v-if="!is_loading && !questions.length" class="text-gray-500">
                    nothing found
                </div>
                <article v-if="!is_loading && questions.length" v-for="question of questions" class="py-2">
                    <div>
                        <a :href="question.link" target="_blank" class="font-medium hover:text-purple-500" v-html="question.title"></a>
                        <span class="text-gray-400">by</span>
                        <a :href="question.owner.link" target="_blank" class="text-gray-500 hover:text-purple-500">{{question.owner.display_name}}</a>
                    </div>
                    <div class="text-xs text-gray-400">
                        <span class="mr-2">score: {{question.score}}</span>
                        <span class="mr-2">answers: {{question.answer_count}}</span>
                        <span class="mr-2">views: {{question.view_count}}</span>
                    </div>
                    <div>
                        <span v-for="tag of question.tags" class="mr-1 font-mono text-sm text-gray-400">{{tag}}</span>
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['meta'],

        inject: ['report'],

        data () {
            return {
                is_loading: false,
                query: '[laravel]['+this.report.language.toLowerCase()+'] ' + this.report.message,
                questions: [],
            }
        },
        mounted () {
            this.search();
        },
        computed: {
            url: function () {
                return 'https://stackoverflow.com/search?q=' + encodeURIComponent(this.query);
            }
        },
        methods: {
            search: function () {
                this.is_loading = true;
                axios
                    .get('https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=10&order=desc&sort=relevance&site=stackoverflow&accepted=True&q='+encodeURIComponent(this.query))
                    .then(response => {
                        this.questions = response.data.items;
                        this.is_loading = false;
                    })
            }
        }
    }
</script>

<style>
    /* Scoped Styles */
</style>
