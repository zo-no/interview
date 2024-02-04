
<template>
  <div id="App">
    <!-- 问题1，{{  }}中的值被渲染的时机 -->
    <button @click="add">{{ count + 1 }}哈哈</button>
  </div>
  <h1 v-if="false">hello world</h1>
</template>

<script >
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
  // `mounted` 是生命周期钩子，之后我们会讲到
  // mounted() {
  //   // `this` 指向当前组件实例
  //   console.log(this.count) // => 1

  //   // 数据属性也可以被更改
  //   this.count = 2
  // }
}
</script>

