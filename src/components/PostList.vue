<!-- PostList.vue -->
<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}, {{ post.description }}
    </li>
  </ul>
</template>

<script>
  import { liveQuery } from "dexie";
  import { useObservable } from "@vueuse/rxjs";
  import { db } from "../db";

  export default {
    name: "PostList",
    setup() {
      return {
        db,
        posts: useObservable(
          liveQuery(() => db.posts.toArray())
        ),
      };
    },
  };
</script>