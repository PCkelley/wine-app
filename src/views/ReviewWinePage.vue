<template lang='pug'>
  .add-wine-page
    .box
      .columns
        .column
          h1.label name
          img(:src="require( `../../public/${color}.png`)" width="300px")
        .column
          .columns
            .column
              b-field(label='Nose')
              b-taginput(
                v-model='nose'
                :data='flavorList'
                autocomplete=''
                :allow-new='true'
                :open-on-focus='true'
                field='nose'
                @typing='getFilteredTags'
                )
          .columns
            .column
              b-field(label='Taste')
              b-taginput(
                v-model='taste'
                :data='flavorList'
                autocomplete=''
                :allow-new='true'
                :open-on-focus='true'
                field='taste'
                @typing='getFilteredTags'
                )
          .columns
            .column
              b-field(label='Finish')
              b-taginput(
                v-model='finish'
                :data='flavorList'
                autocomplete=''
                :allow-new='true'
                :open-on-focus='true'
                field='finish'
                @typing='getFilteredTags'
                )
          .columns
            .column
              b-field(label="Review")
              b-input(
                maxlength="500"
                type="textarea"
                placeholder="Review"
                v-model="review"
                )
          .columns
            .column
              b-field(label="Score")
                b-slider(v-model="score" :custom-formatter="val => val + '/100'")
          .columns
            .column
            .column.is-narrow
              button.button.purple-bg(@click="saveWineReview") Save Review
</template>
<script>
import firebase from 'firebase/app';
import WineService from '@/services/wineService';

export default {
  name: 'ReviewWinePage',
  data() {
    return {
      nose: [],
      flavor: [],
      finish: [],
      review: '',
      score: 0,
      flavorList: [],
      color: 'Red',
    };
  },
  mounted() {
    this.flavorList = WineService.listFlavors();
  },
  methods: {
    saveWineReview() {
      const newReview = {
        wineId: 'add here',
        userId: 'add here',
        userName: '',
        nose: this.nose,
        flavor: this.flavor,
        finish: this.finish,
        review: this.review,
        score: this.score,
      };
      const newDoc = this.name.toLowerCase().replace(/\s/g, '');
      // figure out how to generate
      firebase.firestore().collection('wine').doc(newDoc).set(newReview)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getFilteredTags(text) {
      // eslint-disable-next-line
      this.flavorList = this.flavorList.filter((option) => option.toString().toLowerCase().indexOf(text.toLowerCase()) >= 0);
    },
  },
};
</script>
<style scoped>
  .add-wine-page {
    padding: 5%;
  }
</style>
