<template>
    <div class="section">
      <span class="header">Review</span>
      <div class="review">
        <div class="box">
            <img src="@/assets/images/man.png" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                distinctio aspernatur possimus cupiditate doloremque iste neque
                ratione ea ad porroa.
            </p>
            <h3>John Doe</h3>
            <div class="stars">
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star-half-stroke" />
            </div>
        </div>
        <div class="box">
            <img src="@/assets/images/girl.png" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                distinctio aspernatur possimus cupiditate doloremque iste neque
                ratione ea ad porro.
            </p>
            <h3>Anna brown</h3>
            <div class="stars">
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star-half-stroke" />
            </div>
        </div>
        <div class="box">
            <img src="@/assets/images/gamer.png" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                distinctio aspernatur possimus cupiditate doloremque iste neque
                ratione ea ad porro.
            </p>
            <h3>Stew mol</h3>
            <div class="stars">
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star-half-stroke" />
            </div>
        </div>
        <div class="box">
            <img src="@/assets/images/girl.png" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                distinctio aspernatur possimus cupiditate doloremque iste neque
                ratione ea ad porro.
            </p>
            <h3>Anna brown</h3>
            <div class="stars">
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star-half-stroke" />
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
  
    .review {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
  
      .box {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 3rem 2rem;
        background: #fff;
        outline: 0.1rem solid rgba(0, 0, 0, 0.1);
        border-radius: 0.4rem;
        outline-offset: -1rem;
        text-align: center;
        box-shadow: 0 3px 8px rgb(175 168 168 / 24%);
        p {
            color: #000;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        h3 {
            font-weight: bold;
        }
      }
    }
  }
  
  @media (max-width: 430px) {
    .review {
        overflow: auto;
        max-height: 320px;
    }
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  </style>
  