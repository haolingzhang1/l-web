<template>
  <div class="app-container">
        <router-view />
        <!-- 天气预报 -->
        <iframe src="http://www.ttyyy.com/tianqi/tq.html" 
        width="160" height="60" frameborder="no" border="0" 
        marginwidth="0" marginheight="0" scrolling="no">
        </iframe> 
       
  </div>
</template>

<script>
export default {
  name: 'RoomStatus'
}
</script>
