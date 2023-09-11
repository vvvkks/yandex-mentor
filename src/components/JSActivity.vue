<script>
import Board from "@/components/mini-game/Board.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Board}
})

</script>
<template>
  <div class="activity"></div>
  <Board/>
</template>
<style>
.activity{
  text-align: center;

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>