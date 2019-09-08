<template>
  <div class="reports">
    <h1>Redovisningssida</h1>
    <myReports :content = "kmomData"></myReports>
  </div>
</template>

<script>
    import myReports from '@/components/myReports.vue'

    export default {
        components: {
            myReports
        }, data: function() {
        return {
            kmomData: [
                {
                    title: "Kmom1",
                    id: 1,
                    git: "https://github.com/malp16",
                    contentHeading: "README",
                    content: `

                    # me-page1

                    ## Project setup

                    npm install


                    ### Compiles and hot-reloads for development

                    npm run serve


                    ### Compiles and minifies for production

                    npm run build


                    ### Run your tests

                    npm run test


                    ### Lints and fixes files

                    npm run lint


                    ### Customize configuration
                    See [Configuration Reference](https://cli.vuejs.org/config/).
                    `
                },
                {
                    title: "Kmom02",
                    id: 2,
                    git: "",
                    content: ""
                },
                {
                    title: "Kmom03",
                    id: 3,
                    git: "",
                    content: " "
                }
            ]
        }
        }
    }
</script>
