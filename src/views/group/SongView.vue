<script >

import Magnify from 'vue-material-design-icons/Magnify.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import ClockTimeFiveOutline from 'vue-material-design-icons/ClockTimeFiveOutline.vue';
import SongRow from '../../components/SongRow.vue';

</script>

<template>
    <div class="w-full h-full">
        <div id="SongsSection" class="max-w-[1500px] mx-auto">
        <div class="pl-8">
            <div class="text-white text-3xl font-semibold mb-7">Top tracks</div>

            <div class="flex items-center border border-[#525254] bg-[#23232D] rounded-sm text-[#c9c9c9] w-[300px]">
                <Magnify fillColor="#9B9BA1" class="px-1"/>
                <input 
                    class="w-full py-[5px] bg-[#23232D] text-sm placeholder-[#7e7e7e] outline-none ring-0 hover:ring-0"
                    type="text"
                    placeholder="Achar a tua musica favorita..."
                >
            </div>
        </div>

        <div class="mb-4"></div>

        <div class="flex items-center justify-between min-w-[590px] mx-8 border-b border-b-[#302d2d] py-2.5 px-1.5">
            <div class="text-xs font-light text-[#aeaeae]">MUSICA</div>
            <ClockTimeFiveOutline fillColor="#aeaeae" :size="20" />
            <p class="text-white">dd</p>

        </div>

        
        <ul class="w-full mx-8 pr-16 min-w-[650px]" v-for="track in artist.tracks" :key="track">
            <SongRow v-if="track" track="track"/>
            <p class="text-white">dd</p>
        </ul>
    </div>
    <div class="mb-40"></div>
    </div>
</template>

<style scoped>
    .circle {
        width: 4px;
        height: 4px;
        background-color: rgb(189, 189, 189);
        border-radius: 100%;
    }
</style>