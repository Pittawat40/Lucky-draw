<template>
    <UModal v-model="isOpen">
        <UCard class="modal">
          <div class="detail">
            <img  src="@/assets/images/cancel.png"/>
            <span class="text" v-if="text">{{ text }}</span>
          </div>
        </UCard>
    </UModal>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        required: false,
        type: String,
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      show() {
        this.isOpen = true;
        setTimeout(() => {
          this.hide();
        }, 2000);
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

  .detail{
    height: 100%;
    min-height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .text {
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }
  }

  img{
    width: 70px;
    height: 100%;
  }
  </style>
  