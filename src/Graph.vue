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
  import { defineComponent } from 'vue'
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

  export default defineComponent({
    name: 'Node',
    components: {
      TeleportContainer,
    },
    mounted() {
      const graph = new Graph({
        container: document.getElementById('container')!,
        background: {
          color: '#F2F7FA',
        },
        autoResize: false,
        height: 100,
      })

      graph.addNode({
        shape: 'custom-vue-node',
        x: 100,
        y: 60,
      })
    },
  })
</script>