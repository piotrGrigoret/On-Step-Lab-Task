<template>
  <div class="root">
  
    <div class="header">
      
      <div class="logo">
          LOGO
      </div>
      <div class="inpuBox">
        <div class="inputOutput">
          <div>HEALTHY PETS</div>
          <input placeholder="Search for ..." type="text">
        </div>
        <img src="./assets/p.jpg" alt="">
      </div>
      
      <div class="signIn">
        SIGN IN
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer">
      <div class="footerContent">
        <div class="logo">
            LOGO
        </div>
        
        <div class="menu">
          <div><a style="text-decoration: none; color: black;" href="/">HOME</a></div>
          <div><a style="text-decoration: none; color: black;" href="#/shopPage">SHOP</a> </div>
          <div>MEDIA</div>
          <div>CONTACT US</div>
          <div>SIGN IN</div>
          
        </div>
      </div>
      </div>
  </div>

</template>

<script>
  export default{
    data() {
    return {
      curentUrl:window.location.href, 
    };
  },
  mounted() {
    console.log(this.currentUrl); // Выводим текущий URL в консоль после монтирования компонента
  },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=K2D:wght@700&display=swap');

.root{
    font-family: K2D;
  }
  .header{
    margin: 0 auto;
    width: 1350px;
    display: grid;
    grid-template-columns: 14% 76% 10%;
  } 
  .logo{
    width: 238px;
    height: 125px;
    margin: 48px 0 0 0px;
    font-size: 50px;
    line-height: 65px;
    font-weight: 700;
    
  }
  .inpuBox{
    /* border: solid; */
    display: grid;
    grid-template-columns: 42% auto;
  }
  .inputOutput{
    width: 354px;
    height: 26px;
    margin: 63px;
    border-radius: 4px;
    border-color: #CD5B25;
    color: #CD5B25;
    border: solid 2px;
    display: flex;
    justify-content:space-around;
    line-height: 35px;
  }
  .inputOutput div{
    font-weight: 700;
    font-style: italic;
    word-wrap: break-word;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .inputOutput input{
    border: none;
    font-family: K2D;
    font-size: 12px;
  }
  .inputOutput input:focus{
    border: none;
    outline: none; /* Убираем обводку при фокусе */
   
  }
  .inputOutput input::placeholder {
    color: #CD5B25;
    font-size: 10.03px;
    font-weight: 700;
    word-wrap: break-word;
    font-family: K2D;
    opacity: 0.6;
}

  .inpuBox img{
    width: 38px;
    margin-top: 64px;
    /* margin-left: 10px; */
    cursor: pointer;
  }
  .signIn{
    font-weight: 500;
    font-size: 24px;
    cursor: pointer;
    line-height: 31px;
    margin: 58px 0 0 0px;
  }

  .content{
    margin: 0 auto;
    width: 1350px;

  }
  .footer{
    width: 100%;
    background: #CD5B25;
    border-radius: 0px 0px 10px 10px;
  }
  .footerContent{
    margin: 0 auto;
    width: 1350px;
    
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    line-height: 80px;
  }
  .menu div{ 
    cursor: pointer;
  }

</style>
