<template>
  <div id="app">
    <h1>Small App</h1>
    <ul>
      <li>
        <router-link v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link v-if="!loggedIn" to="/login">Log in</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard
          {{loggedIn ? '' : ' -(authentication Required)'}}
        </router-link>
      </li>
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
    </ul>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  <v-card
          height="400"
          width="256"
          class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav >
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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
