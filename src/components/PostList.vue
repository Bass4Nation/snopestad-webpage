<!-- PostList.vue -->
<template>
  <section v-for="post in posts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <PostDel class="delBtn" :id="post.id" />
  </section>
</template>

<style scoped>
section {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
}
h2 {
  text-align: center;
}
p {
  text-align: center;
}

.delBtn {
  text-align: center;
}
</style>

<script>
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { db } from "../db";
import PostDel from "./PostDel.vue";

export default {
    name: "PostList",
    setup() {
        return {
            db,
            posts: useObservable(liveQuery(() => db.posts.toArray())),
        };
    },
    components: { PostDel }
};
</script>