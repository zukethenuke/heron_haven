<template>
    <v-container elevation-4 fluid class="my-4 mx-4">
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Welcome to Heron Haven</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex class="address" xs12 sm12 md4>
                <p>Heron Haven</p>
                <p>11809 Old Maple Rd.</p>
                <p>Omaha, Ne</p>
                <p>(402) 493-4303</p>
                <br>
                <br>
                <p>Mailing Address:</p>
                <p>PO Box #103</p>
                <p>Boys Town, NE 68010-0103</p>
            </v-flex>
            <v-flex class="statement" xs12 sm12 md8>
                <p>Heron Haven is a spring-fed wetland sanctuary.  The sanctuary features one of the last
                oxbow wetlands of the Big Papillion Creek and it is within Omaha's city limits.</p><br>

                <p>Heron Haven is an important educational and research asset to the Omaha community.
                Biology and ecology students from local schools and universities use the wetland to conduct
                ecological studies and surveys of native species of plants and aquatic animals.  Heron
                Haven also has a spacious Education Center where lectures and short courses on conservation,
                birding, photography and natural history are offered.  The Education Center also houses a small
                nature museum and a reference library containing books, periodicals, and videos.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.address {
    text-align: center;
    line-height: 15px;
    font-weight: 600;
    font-size: 1.3em;
}

.statement {
    /* font-weight: 400; */
    font-size: 1.2em;
    /* line-height: 10px; */
}
</style>
