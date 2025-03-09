<template>
  <UModal v-model="isOpen">
    <UCard class="modal">
      <div class="section">
        <span class="title">Login</span>
        <div class="list">
          <img src="@/assets/images/facebook.png" />
          <img src="@/assets/images/line.png" />
          <img src="@/assets/images/google.png" />
          <img src="@/assets/images/linkedin.png" />
        </div>
        <span>or use your account</span>
        <UInput class="input" type="email" placeholder="Email" />
        <UInput class="input" type="password" placeholder="Password" />
        <div class="btn">
          <UButton>Sign in</UButton>
          <UButton @click="isOpen = false">Close</UButton>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script>
export default {
  name: "ModalLogin",
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {},
  methods: {
    show() {
      this.isOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background: #fff !important;
}

::v-deep {
  .form-input {
    background: #fff !important;
    height: 3rem;
  }
}

.section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  .title {
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  
  span {
    font-size: 1rem;
  }
  
  .input {
    width: 75%;
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
}

img {
  display: inline-block;
  max-width: 40px;
  vertical-align: middle;
  width: 100%;
  background: none !important;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 50%;
}

img:hover {
  transform: translateY(-5px);
}

button {
  font-size: 0.8rem !important;
}
</style>
