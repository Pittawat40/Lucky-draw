<template>
  <div class="section">
    <div class="left" @click="$router.push({ path: `/` })">
      <span>Lucky</span>
      <span>Draw</span>
    </div>
    <font-awesome class="mobile" id="menu-btn" icon="bars" />
    <div class="right">
      <div class="serach">
        <UInput class="input" type="text" placeholder="Search" v-model="search" />
        <font-awesome icon="magnifying-glass" />
      </div>
      <a v-if="!userDetail.name" @click="handleLogin()">Login</a>
      <template v-else>
        <a class="checkout"> <font-awesome icon="user" /> {{ userDetail.name }} </a>
        <font-awesome icon="right-from-bracket" @click="handleLogout()" />
      </template>
      <div class="lang">
        <a href="">
          <img src="@/assets/images/thailand.svg" />
        </a>
        <a href="">
          <img src="@/assets/images/eng.png" />
        </a>
      </div>
    </div>
    <nav class="navbar">
      <a v-if="!userDetail.name" @click="handleLogin()">Login</a>
      <template v-else>
        <a class="checkout"> <font-awesome icon="user" /> {{ userDetail.name }} </a>
        <a @click="handleLogout()">Logout</a>
      </template>
      <div class="lang">
        <a href="">
          <img src="@/assets/images/thailand.svg" />
        </a>
        <a href="">
          <img src="@/assets/images/eng.png" />
        </a>
      </div>
    </nav>
    <ModalLogin ref="ModalLogin" />
    <LoadingAlpha ref="LoadingAlpha" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      isOpen: false,
      timer: null,
      userDetail: {}
    };
  },
  watch: {
    "$store.state.userDetail": function() {
      this.setUserDetail();
      const navbar = document.querySelector(".navbar");
      navbar.classList.remove("active");
    }
  },
  mounted() {
    this.setUserDetail();
    this.toggleMenu();
  },
  methods: {
    setUserDetail() {
      this.userDetail = JSON.parse(localStorage.getItem("userDetail"))
    },
    handleLogin() {
      this.$refs.ModalLogin.resetForm();
      this.$refs.ModalLogin.show();
    },
    async handleLogout() {
      await this.$axios
        .post(`/logout/${this.userDetail.id}`)
        .then((res) => {
          this.$refs.LoadingAlpha.show();
          if (res.data.result) {
            this.$store.dispatch("updateUserDetail", {});
            if (this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }
            this.timer = setTimeout(() => {
              this.$refs.LoadingAlpha.hide();
            }, 500);
          }
        })
        .catch((err) => {
          console.log("Error message => ", err);
        });
    },
    toggleMenu() {
      const navbar = document.querySelector(".navbar");
      document.querySelector("#menu-btn").onclick = () => {
        navbar.classList.toggle("active");
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: none;
}

::v-deep {
  .form-input {
    background: #fff !important;
    position: relative;
    top: 0;
    left: 0;
    width: 180px;
    outline: none;
    color: #000;
    transition: 0.5s ease-in-out;
  }

  .form-input:focus {
    width: 250px;
    top: 0;
    right: 100%;
  }
}

.lang {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: 0rem 1rem;
  }

  a:first-child {
    border-right: 1px solid;
  }
}

.section {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  background: #fff;
  z-index: 1000;

  span,
  a {
    text-transform: uppercase;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
  }

  .left {
    display: flex;
    gap: 0.5rem;
    background: transparent;
    span {
      font-size: 1.5rem !important;
      font-weight: bold;
    }

    span:first-child {
      color: #8d4fab;
    }
  }

  .mobile {
    display: none;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: transparent;

    .serach {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }
}

img {
  height: 25px;
  width: 25px;
}

svg {
  color: #000;
  background: none !important;
  cursor: pointer;
}

@media (max-width: 820px) {
  .section {
    padding: 1.5rem;
  }
}

@media (max-width: 430px) {
  .navbar {
    position: fixed;
    top: 8%;
    right: -110%;
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;

    a {
      padding: 1rem 2rem;
    }
  }

  .navbar.active {
    right: 0rem;
    transition: 0.2s;
  }

  .section {
    padding: 1.5rem 2rem;
  }

  .right {
    display: none !important;
  }

  .mobile {
    display: block !important;
  }

  .lang {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    a {
      padding: 0 1rem !important;
    }
  }
}

@media (max-width: 390px) {
  .navbar {
    top: 10%;
  }
}


svg {
  margin: 0rem 0.2rem;
}

</style>
