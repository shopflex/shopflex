<template>
  <section data-theme="orange" class="setting flex flex-col">
    <button class="btn btn-primary" @click="handleClick1">click me1</button>
    <button class="btn btn-primary" @click="handleClick2">click me2</button>
    <button class="btn btn-primary" @click="handleClick3">click me3</button>

    <button class="btn" :class="isIdle ? 'btn-info' : ''">info</button>
    <button class="btn" :class="isLoading ? 'loading' : ''">loading</button>
    <button class="btn" :class="isSuccess ? 'btn-success' : ''">success</button>
    <button class="btn" :class="isError ? 'btn-error' : ''">error</button>
  </section>
</template>

<script>
import { useLoading } from '~/mixins'

export default {
  name: 'Setting',
  mixins: [useLoading()],
  layout: 'public',
  data() {
    return {}
  },
  methods: {
    handleClick1() {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          return resolve(1)
        }, 4000)
      })
      this.setByPromise(promise)
    },

    handleClick2() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('1'))
        }, 4000)
      })

      this.setByPromise(promise).catch((e) => {
        console.log('catch err: ', e)
      })
    },

    handleClick3() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('1'))
        }, 40000)
      })
      this.setByPromise(promise).catch((e) => {
        console.log('catch err: ', e)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
