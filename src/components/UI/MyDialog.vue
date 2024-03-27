<template>
  <div class="dialog" v-if="showFlag" @click="hideShowedByFlag">
    <div class="dialog-content" @click="$event.stopPropagation()">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleShowFlagMixin from "@/mixins/toggleShowFlagMixin"
export default {
  name: "my-dialog",
  mixins: [toggleShowFlagMixin]
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  padding: 10px;
  background-color: white;
  opacity: 1;
  min-width: 400px;
  min-height: 40px;
  border: 2px solid mediumslateblue;
  border-radius: 15px;
}
</style>