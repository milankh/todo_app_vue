<template>
  <div id="app">
    <v-app>
    <h1>Small App</h1>
      <v-card
              class="mx-auto"
              min-width="300"
              max-width="300"
              tile
      >
    <v-list shaped>
      <v-list-item-group color="primary">
      <v-list-item>
        <router-link v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link v-if="!loggedIn" to="/login">Log in</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/about">About</router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/dashboard">Dashboard
          {{loggedIn ? '' : ' -(authentication Required)'}}
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/todos">Todos</router-link>
      </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-card>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
    </v-app>
  </div>
</template>

<script>
import auth from './auth';
export default {
  data() {
    return {
      loggedIn: auth.loggedIn(),
    };
  },
  created() {
    auth.onChange = (loggedIn) => {
      this.loggedIn = loggedIn;
    };
  },
};
</script>

<style>
  html, body {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   color: #2c3e50;
  }

  #app {
    padding: 0 20px;
  }

  ul {
    line-height: 1.5em;
    padding-left: 1.5em;
  }

  a {
    color: #7f8c8d;
    text-decoration: none;
  }

  a:hover {
    color: #4fc08d;
  }
</style>s
