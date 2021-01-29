<template>
  <div class="app-container">
    <router-view />
    <!-- 天气预报 -->
    <iframe
      src="http://i.tianqi.com/index.php?c=code&id=34&icon=1&num=3"
      width="280"
      height="25"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      allowtransparency="true"
    />
  </div>
</template>

<script>
export default {
  name: 'RoomStatus'
}
</script>
