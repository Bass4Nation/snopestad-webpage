<!-- PostsAdder.vue -->
<template>
  <fieldset>
    <legend class="toptext">Legg til et nytt innlegg</legend>
    <label>
      Tittel: <br />
      <input v-model="postsTitle" type="text" />
    </label>
    <br />
    <label>
      Beskrivelse: <br />
      <input v-model="postsDescription" type="text" />
    </label>
    <br />
    <button @click="addPost">Last opp</button>
    <p>{{ status }}</p>
  </fieldset>
</template>

<script>
import { db } from '../db';

export default {
  title: 'PostsAdder',
  data: () => {
    return {
      status: '',
      postsTitle: '',
      postsDescription: '',
    };
  },
  methods: {
    async addPost() {
      try {
        // Add the new post!
        const id = await db.posts.add({
          title: this.postsTitle,
          description: this.postsDescription,
        });

        this.status = `Post ${this.postsTitle}
          successfully added. Got id ${id}`;

        // Reset form:
        this.postsTitle = '';
        this.postsDescription = '';
      } catch (error) {
        this.status = `Failed to add
          ${postsTitle}: ${error}`;
      }
    },
  },
};
</script>

<style scoped>

.toptext{
    text-align: center;
}
fieldset{
    border-radius: 25px;
    text-align: center;
}
input {
    border-radius: 25px;
    border: 1px solid rgb(0, 0, 0);
    padding: 5px;
}
button{
    border-radius: 25px;
    
}
</style>