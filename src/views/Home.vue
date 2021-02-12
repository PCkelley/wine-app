<template lang='pug'>
  .home
    button.button(
      @click="addNewWine"
      ) Add New
    button.button(
      @click="addNewWine"
      ) View Profile
    b-table(
      :data="wineList"
      :columns="columns"
      :bordered="true"
      :striped="true"
      :hoverable="true"
      )
</template>
<script>
import firebase from 'firebase/app';

export default {
  name: 'Home',
  data() {
    return {
      wineList: [],
      flavorList: [],
      columns: [
        { field: 'name', label: 'Name' },
        { field: 'vineyard', label: 'Vineyard' },
        { field: 'region', label: 'Region' },
        { field: 'year', label: 'Year' },
      ],
    };
  },
  mounted() {
    this.getWineList();
  },
  methods: {
    getWineList() {
      firebase.firestore().collection('wine').get()
        .then((d) => {
          this.wineList = d.docs.map((doc) => doc.data());
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addNewWine() {
      this.$router.push({ name: 'add-wine-page' });
    },
  },
};
</script>
<style scoped>
  .home {
    padding: 5%;
  }
</style>
