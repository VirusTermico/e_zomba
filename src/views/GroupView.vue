<script setup>

import GroupLayout from "../layout/GroupLayout.vue";
import { useSongStore } from "../stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);


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
    useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value);
    return;
  }
  useSong.playFromFirst();
};
</script>

<template>

</template>
