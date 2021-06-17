<template>
  <footer class="footer pb-0 has-background-light">
    <!-- E aqui  não tava sabendo como setar uma cor qualquer na classe footer do Bulma, então deixei cinza -->
    <div class="columns">
      <div class="column is-one-third">
        <div class="content has-text-centered">
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
            Telefone: +55(53)99999-9999
          </p>
          <p>
            <b-icon icon="email" size="is-small"> </b-icon>
            Email: AdoPetMe@adopet.me
          </p>
        </div>
      </div>

      <div class="column is-one-third">
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
    </div>

    <hr
      style="height:2px;border-width:0;color:gray;background-color:gray;margin:1.5rem 0 0.5rem 0.5rem"
    />
    <span class="logo-adopetme ">Adopetme</span>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
