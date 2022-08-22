<!-- PostsAdder.vue -->
<template>
    <button @click="delPost">Slett innlegg</button>
</template>
<script setup>
defineProps({
    id: {
        type: Number,
        required: true,
    },
});
</script>
<script>
import { db } from '../db';

export default {
    title: 'Post Deleter',
    data: () => {
        return {
            status: '',
            postsTitle: '',
            postsDescription: '',
        };
    },
    methods: {
        async delPost() {
            try {
                // Delete Post!
                console.log(this.id);

                db.posts.delete(this.id);

                window.location.reload();

            } catch (error) {
                this.status = `Failed to delete
          ${this.id}: ${error}`;
            }
        },
    },
};
</script>

<style scoped>
button {
    /* border-radius: 25px; */
}
</style>