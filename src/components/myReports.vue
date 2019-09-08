<template>
    <div>
        <button @click="selectReport(row.id)"
            v-for="row in content" v-bind:key="row.id"
            :class="{'chosenButton' : currentReport == row.id }"
            class=plainButton>
            <router-link v-bind:to="'/reports/weeks/' + row.id">{{ row.title }}</router-link>
        </button>

        <div v-for= "row in content" v-bind:key="row.id">
             <div v-if="currentReport == row.id">
            <h2>{{ row.title }}</h2>
            <div v-if=row.git>
            <a v-bind:href=row.git>GitHub-repo</a>
            </div>
            <div v-if=row.content>
            <h3>{{ row.contentHeading }}</h3>
            <p><pre>{{ row.content }}</pre></p>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        content: Array
    },
    data:function() {
        return {
            currentReport: this.$route.params.id
        }
    },
    methods: {
        selectReport(selectedReport) {
            this.currentReport=selectedReport
        }
    }
}
</script>

<style>
    .plainButton {
        border: 2px solid grey;
        color:grey;
        background-color: white;
        padding: 10px 20px;
        font-size: 16px;
        margin:10px;
     }
     .plainButton a {
        color:grey;
        text-decoration: none;
     }

    .chosenButton {
        border: 2px solid green;
        background-color: white;
        color:green;
        padding: 10px 20px;
        font-size: 16px;
        margin:10px;
    }
    .chosenButton a {
        color:green;
    }
</style>
