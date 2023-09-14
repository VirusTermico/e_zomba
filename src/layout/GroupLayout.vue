<script setup>
import artist from "../artist.json";
import Magnify from "vue-material-design-icons/Magnify.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()

const currentIndex=0
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)
const tabs=[{
  name:'bio',
  path:''
},
{
  name:'albuns',
  path:''
},
{
  name:'galeria',
  path:''
},
{
  name:'similares',
  path:''
},

]
const playFunc = () => {
    if (currentTrack.value) {
        useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
        return
    } 
    useSong.playFromFirst()
}
</script>

<template>
  <div  class="flex flex-col w-full h-full">
    <div>

        <img  class="w-full h-36  object-fill" src="/images/albumCovers/DiariesOfAHero.png"/>
        <div class="ml-8">
                <div class="text-white text-3xl w-full hover:underline cursor-pointer font-semibold">
                    {{ artist.name }}
                </div>

                <div class="text-[#bfbfbf] text-[12px] py-1.5 font-light">167,026 fans</div>

                <div class="flex gap-4 items-center justify-start bottom-0 mb-1.5">
                    <button class="p-2.5 px-6 rounded-full bg-[#EF5465]" @click="playFunc()">
                        <div v-if="!isPlaying" class="flex items-center">
                            <Play fillColor="#FFFFFF" :size="20"/> 
                            <div class="text-white font-bold text-xs pr-1">PLAY</div>
                        </div>
                        <div v-else class="flex items-center">
                            <Pause fillColor="#FFFFFF" :size="20"/>
                            <div class="text-white font-bold text-xs pr-1">PAUSE</div>
                        </div>
                    </button>
                    <button type="button" class="rounded-full p-2 border border-[#52525D] hover:bg-[#2b2b30]">
                        <HeartOutline fillColor="#EAEAEA" :size="20"/>
                    </button>
                    <button type="button" class="rounded-full p-2 border border-[#52525D] hover:bg-[#2b2b30]">
                        <DotsHorizontal fillColor="#EAEAEA" :size="20"/>
                    </button>
                </div>
            </div>

    </div>
    <div class="flex justify-between pt-2 min-w-[650px]">
      <ul class="flex items-center justify-start w-full text-gray-400 h-9">
        <li class="pl-8">
          <button
            class="font-light cursor-pointer text-[#bebebe] border-b-2 border-b-[#121216] hover:border-b-[#FFFFFF] pb-[8px] hover:text-[#FFFFFF]"
          >
            Discografia
          </button>
        </li>
        <li class="text-[#FFFFFF] pl-10">
          <button
            class="font-semibold cursor-pointer border-b-2 border-b-[#EF5465] pb-[8px]"
          >
            Mais Tocadas
          </button>
        </li>
        <li class="pl-10">
          <button
            class="font-light cursor-pointer text-[#bebebe] border-b-2 border-b-[#121216] hover:border-b-[#FFFFFF] pb-[8px] hover:text-[#FFFFFF]"
          >
            Artistas Similares
          </button>
        </li>
        <li class="pl-10">
          <button
            class="font-light cursor-pointer text-[#bebebe] border-b-2 border-b-[#121216] hover:border-b-[#FFFFFF] pb-[8px] hover:text-[#FFFFFF]"
          >
            Playlists
          </button>
        </li>
        <li class="pl-10">
          <button
            class="font-light cursor-pointer text-[#bebebe] border-b-2 border-b-[#121216] hover:border-b-[#FFFFFF] pb-[8px] hover:text-[#FFFFFF]"
          >
          <a href="/bio">
            Bio

          </a>
          </button>
        </li>
      </ul>
    </div>
    <div class="mt-11"></div>

    <RouterView />
  </div>
</template>
