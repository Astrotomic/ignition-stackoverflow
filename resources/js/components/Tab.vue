<template>
    <div id="astrotomic-stackoverflow-tab" class="tab-content">
        <div class="layout-col py-2">

            <div class="my-2">
                <div class="flex mb-1">
                    <select class="inline-block mr-3 p-2 rounded border-b-2 border-gray-400 bg-gray-100 focus:border-orange-500 hover:border-orange-400" v-model="site" v-on:change="newSearch">
                        <option value="stackoverflow">stackoverflow.com</option>
                        <option value="pt.stackoverflow">pt.stackoverflow.com</option>
                    </select>

                    <input type="search" class="block flex-grow mr-3 p-2 rounded border-b-2 border-gray-400 bg-gray-100 focus:border-orange-500 hover:border-orange-400" v-model.trim="query" v-on:change="newSearch" />

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
                <article v-if="!is_loading && questions.length" v-for="question of questions" class="mb-2 p-2 border-l-8 border-gray-400 hover:border-orange-500 rounded bg-gray-100">
                    <div class="flex">
                        <div class="flex-grow">
                            <a :href="question.link" target="_blank" class="block hover:text-orange-500">
                                <h3 v-html="question.title" class="font-bold"></h3>
                            </a>

                            <div class="text-gray-400">
                                asked by
                                <a :href="question.owner.link" target="_blank" class="font-semibold text-blue-400 hover:text-blue-500">
                                    {{question.owner.display_name}}
                                </a>
                                at
                                <time :datetime="question.creation_date|moment('YYYY-MM-DD HH:mm:ss')" class="font-medium text-gray-500">
                                    {{question.creation_date|moment('YYYY-MM-DD')}}
                                </time>
                            </div>

                            <div class="font-mono text-xs mt-1">
                                <span v-for="tag of question.tags" class="mr-1 px-1 py-px bg-gray-200 text-gray-500 rounded">{{tag}}</span>
                            </div>
                        </div>
                        <div class="ml-2">
                            <div
                                class="p-2 text-center border border-transparent"
                                v-bind:class="{
                                    'text-gray-400': question.score == 0,
                                    'text-red-400': question.score < 0,
                                    'text-gray-500': question.score > 0,
                                }"
                            >
                                <span class="block text-lg">{{question.score}}</span>
                                <span>votes</span>
                            </div>
                        </div>
                        <div class="ml-2">
                            <div
                                class="p-2 text-center border border-green-400 rounded"
                                v-bind:class="{
                                    'text-green-400': !question.is_answered,
                                    'text-white bg-green-400': question.is_answered,
                                }"
                            >
                                <span class="block text-lg">{{question.answer_count}}</span>
                                <span>answers</span>
                            </div>
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
                site: 'stackoverflow',
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
                return 'https://'+this.site+'.com/search?q=' + encodeURIComponent(this.query);
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
                    .get('https://api.stackexchange.com/2.2/search/advanced?&pagesize=10&order=desc&sort=relevance&site='+this.site+'&answers=1&page='+this.page+'&q='+encodeURIComponent(this.query))
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
</style>
