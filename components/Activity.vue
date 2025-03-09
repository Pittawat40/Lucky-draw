<template>
  <div class="section">
    <span class="header">Activity</span>
    <div class="list">
      <div class="item" v-for="(item, index) in 8" v-bind:key="index">
        <div class="left">
          <div class="text">
            <span>Concert Name</span>
            <span><font-awesome icon="location-dot" /> Bangkok, Thailand</span>
          </div>
          <UButton @click="$router.push({ path: `/detail/${index}` })"
            >Join Now</UButton
          >
        </div>
        <div class="right">
          <span>Total</span>
          <span>5,000</span>
        </div>
      </div>
    </div>
  </div>
</template>

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
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
    margin-top: 1rem;

    .item {
      cursor: pointer;
      padding: 1rem;
      border-radius: 0.4rem;
      border: none;
      width: 20rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
      background: #fff;

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
            font-size: 0.8rem;
          }
        }
      }

      .right {
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

@media (max-width: 820px) {
  .item {
    width: 22.5rem !important;
  }
}

@media (max-width: 768px) {
  .item {
    width: 21rem !important;
  }
}

@media (max-width: 430px) {
  .list {
    max-height: 320px;
    overflow: auto;
  }

  .item {
    width: 24rem !important;
  }
}
</style>
