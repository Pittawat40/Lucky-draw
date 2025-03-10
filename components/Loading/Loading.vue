<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  width: 200px;
  height: 22px;
  border-radius: 20px;
  color: #fff;
  border: 2px solid;
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: #d7ff36;
  animation: l6 2s infinite;
}

@keyframes l6 {
  100% {
    inset: 0;
  }
}

@media (max-width: 430px) {
  .loader{
    width: 100%;
  }
}

</style>
