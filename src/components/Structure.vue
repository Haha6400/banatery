<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
    <div style = "padding: 5%;">
        <div class="greetings">
            <h3 style="padding-bottom: 5%;">BÓC TÁCH LÕI PIN</h3>
            <div class="container-column">
                <img alt="Battery core" class="image" src="./image/pin.png" width="35%"/>
                <img class="image" src="./image/right.png" width="10%"/>
                <div>
                    <div class="container-row">
                        <h2>Trước</h2>
                        <section style="padding-top: 50%; padding-bottom: 15%;">
                        </section>
                        <img alt="Battery core" class="image" src="./image/THAN CHÌ.png" width="50%"/>
                        <h5>Than chì </h5>
                    </div>
                </div>
                <div>
                    <div class="container-row">
                        <h2>Sau</h2>
                        <img alt="Battery core" class="image" src="./image/Vỏ chuối.png" width="50%"/>
                        <img class="image" src="./image/down.png" width="30%"/>
                        <img alt="Battery core" class="image" src="./image/THAN HOẠT TÍNH.png" width="50%"/>
                        <h5>Than hoạt tính </h5>
                    </div>
                </div>
            </div>
        </div>
        <h4>*than hoạt tính 
            <span style="font-weight: bold !important; color: var(--text-3);">Banatery </span>làm chất điện cực của Pin Lithium </h4>
    </div>
</template>

<style scoped>
  .image {
    align-content: end;
  }
  .container-row {

  display: flex;
  flex-direction: column; /* Sắp xếp các phần tử theo chiều dọc */
  align-items: center; /* Căn giữa các phần tử theo chiều ngang */
}
.container-column {
  display: flex;
  flex-direction: row; /* Sắp xếp các phần tử theo chiều ngang */
  justify-content: space-around; /* Căn chỉnh các phần tử đều nhau */
  align-items: center; /* Căn chỉnh các phần tử theo chiều dọc */
  gap: 20px; /* Khoảng cách giữa các component */
}


  .left-side {
    padding-right: 20px;
  }

  .right-side {
    padding-right: 20px;
  }
grid-class {
    display: grid;
    grid-template-columns: 1fr 1fr; 
}
h3 {
  font-size: 26px;
  font-weight: 650;
text-align: center !important;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  color: var(--color-text-primary);
}
h2 {
    font-size: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    margin-top: 0.4rem;
    color: #000;
}
h4 {
    font-size: 20px;
    margin-bottom: 0.4rem;
    font-style: italic;
    margin-top: 0.4rem;
    color: #000;
    text-align: center !important;
}

h5 {
    font-size: 20px;
    margin-bottom: 0.4rem;
    margin-top: 0.4rem;
    color: #000;
    text-align: center !important;
}


</style>