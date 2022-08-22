<script>
// data() {
//   return {
//     items: [{ message: 'Foo' }, { message: 'Bar' }]
//   }
// }

const post = [{
    message: 'Foo'
}, {
    message: 'Bar'
}]
</script>


<template>
    <h1>Innlegg fra bøndene som er på Snopestad Gård</h1>
    <section>
        <input type="text" class="inputfield" v-model="search" placeholder="Skriv her....." />
        <!-- <input upload-button type="file" @change="upload" /> -->
        <button class="postInputs" @click="upload">Legg ut innlegg</button>
    </section>
    <!-- <section v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <img :src="post.image" />
        <button @click="deletePost(post.id)">Slett</button>
    </section> -->
    <section class="postSection">
        <li v-for="{ message } in post">
            li
        </li>
    </section>

</template>

<style scoped>
.inputfield {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}
.postInputs {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #ccc;
}
.postSection {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
}
.postSection li {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #ccc;
}
</style>