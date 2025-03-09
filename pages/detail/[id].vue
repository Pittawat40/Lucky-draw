<template>
  <div class="panel">
    <div class="section">
      <span class="header">Channel</span>
      <div class="item" v-if="!isLoading">
        <div class="left">
          <img src="@/assets/images/poster-1.png" />
          <div class="detail">
            <div class="text">
              <span>{{ activityDetail.name }}</span>
              <span>The event was held on Sat, 22 Feb 2025 14 days ago</span>
              <span
                ><font-awesome icon="location-dot" /> {{ activityDetail.location }}</span
              >
            </div>
            <div class="status" >
              <span :class="[ activityDetail.flag_random ? 'text-success': 'text-yellow']">
                Status : {{ activityDetail.flag_random ? "Successfully completed" : "Waiting to start" }}
              </span>
              <Loading v-if="!activityDetail.flag_random" />
            </div>
          </div>
        </div>
        <div class="right">
          <span><font-awesome icon="user" /> 5,000</span>
          <div class="btn">
            <UButton v-if="activityDetail.flag_random" @click="viewList()">View announcement</UButton>
            <template v-if="userDetail.role && userDetail.role == 'admin'">
              <UButton @click="random()">Random</UButton>
              <UButton>Export</UButton>
            </template>
          </div>
        </div>
      </div>
    </div>

    <Activity />
    <LoadingAlpha ref="LoadingAlpha" />
    <ModalList ref="ModalList" :list="list" />
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      timer: null,
      isLoading: true,
      userDetail: {},
      activityDetail: {},
      list: []
    };
  },
  watch: {
    "$store.state.userDetail": function() {
      this.setUserDetail();
    }
  },
  mounted() {
    this.$refs.LoadingAlpha.show();
    this.setUserDetail();
    this.getDetail();
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      this.$refs.LoadingAlpha.hide();
    }, 500);
  },
  methods: {
    setUserDetail() {
      this.userDetail = JSON.parse(localStorage.getItem("userDetail"))
      if(!this.userDetail.email){
        this.$router.push({ path: `/` })
      }
    },
    async getDetail() {
      await this.$axios
        .get(`/activity/${this.$route.params.id}`)
        .then((res) => {
          this.isLoading = false
          if (res.data.result) {
            this.activityDetail = res.data.payload
            if (res.data.payload.userList) {
              this.list = this.list.length ? this.list : res.data.payload.userList
            }
          }
        })
        .catch((err) => {
          console.log("Error message => ", err);
        });
    },
    async random() {
      await this.$axios
        .get(`/random/${this.$route.params.id}`)
        .then((res) => {
          this.$refs.LoadingAlpha.show();
          if (res.data.result) {
            this.list = res.data.payload
            if (this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }

            this.timer = setTimeout(() => {
              this.$refs.LoadingAlpha.hide();
              this.$refs.ModalList.show();
              this.getDetail();
            }, 1000);
          }
        })
        .catch((err) => {
          console.log("Error message => ", err);
        });
    },
    viewList() {
      this.$refs.ModalList.show();
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  margin-top: 4rem;
  background: #e9eae9;

  .section {
    padding: 2rem 2rem 0rem 2rem;

    .header {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .item {
      margin-top: 1rem;
      cursor: pointer;
      padding: 2rem 2rem 2rem 0rem;
      border-radius: 0.4rem;
      border: none;
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
      background: #8c4faa;

      .left {
        display: flex;

        .detail {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .text {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            align-items: start;

            span:first-child {
              font-weight: bold;
              font-size: 1.2rem;
              text-transform: uppercase;
              margin-bottom: 0.5rem;
            }

            span {
              color: #fff;
              font-size: 1rem;
            }
          }

          .status {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            span {
              text-transform: uppercase;
            }
          }
        }
      }

      .right {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .btn {
          display: flex;
          width: max-content;
          gap: 0.5rem;
        }

        span {
          color: #fff;
          font-size: 1.5rem;
        }
      }
    }
  }
}

.text-success {
  color: #35e069;
}

.text-yellow {
  color: #d7ff36;
}

img {
  position: relative;
  object-fit: cover;
  aspect-ratio: 1;
  object-fit: scale-down;
  object-position: center center;
  max-height: 250px;
}

svg {
  margin-right: 0.2rem;
}

@media (max-width: 820px) {
  img {
    max-height: 200px !important;
  }
}

@media (max-width: 768px) {
  img {
    max-height: 180px !important;
  }
}

@media (max-width: 430px) {
  .section {
    padding: 2rem 1rem 1rem 1rem !important;
  }

  .item {
    padding: 2rem !important;
    flex-direction: column !important;
    gap: 1rem !important;

    .left {
      flex-direction: column !important;
      gap: 1rem !important;

      .detail {
        gap: 1rem !important;
      }
    }

    .right {
      align-items: flex-start !important;
      gap: 1rem !important;
    }
  }

  img {
    max-height: 300px !important;
  }
}
</style>
