<template>
  <main>
   <div class="hero">
    <div class="container is-max-desktop hero-body">
      <div class="card">
        <div class="card-content">
          <div class="content">
           <h1>
           Login with Facebook <b-icon icon="facebook" class="ml-1" size="is-large"> </b-icon>
           </h1>
            <p class="content has-text-centered">Adopetme app extension for facebook</p>
            <b-field label="Email">
              <b-input
                type="email"
                placeholder="mark@zuckerberg.com"
		>
              </b-input>
            </b-field>
            <b-field label="Senha">
              <b-input
                type="email"
                placeholder="*******"
		>
              </b-input>
            </b-field>
            <b-button
                class="fb-button"
                >Login
            </b-button>
          </div>
        </div>
      </div>
    </div>
   </div>
  </main>  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 main{
        background-color:#3b5998;
	height: 100vh;
 }
 .fb-button{
   background-color: #3b5998;
   color:white;
 }
 .fb-button:hover{
   background-color: white;
   color: black
 }
</style>