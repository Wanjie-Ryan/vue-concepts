<template>
  <p>Hello, {{ firstName }} {{ lastName }} {{ nickname }}</p>
</template>

<script>
export default {
  // props:['firstName', 'lastName', 'nickname']
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    nickname: {
      type: String,
    },
  },
};
</script>
