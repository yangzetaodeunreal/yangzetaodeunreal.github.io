<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { i18n } from './i18n'
import { computed, ref } from 'vue';
const langNames = new Map<string, string>([
  ["en", "English"],
  ["zh-CN", "简体中文"]
]);

const langSelectChanged = (event: any) => {
  i18n.global.locale = event.target.value
}

const langFont = computed(() => {
  switch(i18n.global.locale){
    case 'en': return "none";
    case 'zh-CN': return "fangzhengkaiti";
    default: return "none";
  }
})
</script>

<template>
  <header>
    <nav class="header-bar">
      <RouterLink to="/" class="header-item">{{ $t('layout.home') }}</RouterLink>
      <RouterLink to="/blogPosts" class="header-item">{{ $t('layout.blogPosts') }}</RouterLink>
        <select class="lang-select" @change="langSelectChanged" v-model="$i18n.locale">
          <option :key="lang" :value="lang" v-for="lang in $i18n.availableLocales">{{ langNames.get(lang) }}</option>
        </select>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer-section">
      <p>{{ $t('layout.footerBless') }}</p>
    </div>
    <div style="text-align: center;">© 2024 - Zetao Yang</div>
  </footer>
</template>



<style scoped>
footer {
  background-color: orange;
  margin-top: 20px;
  min-height: 100px;
}

.footer-section {
  text-align: center;
  color: aliceblue;
  font-weight: bolder;
  font-size: xx-large;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


main {
  margin: 10px;
  padding: 20px 10px 50px 10px;
  border-radius: 10px;
  background-color: white;
  flex: 1;
  font-family: v-bind("langFont");
}

header {
  color: white;
  font-size: large;
  background-color: orange;
}

.header-bar {
  display: flex;
  justify-content: space-around;
}

.header-item {
  padding: 10px;
  text-decoration: none;
}

.header-item:visited {
  color: white;
}

.lang-select {
  border: 0px;
  background-color: orange;
  color: white;
  font-size: medium;
}
</style>

<style>
@font-face {
  font-family: fangzhengkaiti;
  src: url("./assets/FangZhengKaiTiJianTi-1.ttf");
}

body {
  margin: 0;
  background-color: rgb(214, 214, 214);
  min-width: 330px;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>