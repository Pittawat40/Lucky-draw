<template>
  <div class="panel">
    <div class="section">
      <span class="header">Channel</span>
      <div class="item">
        <div class="left">
          <img src="@/assets/images/poster-1.png" />
          <div class="detail">
            <div class="text">
              <span>Concert Name</span>
              <span>The event was held on Sat, 22 Feb 2025 14 days ago</span>
              <span
                ><font-awesome icon="location-dot" /> Bangkok, Thailand</span
              >
            </div>
            <div class="status">
              <span>Status : Waiting to start</span>
              <Loading />
            </div>
          </div>
        </div>
        <div class="right">
          <span><font-awesome icon="user" /> 5,000</span>
          <div class="btn">
            <UButton>View announcement</UButton>
            <UButton>Random</UButton>
            <UButton>Export</UButton>
          </div>
        </div>
      </div>
    </div>

    <Activity />
  </div>
</template>

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
              color: #d7ff36;
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

@media (max-width: 430px) {
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

@media (max-width: 390px) {
  .section {
    padding: 2rem 1rem 1rem 1rem !important;
  }
}
</style>
