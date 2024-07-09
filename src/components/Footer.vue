
<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="content">
        <img alt="Battery logo" class="logo" onclick='window.open("https://www.facebook.com/banatery?mibextid=LQQJ4d", "_blank");' src="@/assets/team-logo.png" width="40%"/>
      <p class="text-custom-1" >Dự án phát triển pin Lithium từ vỏ chuối</p>
      <p class="text-custom-2" >Năng lượng xanh đến từ tương lai!</p>
    </div>
    <div class="information" style="text-align: start !important; text-justify: end !important;">
    <p style="font-weight: 650;"> Contact us: </p>
                <p> + Hotline: 0386 813 593 (Ms. Huyền Trang)</p>
          <p onclick='window.open("https://www.facebook.com/banatery?mibextid=LQQJ4d", "_blank");'> + Facebook: <i>Banatery</i></p>
          <p> + Email: banateryandanh@gmail.com</p>
      </div>
  </div>
</template>

<style scoped>
.text-custom-1{
    font-weight: 600;
  font-size: 24px;
  position: relative;
}
.text-custom-2{
    font-weight: 500;
  font-size: 24px;
  font-style: italic;
  position: relative;
}
.information {
    display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 24px;
}
.footer {
  position: relative;
  min-height: 200px; /* Đảm bảo footer có độ cao tối thiểu */
  background-color:  var(--green-6); 
  color: var(--text-primary);
  text-align: center;
  padding: 20px 0 40px 0;
  display: grid;
    grid-template-columns: 1fr 1fr; /* Chia đôi trang thành hai cột bằng nhau */
    gap: 20px; /* Khoảng cách giữa hai cột */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>

