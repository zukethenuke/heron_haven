<template>
    <v-container elevation-4 fluid>
        <v-layout row wrap>
            <v-flex xs12 class="info-title">Heron Haven Nature Center</v-flex>
            <v-flex xs12><p>Educational field trips are an important part of what Heron Haven has to 
                        offer the community. Heron Haven is a unique wetland sanctuary, which is
                        owned by the <a href="https://www.papionrd.org" target="_blank">Papio-Missouri NRD</a> and managed by the non-profit
                        Friends of Heron Haven, Incorperated.   It it staffed entirely by volunteers.
                        Heron Haven offers <strong>FREE</strong> (we do accept donations) daily trail
                        (sunrise to sunset) access to individuals and groups.  We have a butterfly garden,
                        native grass garden, forest trails, and a spacious and well equipped Nature Center.
                    </p>
                     <p>In order to encourage Metro Schools and Home Schools to use Heron Haven as a
                         a site for meaningful and hands-on wetland and ecological education you can 
                         choose one of the following:
                     </p>
                     <p>
                        Pleace fill out the <strong>Field Trip Request Form</strong> on this page to schedule
                        a GUIDED visit, preferably on a Tuesday between 9am and 5pm.  These will be 1 to 2 
                        hours and include a hike and nature activites by trained Master Naturalists and other
                        volunteers.  Or call 678-492-6923 or <router-link to="/contact_us">send us a message</router-link> directly through the website
                        for more information.
                     </p>
                    </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.info-title {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    color: rgb(116, 116, 116);
    margin: 0 0 20px 0;
}

</style>