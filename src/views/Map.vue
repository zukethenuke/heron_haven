<template>
    <div>
        <div class="display-1 black--text text-xs-center pa-5">
            How to get here?  From the intersection of 120th and West Maple Road, go north less than 50 feet and immediately turn right onto Old Maple Rd.  Cross the bridge (Papio Creek); Look to your right and turn into our parking lot - THERE YOU ARE!!!!!
        </div>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="1000" height="800" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Heron%20Haven%20Omaha&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style scoped>
.display-1 {
    max-width: 1000px;
}
.mapouter {
    text-align: right;
    height: 800px;
    width: 1000px;
}

.gmap_canvas {
    margin: 0 20px;
    overflow: hidden;
    background: none !important;
    height: 800px;
    width: 1000px;
}
</style>
