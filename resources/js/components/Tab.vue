<template>
    <div class="tab-content">
        <div class="layout-col py-2">

            <div class="my-2">
                <div class="flex mb-1">
                    <input type="search" class="mr-3 p-2 block flex-grow rounded border-b-2 border-gray-400 bg-gray-100 focus:border-orange-500 hover:border-orange-400" v-model.trim="query" v-on:change="newSearch" />

                    <a :href="url" target="_blank" class="inline-block p-2 rounded border-b-2 border-orange-400 hover:border-orange-800 bg-orange-100 hover:text-white hover:bg-orange-500">
                        <i class="fab fa-stack-overflow mr-1"></i>
                        StackOverflow
                    </a>
                </div>

                <a href="https://stackoverflow.com/help/searching" class="text-orange-400 hover:text-orange-500" target="_blank">
                    advanced search tips
                </a>
            </div>

            <section>
                <div v-if="is_loading" class="text-center py-2">
                    <i class="fas fa-spinner fa-spin fa-3x text-orange-400"></i>
                </div>
                <div v-if="!is_loading && !questions.length" class="text-gray-500 py-2">
                    No questions found for your query "{{this.query}}".
                </div>
                <article v-if="!is_loading && questions.length" v-for="question of questions" class="mb-2 p-2 border-l-4 border-gray-400 hover:border-orange-500 rounded bg-gray-100">
                    <div class="flex">
                        <div class="flex-grow">
                            <a :href="question.link" target="_blank" class="block font-medium hover:text-orange-500" v-html="question.title"></a>
                            <div class="text-gray-400">
                                last activity at
                                <time :datetime="question.last_activity_date|moment('YYYY-MM-DD HH:mm:ss')" class="text-gray-500">
                                    {{question.last_activity_date|moment('YYYY-MM-DD')}}
                                </time>
                                and created by
                                <a :href="question.owner.link" target="_blank" class="text-gray-500 hover:text-orange-500">
                                    {{question.owner.display_name}}
                                </a>
                                at
                                <time :datetime="question.creation_date|moment('YYYY-MM-DD HH:mm:ss')" class="text-gray-500">
                                    {{question.creation_date|moment('YYYY-MM-DD')}}
                                </time>
                            </div>

                            <div class="font-mono text-xs mt-1">
                                <span v-for="tag of question.tags" class="mr-1 px-1 py-px bg-gray-200 text-gray-500 rounded">{{tag}}</span>
                            </div>
                        </div>
                        <div class="px-2 pt-2 text-center">
                            <span class="block text-lg text-gray-500">{{question.score}}</span>
                            <span class="text-gray-400">score</span>
                        </div>
                        <div class="px-2 pt-2 text-center">
                            <span class="block text-lg text-gray-500">{{question.answer_count}}</span>
                            <span class="text-gray-400">answers</span>
                        </div>
                    </div>
                </article>
            </section>

            <footer v-if="!is_loading && questions.length" class="flex">
                <span v-if="page > 1" class="cursor-pointer px-2 py-1 rounded inline-block border border-gray-400 hover:border-orange-500 hover:text-orange-500" v-on:click="prevPage">
                    <i class="fas fa-angle-double-left"></i>
                    prev
                </span>
                <span class="py-1 text-center flex-grow">
                    page: {{page}}
                </span>
                <span v-if="has_next" class="cursor-pointer px-2 py-1 rounded inline-block border border-gray-400 hover:border-orange-500 hover:text-orange-500" v-on:click="nextPage">
                    next
                    <i class="fas fa-angle-double-right"></i>
                </span>
            </footer>
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
                page: 1,
                has_next: false,
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
            prevPage: function () {
                if(this.page > 1) {
                    this.page--;
                    this.search();
                }
            },
            nextPage: function () {
                if(this.has_next) {
                    this.page++;
                    this.search();
                }
            },
            newSearch: function () {
                this.page = 1;
                this.search();
            },
            search: function () {
                if(!this.query) {
                    this.questions = [];
                    return;
                }

                this.is_loading = true;
                axios
                    .get('https://api.stackexchange.com/2.2/search/advanced?&pagesize=10&order=desc&sort=relevance&site=stackoverflow&accepted=True&page='+this.page+'&q='+encodeURIComponent(this.query))
                    .then(response => {
                        this.questions = response.data.items;
                        this.is_loading = false;
                        this.has_next = response.data.has_more;
                    });
            }
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/tailwindcss/dist/utilities.css";
</style>
