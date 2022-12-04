<template>
  <NConfigProvider class="dark" id="root" :theme="theme">
    <Header />
    <NH1>心电社区</NH1>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import "../assets/common.less"
import { NConfigProvider, NH1, darkTheme } from "naive-ui"
import Header from "~/components/Header.vue"
import { useCommon } from "~/stores/common"
const common = useCommon()
const theme = ref(common.dark ? darkTheme : null)
</script>
