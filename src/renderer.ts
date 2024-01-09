import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const routes = [{ path: '/', name: 'home', component: App }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const vuetify = createVuetify({
  // ... your configuration
});

// TODO - don't hardcode
const auth0 = createAuth0({
  domain: 'gadfly-dev.us.auth0.com',
  clientId: 'tZoRcemtkAokAwfo0mMUyHgeJVbd73G4',
  authorizationParams: {
    redirect_uri: 'http://localhost/callback',
    scope: 'openid email profile offline_access',
    prompt: 'select_account',
  },
  cacheLocation: 'localstorage',
  useRefreshTokens: true,
});

createApp({}).use(router).use(auth0).use(vuetify).mount('#app');
