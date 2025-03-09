<template>
  <UModal v-model="isOpen">
    <UCard class="modal">
      <div class="section" @keyup.enter="handleLogin">
        <span class="title">Login</span>
        <div class="list">
          <img src="@/assets/images/facebook.png" />
          <img src="@/assets/images/line.png" />
          <img src="@/assets/images/google.png" />
          <img src="@/assets/images/linkedin.png" />
        </div>
        <span>or use your account</span>
        <UInput
          class="input"
          type="text"
          placeholder="Username"
          v-model="form.name"
        />
        <UInput
          class="input"
          type="password"
          placeholder="Password"
          v-model="form.password"
        />
        <div class="btn">
          <UButton @click="handleLogin">Sign in</UButton>
          <UButton @click="isOpen = false">Close</UButton>
        </div>
      </div>
    </UCard>
  </UModal>
  <LoadingAlpha ref="LoadingAlpha" />
</template>

<script>
import { useStore } from "vuex";
const store = useStore();
export default {
  name: "ModalLogin",
  data() {
    return {
      isOpen: false,
      timer: null,
      form: {},
    };
  },
  mounted() {
    this.resetForm();
  },
  methods: {
    async handleLogin() {
      await this.$axios
        .post(`/login`, this.form)
        .then((res) => {
          this.$refs.LoadingAlpha.show();
          if (res.data.result) {
            this.$store.dispatch("updateUserDetail", res.data.payload);
            if (this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }
            this.timer = setTimeout(() => {
              this.hide();
              this.$refs.LoadingAlpha.hide();
            }, 500);
          }
        })
        .catch((err) => {
          console.log("Error message => ", err);
        });
    },
    resetForm() {
      this.form = {};
    },
    show() {
      this.isOpen = true;
    },
    hide() {
      this.isOpen = false;
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
    color: #000;
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
