<template>
  <div class="section">
    <div class="left">
      <div class="text">
        <span>Lucky</span>
        <span>Draw</span>
      </div>
      <div class="list">
        <img src="@/assets/images/google-play.png" />
        <img src="@/assets/images/app-store.png" />
      </div>
    </div>
    <div class="right">
      <span>Follow Us</span>
      <div class="list">
        <img src="@/assets/images/facebook.png" />
        <img src="@/assets/images/line.png" />
        <img src="@/assets/images/instagram.png" />
        <img src="@/assets/images/youtube.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
svg {
  background: none !important;
}

.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background: #fff;
  z-index: 1000;

  span {
    text-transform: uppercase;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: transparent;

    .text {
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

    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background: none !important;
    }

    img {
      display: inline-block;
      max-width: 150px;
      vertical-align: middle;
      width: 100%;
      background: none !important;
      cursor: pointer;
      border-radius: 0.5rem;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
    background: transparent;

    span {
      font-weight: bold;
    }

    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background: none !important;
    }

    img {
      display: inline-block;
      max-width: 40px;
      vertical-align: middle;
      width: 100%;
      background: none !important;
      cursor: pointer;
      transition: 0.2s;
    }

    img:hover {
      transform: translateY(-5px);
    }
  }
}

@media (max-width: 430px) {
  .section {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 1rem;
  }
}
</style>
