<template>
  <div class="section">
    <span class="header">Activity</span>
    <div class="list">
      <div class="item" v-for="(item, index) in list" v-bind:key="index">
        <div class="left">
          <div class="text">
            <span>{{ item.name }}</span>
            <span><font-awesome icon="location-dot" /> {{ item.location }}</span>
          </div>
          <UButton @click="handleRoute(item.id)"
            >Join Now</UButton
          >
        </div>
        <div class="right">
          <span>Total</span>
          <span>5,000</span>
        </div>
      </div>
    </div>
    <ModalLogin ref="ModalLogin" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetail: {},
      list: []
    };
  },
  watch: {
    "$store.state.userDetail": function() {
      this.setUserDetail();
    }
  },
  mounted() {
    this.getList();
    this.setUserDetail();
  },
  methods: {
    async getList() {
      await this.$axios
        .get(`/activity`)
        .then((res) => {
          if (res.data.result) {
            this.list = res.data.payload
          }
        })
        .catch((err) => {
          console.log("Error message => ", err);
        });
    },
    setUserDetail() {
      this.userDetail = JSON.parse(localStorage.getItem("userDetail"))
    },
    handleRoute(id) {
      if(!this.userDetail.name){
        this.$refs.ModalLogin.show();
      } else {
        this.$router.push({ path: `/detail/${id}` })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 2rem !important;
  background: #e9eae9;

  .header {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;

    .item {
      cursor: pointer;
      padding: 1rem;
      border-radius: 0.4rem;
      border: none;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
      background: #fff;
      gap: 0.5rem;

      .left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: start;

        .text {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          align-items: start;

          span:first-child {
            font-weight: bold;
            font-size: 1rem;
            text-transform: uppercase;
          }

          span {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.8rem;
          }
        }
      }

      .right {
        width: 100px;
        background: #fff;
        border: 1px solid #8d4fab;
        border-radius: 0.2rem;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        span {
          background: transparent;
          color: #000;
        }

        span:first-child {
          text-transform: uppercase;
          border-bottom: 1px solid #000 !important;
          padding-bottom: 0.5rem;
        }
      }
    }
  }
}

button {
  transition: 0.2s;
}

button:hover {
  transform: translateX(5px);
}

svg {
  margin-right: 0.2rem;
}

@media (max-width: 430px) {
  .list {
    max-height: 300px;
    overflow: auto;
  }

  .item {
    width: 24rem !important;
  }
}

@media (max-width: 390px) {
  .item {
    width: 22rem !important;
  }
}

@media (max-width: 375px) {
  .item {
    width: 21rem !important;
  }
}

@media (max-width: 360px) {
  .item {
    width: 20rem !important;
  }
}
</style>
