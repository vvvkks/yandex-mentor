<script>
import BoardItem from "@/components/mini-game/BoardItem.vue";
import {ref} from "vue";

export default {
  name: 'Board',
  methods: {
    path() {
      return path
    }
  },

  components: {
    BoardItem
  },

  setup() {
    let cells = ref([3, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 3]);
    const path = ref([]);
    const size = ref(4);
    const closedPath = ref([]);
    let lvl = ref(1);
    const maxLvl = 2;
    let gameStatus = ref(0); // 0 - play, 1 - win

    const mousedown = (index) => {
      path.value = [];

      if (cells.value[index] && !checkClosedRoad(index)) {
        path.value.push(index);
      }
    }

    const mouseup = (index) => {
      if (index !== path.value[0] && cells.value[index] === cells.value[path.value[0]]) {
        closedPath.value = closedPath.value.concat(path.value)
      }
      path.value = [];

      checkLvl();

    }

    const go = (index) => {
      if (path.value.length) {
        const lastIndex = path.value[path.value.length - 1];

        if ((Math.abs(lastIndex - index) === 1 || Math.abs(lastIndex - index) === size.value) && !checkClosedRoad(index)) {
          path.value.push(index)
        }

        if (checkClosedRoad(index)
            || (cells.value[index] && cells.value[index] !== cells.value[path.value[0]])) {
          path.value = [];
        }
      }
    }

    const checkRoad = (index) => {
      return path.value.findIndex(p => p === index) > -1;
    }

    const checkClosedRoad = (index) => {
      return closedPath.value.findIndex(p => p === index) > -1;
    }

    const start = (lvl) => {
      if (lvl === 1) {
        cells.value = [3, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 3];
        size.value = 4;
      }

      if (lvl === 2) {
        cells.value = [3, 3, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 2];
        size.value = 5;
      }

      path.value = [];
      closedPath.value = [];
    }

    start(lvl.value);

    const reload = () => {
      start(lvl.value);
    }

    const checkLvl = () => {

      let completed = true;

      cells.value.forEach((cell, index) => {
        if (cell && !checkClosedRoad(index)) {
          completed = false;
        }
      })

      if (completed) {
        goToNextLvl();
      }
    }

    const goToNextLvl = () => {
      lvl.value += 1;
      gameStatus.value = 0;

      if (lvl.value > maxLvl) {
        lvl.value = 1;
        gameStatus.value = 1;
      }

      start(lvl.value);
    }

    return {
      cells,
      mousedown,
      mouseup,
      go,
      path,
      checkRoad,
      checkClosedRoad,
      lvl,
      reload,
      size,
      gameStatus,
    }
  }
}
</script>

<template>
  <div class="level">Level: {{ lvl }}</div>
  <div class="win" v-if="gameStatus === 1">You are win!</div>
  <div class="board" :style="{width: 50 * size + 'px', height: 50 * size + 'px'}">
    <BoardItem
        v-for="(cell, index) in cells"
        :key="cell + '-' + index" :icon="cell"
        :icon-id="cell"
        @mousedown="mousedown(index)"
        @mouseup="mouseup(index)"
        @mousemove="go(index)"
        :selected="checkRoad(index)"
        :closed="checkClosedRoad(index)"
    />
  </div>

  <div @click="reload()" class="reload">Reset level</div>
</template>

<style scoped>
.board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 20px auto;
  background-color: #f0f0f0;
}

.reload {
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  color: #FF1493;
}

.win {
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  color: #FF69B4;
}

.level {
  text-align: center;
  margin-top: 30px;
  color: #333;
}
</style>