<template>
  <section class="footer-todo">
    <slot>
      <p>ToDo List MIT License</p>
    </slot>
  </section>
</template>
<style lang="less">
.footer-todo {
   position:fixed;
   left:0px;
   bottom:0px;
   width:100%;
   text-align: center;
   padding: 10px 0;
   background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
 }
</style>
