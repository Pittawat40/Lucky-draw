<template>
  <div class="section">
    <div class="left" @click="$router.push({ path: `/` })">
      <span>Lucky</span>
      <span>Draw</span>
    </div>
    <font-awesome class="mobile" id="menu-btn" icon="bars" />
    <div class="right">
      <font-awesome icon="magnifying-glass" />
      <a @click="openModal()">Login</a>
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
      <a href="#"> <font-awesome icon="user" /> Name </a>
      <a href="#">Logout</a>
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.toggleMenu();
  },
  methods: {
    openModal() {
      this.$refs.ModalLogin.show();
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
  padding: 1.5rem 3rem;
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

svg {
  margin-right: 0.2rem;
}
</style>
