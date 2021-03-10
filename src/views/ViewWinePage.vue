<template lang='pug'>
  .add-wine-page
    .box
      .columns
        .column
          h1.label {{ wineDetails.name }}
          | {{ wineDetails.vineyard }} , {{ wineDetails.region }}
          label.label Score
              | {{ finalScore }}
        .column
          .columns
            .column
              .box
                label.label Nose
                VueApexCharts(
                  width="300"
                  type="pie"
                  :series="series"
                  :options="noseOptions"
                  )
          .columns
            .column
              .box
                label.label Taste
                VueApexCharts(
                  width="300"
                  type="pie"
                  :series="series"
                  :options="noseOptions"
                  )
          .columns
            .column
              .box
                label.label Finish
                VueApexCharts(
                  width="300"
                  type="pie"
                  :theme="theme"
                  :series="series"
                  :options="noseOptions"
                  )
</template>
<script>
import firebase from 'firebase/app';
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ViewWinePage',
  components: {
    VueApexCharts,
  },
  data() {
    return {
      options: {},
      wineDetails: {},
      wineReviews: [],
    };
  },
  mounted() {
    this.getWineData();
    this.getWineReviews();
  },
  computed: {
    theme() {
      return { palette: 'palette3' };
    },
    series() {
      return [44, 55, 41, 17];
    },
    noseList() {
      const arrayList = this.wineReviews.map((item) => item.nose);
      return arrayList.flat();
    },
    noseOptions() {
      return {
        series: [2, 1, 1, 3],
        labels: this.noseList,
        theme: {
          monochrome: {
            enabled: true,
            color: '#7c4494',
            shadeTo: 'light',
            shadeIntensity: 0.90,
          },
        },
      };
    },
    tasteList() {
      const arrayList = this.wineReviews.map((item) => item.taste);
      return arrayList.flat();
    },
    finishList() {
      const arrayList = this.wineReviews.map((item) => item.finish);
      return arrayList.flat();
    },
    finalScore() {
      return this.wineReviews.map((item) => item.score);
    },
  },
  methods: {
    getWineData() {
      firebase.firestore().collection('wine').doc('beringerprivatereservechardonnay').get()
        .then((data) => {
          this.wineDetails = data.data();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getWineReviews() {
      firebase.firestore().collection('reviews').doc('beringerprivatereservechardonnay').collection('reviews')
        .get()
        .then((d) => {
          this.wineReviews = d.docs.map((doc) => doc.data());
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
