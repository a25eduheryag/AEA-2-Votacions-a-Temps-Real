<script setup>
import { ref } from 'vue'

import {  useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const user = ref('')
const password = ref('')

const store = useAppStore()

function handleLogin() {
   if(user.value=="user" && password.value=="123"){
      store.setLoginInfo({loggedIn: true,username: "Edu"})
      route.push('/votacions')
    }
    else{
      alert("error en les credencials")
    }
}
</script>

<template>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-4 pa-4">
              <v-card-title class="text-h5 text-center font-weight-bold">
                Iniciar Sesión
              </v-card-title>

              <v-card-text>
                <v-form @submit.prevent="handleLogin">
                  <v-text-field
                    v-model="user"
                    label="Usuari"
                    type="text"
                    variant="outlined"
                    required
                    class="mb-3"
                  />

                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    required
                    class="mb-3"
                  />

                  <v-btn
                    color="primary"
                    block
                    size="large"
                    type="submit"
                  >
                    Entrar
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  
</template>

