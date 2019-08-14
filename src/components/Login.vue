<template>
  <v-row>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first
    </p>
    <v-form @submit.prevent="login">
      <v-label for=""><v-text-field v-model="email" placeholder="email"></v-text-field></v-label>
      <v-label for="">
        <v-text-field v-model="pass" placeholder="password" type="password"></v-text-field>
      </v-label>
      <v-btn small type="submit">Login</v-btn>
      <p v-if="error" class="error">Bad login Information</p>
    </v-form>
  </div>
  </v-row>
</template>

<script>
import auth from '../auth';

export default {
  data() {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false,
    };
  },
  methods: {
    login() {
      auth.login(this.email, this.pass, (loggedIn) => {
        if (!loggedIn) {
          this.error = true;
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      });
    },
  },
};

</script>

<style>
  .error {
    color: red;
  }
</style>
