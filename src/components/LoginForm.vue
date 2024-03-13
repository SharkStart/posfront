<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
</script>
<template>
    <form name="login-form" >
          <div class="mb-3">
            <label for="email">email: </label>
            <input id="email" type="text" />
          </div>
          <div class="mb-3">
            <label for="password">Password: </label>
            <input id="password" type="password" />
          </div>
          <button class="btn btn-outline-dark" type="submit">
            Login
          </button>
        </form>
</template>
