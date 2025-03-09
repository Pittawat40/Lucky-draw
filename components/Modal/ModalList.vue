<template>
  <UModal v-model="isOpen">
    <UCard class="modal">
      <div class="section">
        <span class="title">Congreat, List of lucky winners </span>
        <div class="list">
          <div class="detail">
            <span class="" v-for="(item, index) in list" v-bind:key="index"
              >{{ index + 1 }}. {{ item.email }}</span
            >
          </div>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script>
export default {
  name: "ModalList",
  props: {
    list: {
      require: false,
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {},
  methods: {
    show() {
      this.isOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background: #fff !important;
}

.section {
  width: 100%;
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  .title {
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #000 !important;
    color: #3cc62c;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: start;

    .detail {
      display: flex;
      flex-direction: column;
      align-items: start;

      span {
        padding-bottom: 0.5rem;
        font-size: 1rem;
        text-transform: uppercase !important;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
