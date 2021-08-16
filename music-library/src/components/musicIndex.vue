<template>
  <table class="table is-fullwidth is-striped is-hoverable is-narrow">
    <thead>
      <th>Artist</th>
      <th>Title</th>
      <th>Album</th>
      <th>Genre</th>
    </thead>

    <tbody v-for="(song, index) in songs" v-bind:key="index">
      <tr>
        <td>{{ song.artist }}</td>
        <td>{{ song.title }}</td>
        <td>{{ song.album }}</td>
        <td>{{ song.genre }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import musicData from "@/assets/list.json";
export default {
  data() {
    return {
      songs: musicData,
    };
  },
};
</script>

<style></style>
