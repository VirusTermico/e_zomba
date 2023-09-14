<script setup>
import { onBeforeMount } from 'vue';
import { RouterView, RouterLink } from 'vue-router'

import Magnify from 'vue-material-design-icons/Magnify.vue';
import Bell from 'vue-material-design-icons/Bell.vue';
import SideMenuItem from './components/SideMenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import SongLyrics from './components/SongLyrics.vue';
import Header from './components/Header.vue';

import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack, isLyrics, trackTime } = storeToRefs(useSong)

onBeforeMount(() => { 
  isPlaying.value = false
  isLyrics.value = false
  trackTime.value = '0:00'
})
</script>

<template>
  <Header/>
  <div class="w-[calc(100%)] h-[calc(100%-56px)]   ">

      <RouterView />
  </div>
  
  <MusicPlayer v-if="isPlaying"/>

  <SongLyrics 
    v-if="isPlaying"
    :class="{'animate__animated animate__slideInUp animate__faster': isLyrics}"
  />
</template>
