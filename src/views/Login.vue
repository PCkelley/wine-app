<template lang='pug'>
  .login
    .box
      .columns
        .column.login-form
          h1.label Log in
          | Log in using the email and password you selected when signing up.
          br
          .columns
            .column
              b-input(
                type="email",
                v-model="userEmail",
                placeholder="Email",
                )
          .columns
            .column
              b-input(
                type="password",
                v-model="userPassword",
                placeholder="Password",
                password-reveal=""
                )
          .columns
            .column
              b-button(
                type="primary"
                expanded
                @click="loginUser"
                ) Log in
              br
              | Don't have a login? Sign up!
        .column.image-section
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      userEmail: '',
      userPassword: '',
    };
  },
  methods: {
    loginUser() {
      firebase.auth().signInWithEmailAndPassword(this.userEmail, this.userPassword)
        .then((user) => {
          this.getUser(user.user.uid);
        });
    },
    getUser(userId) {
      firebase.firestore().collection('users').doc(userId).get()
        .then((userDoc) => {
          console.log(userDoc);
          this.$router.push({ name: 'home' });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
  .login {
    background: url("../../public/login-bg-purple.jpg") no-repeat center center fixed;
    background-size: cover;
    padding-top: 10%;
    height: 100vh;
    width: 100vw;
  }
  .login .box {
    width: 50%;
    margin-left: auto;
    background-color: #cebdf7;
    margin-right: auto;
  }
  .login-form {
    background-color: white;
  }
  .image-section {
    background: url("../../public/login-bg.jpeg") no-repeat center center fixed;
    background-size: cover;
  }
  .button {
    background-color: #5A4789;
    color: white;
  }
</style>
