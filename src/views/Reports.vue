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
                    git: "https://github.com/malp16/me-page1.git",
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
                    title: "Kmom2",
                    id: 2,
                    git: "https://github.com/malp16/me-page1.git",
                    contentHeading: "Om registreringsformulär",
                    content: `
                    I detta moment har jag gjort ett enkelt formulär. I formuläret
                    ska användaren kunna registrera sitt namn, mail-adress, ett
                    lösenord och födelsedatum. Användaren ska även godkänna lagring av
                    persondata. Formuläret är som sagt en enklare variant. Enda
                    kontrollen som görs av namnet är att det inte är tomt, och för
                    mail-adress kontrolleras att texten innehåller @-tecken.
                    Lösenordet ska innehålla ett visst antal tecken. Födelsedatum
                    läses in genom tre select-boxar. Det är kanske ingen vacker
                    lösning men mina Vue-förmågor räcker inte för att göra något
                    mer avancerat. Dessutom tycker jag att vid just inläsande av
                    födelsedatum så kan denna konstruktion kan vara mer lämplig än
                    att till exempel låta användaren välja datum i en kalender
                    eftersom det i select-box varianten krävs färre klick för att
                    hitta rätt datum. Det sker även en kontroll att datumet är ok
                    (det vill säga det går att välja 2019-02-31 som datum men
                    det godkänns inte av programmet).

                    Samtliga kontroller av indata sker efter att användaren trycker
                    på submit. Jag försökte med att göra lösningar där kontroll
                     skedde medan användaren skrev in data men det lyckades ej.
                     (lyckas inte heller få bort centereringen av all text, så
                     jag ber om ursäkt för denna utformning)



                    `
                },
            ]
        }
        }
    }
</script>
