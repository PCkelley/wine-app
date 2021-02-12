<template lang='pug'>
  .add-wine-page
    h1.label Add New Wine
    .box
      .columns
        .column
          h1.label {{ name }}
          img(:src="require( `../../public/${color}.png`)" width="300px")
        .column
          .columns
            .column
              b-field(label="Name")
              b-input(placeholder="Name" v-model="name")
            .column
              b-field(label="Vineyard")
              b-input(placeholder="Vineyard" v-model="vineyard")
          .columns
            .column
              b-field(label="Varietal")
              b-input(placeholder="Varietal" v-model="varietal")
            .column
              b-field(label="Region")
              b-select(placeholder="Region" v-model="region" expanded)
                option(
                  v-for="option in regionOptions"
                  :value="option"
                  ) {{ option }}
          .columns
            .column
              b-field(label="Year")
              b-input(placeholder="Year" v-model="year")
            .column
              b-field(label="Color")
              b-select(placeholder="Color" v-model="color" expanded)
                option(
                  v-for="option in colorOptions"
                  :value="option"
                  ) {{ option }}
          .columns
            .column
            .column.is-narrow
              button.button.purple-bg(@click="saveWine") Save Wine
              button.button.purple-bg(@click="saveWine") Save and Review
</template>
<script>
import firebase from 'firebase/app';
import WineService from '@/services/wineService';

export default {
  name: 'AddWinePage',
  data() {
    return {
      name: '',
      vineyard: '',
      varietal: '',
      region: '',
      year: '',
      color: 'Red',
      colorOptions: [],
      regionOptions: [],
      flavorList: [],
    };
  },
  mounted() {
    this.flavorList = WineService.listFlavors();
    this.colorOptions = WineService.listColors();
    this.regionOptions = WineService.listRegions();
  },
  methods: {
    saveWine() {
      const newWine = {
        name: this.name,
        vineyard: this.vineyard,
        region: this.region,
        varietal: [this.varietal],
        year: this.year,
        color: this.color,
      };
      const newDoc = this.name.toLowerCase().replace(/\s/g, '');
      firebase.firestore().collection('wine').doc(newDoc).set(newWine)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
  .add-wine-page {
    padding: 5%;
  }
</style>
