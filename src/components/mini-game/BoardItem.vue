<script>

export default {
  name: 'BoardItem',

  props: {
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
    closed: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconId: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<template>
  <div
      :class="'board-item' + (selected ? ' selected' : '')
      + (closed ? ' closed' : '')">
    <i v-if="iconId" :class="'icon icon-' + iconId"></i>
  </div>
</template>

<style>
.board-item {
  border: 1px solid #FF1493;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  transition: background-color 0.2s ease;
}
.board-item.selected {
  background-color: #FF69B4;
}
.board-item.closed {
  background-color: #FFB6C1;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.icon-1,
.icon-2,
.icon-3 {
  background: url("@/assets/icons.png");
  background-size: 150px 150px;
}

.icon-1 {
  background-position: 0 0;
}

.icon-2 {
  background-position: 50px 0;
}

.icon-3 {
  background-position: 100px 0;
}
</style>