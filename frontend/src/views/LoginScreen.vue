<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleSubmit() {
  // Connect this form to the app's authentication flow.
}
</script>

<template>
  <main class="login-screen">
    <form class="login-form" @submit.prevent="handleSubmit">
      <h1>Inicia sessió</h1>
      <label for="email">Correu electrònic</label>
      <input id="email" v-model="email" type="email" autocomplete="email" required />

      <label for="password">Contrasenya</label>
      <input id="password" v-model="password" type="password" autocomplete="current-password" required />

      <button type="submit">Entrar</button>
    </form>
  </main>
</template>

<style scoped>
.login-screen {
  --bg: #15171c;
  --card: #1d2026;
  --field: #14161a;
  --border: #2d313a;
  --border-hover: #3f4551;
  --text: #e4e6eb;
  --muted: #9097a3;
  --accent: #4a78d4;
  --accent-hover: #5b88e3;

  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
}

.login-form {
  display: grid;
  gap: 0.5rem;
  width: min(100%, 24rem);
  padding: 2.25rem 2rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--card);
}

h1 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

label {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--muted);
}

input,
button {
  box-sizing: border-box;
  width: 100%;
  padding: 0.75rem 0.875rem;
  font: inherit;
}

input {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--field);
  color: var(--text);
}

input:hover {
  border-color: var(--border-hover);
}

input:focus {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
  border-color: var(--accent);
}

button {
  margin-top: 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  background: var(--accent);
  color: white;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background: var(--accent-hover);
}

button:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 2px;
}
</style>