<template>
  <footer class="footer pb-0 has-background-light">
    <!-- E aqui  não tava sabendo como setar uma cor qualquer na classe footer do Bulma, então deixei cinza -->
    <div class="columns">
      <div class="column is-one-third">
          <!--
          <p>
            <strong>MAPA DO SITE</strong>
          </p>

          <p>
            <router-link to="/sobre">
              Sobre
            </router-link>
          </p>

          <p>
            <router-link :to="{ path: '/adote-pet' }">
              Adotar um Pet
            </router-link>
          </p>-->
          <div class="content has-text-centered">
          <p>
            <strong>Links úteis</strong>
          </p>

          <p>
            <router-link to="/como-usar-o-site">
              Como usar o site
            </router-link>
          </p>

          <p>
            <router-link to="/adocao-responsavel">
              Adoção responsável
            </router-link>
          </p>

          <p>
            <router-link to="dicas-e-cuidados">
              Dicas e cuidados
            </router-link>
          </p>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="content has-text-centered">
          <p>
            <strong>CONTATO</strong>
          </p>
          <p>
            <b-icon icon="map-marker" size="is-small"> </b-icon>
            Endereço: R. Gomes Carneiro, 01 - Balsa, Pelotas
          </p>
          <p>
            <b-icon icon="phone-classic" size="is-small"> </b-icon>
            Telefone: +55(53)3262-3136
          </p>
          <p>
            <b-icon icon="email" size="is-small"> </b-icon>
            Email: adopetme@gmail.com
          </p>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="hero">
        <div class="container is-max-desktop hero-body animated">
          <h1 class="jt --debug">
            <span class="jt__row">
              <span class="jt__text">Adopetme</span>
            </span>
            <span class="jt__row jt__row--sibling" aria-hidden="true">
              <span class="jt__text">Adopetme</span>
            </span>
            <span class="jt__row jt__row--sibling" aria-hidden="true">
              <span class="jt__text">Adopetme</span>
            </span>
            <span class="jt__row jt__row--sibling" aria-hidden="true">
              <span class="jt__text">Adopetme</span>
            </span>
          </h1>
        </div>
          <div class="content has-text-centered buble">
            <span class="usechrome">Todos os direitos reservados ©</span>
          </div>
          </div>
      </div>
    </div>

    <!--<hr
      style="height:2px;border-width:0;color:gray;background-color:gray;margin:1.5rem 0 0.5rem 0.5rem"
    />
    <span class="logo-adopetme ">Adopetme</span>-->
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.jt {
  @include mobile{
    font-size:13.1vmin;
  }
  position: relative;
  font-size: 8.1vmin;
  font-family: 'Staatliches', sans-serif;
  text-transform: uppercase;
  font-display: swap;
  text-shadow: 0 0 10px $primary;
  margin-bottom: -50px;
}

.jt__row {
  display: block;
}
.jt__row:nth-child(1) {
  clip-path: polygon(-10% 75%, 110% 75%, 110% 110%, -10% 110%);
}
.jt__row:nth-child(2) {
  clip-path: polygon(-10% 50%, 110% 50%, 110% 75.3%, -10% 75.3%);
}
.jt__row:nth-child(3) {
  clip-path: polygon(-10% 25%, 110% 25%, 110% 50.3%, -10% 50.3%);
}
.jt__row:nth-child(4) {
  clip-path: polygon(-10% 0%, 110% 0%, 110% 25.3%, -10% 25.3%);
}

.jt__row.jt__row--sibling {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}

.jt__text {
  display: block;
  transform-origin: bottom left;
  animation: moveIn 2s 0s cubic-bezier(.36,0,.06,1) alternate infinite ;
}
.jt__row:nth-child(1) .jt__text {
  transform: translateY(-0.1em);
}
.jt__row:nth-child(2) .jt__text {
  transform: translateY(-0.3em) scaleY(1.1);
}
.jt__row:nth-child(3) .jt__text {
  transform: translateY(-0.5em) scaleY(1.2) ;
}
.jt__row:nth-child(4) .jt__text {
  transform: translateY(-0.7em) scaleY(1.3) ;
}
.jt__row:nth-child(5) .jt__text {
  transform: translateY(-0.9em) scaleY(1.4) ;
}
.jt__row:nth-child(6) .jt__text {
  transform: translateY(-1.1em) scaleY(1.5) ;
}

@keyframes moveIn {
  50%, 100% { 
    transform: translateY(0em)
  }
  0%   { 
  opacity: 0; 
  filter: blur(10px);
  
  }
  100% { 
  opacity: 1; 
  filter: blur(0px);
  }
}



.debug .jt__row:nth-child(even) {
  color: black;
  background: white;
}
.debug .jt__row:nth-child(odd) {
  color: white;
  background: black;
}

* { box-sizing: border-box }

.animated h1{
  color: $adopetme-logo-color;
}

.usechrome{
  font-size: 10px;
  color: rgb(78, 77, 77);
  font-family: helvetica, arial;
  position: relative;
  margin-top: -50px;
  text-align: center;
  left: 0;
}

</style>
