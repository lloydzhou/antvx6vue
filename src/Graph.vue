<template>
  <div class="app-content">
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>
    <div id="container"></div>
    <TeleportContainer />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import ProgressNode from './components/Node.vue'
  // import ProgressNode from './components/ProgressNode.vue'
  import { Graph } from '@antv/x6'
  import { register, getTeleport } from '@antv/x6-vue-shape'

  register({
    shape: 'custom-vue-node',
    width: 100,
    height: 100,
    component: ProgressNode,
  })
  const TeleportContainer = getTeleport()
  const graph = ref()

  export default defineComponent({
    name: 'Node',
    components: {
      TeleportContainer,
    },
    unmounted() {
      graph.value.dispose()
    },
    mounted() {
      graph.value = new Graph({
        container: document.getElementById('container')!,
        background: {
          color: '#F2F7FA',
        },
        autoResize: false,
        height: 100,
      })

      graph.value.addNode({
        shape: 'custom-vue-node',
        x: 100,
        y: 60,
      })
    },
  })
</script>
