<template>
  <main>
    <section class="container">
      <div class="columns mx-0">
        <div class="column is-three-quarters">
          <h1 class="is-size-3 is-uppercase has-text-weight-bold mt-4">
            Intuito do Projeto
          </h1>
          <p>
            Tendo em vista a baixa disponibilidade de soluções, relacionada à
            adoção de pets, disponíveis no mercado, que sejam confiáveis e de
            fácil interação com o usuário, propomos um projeto diferente, que
            une o melhor da experiência UI com o desempenho de uma ferramenta
            móvel.
          </p>
          <br />
          <p>
            Pensando nisso, preparamos uma plataforma completa a fim de
            facilitar o processo de adoção de animais, os recursos e documentos
            necessários estão disponíveis na nossa página de registro. Contudo,
            iremos avisar com antecedência, temos um rigoroso método de rating
            para Adotantes e Protetores, por isso disponilizamos um conteúdo
            vocacional para que você esteja realmente ciente da adoção do seu
            peludinho. ❤️
          </p>
          <h1 class="is-size-5 is-uppercase has-text-weight-bold mt-4">
            Por que adotar conosco?
          </h1>
          <p>
            Contamos com um exclusivo sistema de Rating de usuários, de forma a
            avaliar a instância do pet para com o seu Adotante, tal como o bom
            trato no convívio com o seu Protetor. Além disso, contamos com chat
            disponível para Adotantes e Protetores do mesmo pet, facilitando a
            comunicação durante o processo.
          </p>
          <br />
          <p>
            Sem falar que, ao adotar, você ajuda a reduzir o número de cães e
            gatos abandonados, motivação maior que essa não há! Os animais de
            rua já passaram por muito sofrimento e tudo o que precisam é de um
            lar para serem felizes de verdade.
          </p>
          <b-button
            class="mt-6"
            tag="router-link"
            :to="{ path: '/registro' }"
            type="is-primary"
            >CADASTRE-SE GRATUITAMENTE!
          </b-button>
        </div>
        <div class="column">
          <b-carousel class="is-hidden-mobile">
            <b-carousel-item>
              <div class="column">
                <div class="hero-body has-text-left">
                  <img src="../assets/mh-image.png" />
                </div>
              </div>
            </b-carousel-item>
            <b-carousel-item>
              <div class="column">
                <div class="hero-body has-text-left">
                  <img src="../assets/p-image.png" />
                </div>
              </div>
            </b-carousel-item>
            <b-carousel-item>
              <div class="column">
                <div class="hero-body has-text-left">
                  <img src="../assets/hp-image.png" />
                </div>
              </div>
            </b-carousel-item>
            <b-carousel-item>
              <div class="column">
                <div class="hero-body has-text-left">
                  <img src="../assets/ander-image.png" />
                </div>
              </div>
            </b-carousel-item>
            <b-carousel-item>
              <div class="column">
                <div class="hero-body has-text-left">
                  <img src="../assets/v-image.png" />
                </div>
              </div>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>

    <section id="content" class=" pt-6 pb-6 mt-6 ">
      <!-- Início seção content-->
      <div class="container px-3">
        <!-- Início container -->
        <h1 class="is-size-4 is-uppercase has-text-weight-bold mt-4">
          Você está preparado para nos ajudar?
        </h1>
        <p>
          Para adotar um pet, não é necessário ter muito, o importante é
          oferecer amor, carinho e alguns cuidados para que ele tenha uma vida
          plena. Nesse caso, ir em uma ONG pegar um pet já é algo do passado,
          com a tecnologia caminhando a passos largos, nos certificamos de fazer
          a ponte entre você e seu novo melhor amigo. Mas, para isso é provável
          que queiram saber sobre a sua vida, profissão e se você tem todos os
          recursos necessários a fim de garantir qualidade de vida ao pet.
        </p>
        <br />
        <p>
          Nesse caso, é provável que alguns protetores peçam fotos de sua casa,
          perguntem por que você quer um novo animal e te façam diversas
          perguntas relacionadas à adoção, exatamente como se fosse uma
          entrevista. Facilita muito ao dono do pet, quando você disponibiliza
          informações além das solicitadas no formulário de cadastro, lembrando
          que para registrar-se, necessitas apenas informar teus dados iniciais,
          porém, lembra-te, quanto mais informações deres ao Protetor, maiores a
          chance de sua solicitação de adoção ser bem sucedida.
        </p>
        <h1 class="is-size-4 is-uppercase has-text-weight-bold mt-4">
          PERGUNTAS A SEREM FEITAS ANTES DE ADOTAR
        </h1>
        <h1 class="is-size-6 is-uppercase has-text-weight-bold mt-4">
          O seu estilo de vida permite mudanças?
        </h1>
        <p>
          Esta é uma questão importante a ser considerada, só pense em adotar um
          pet se sua rotina lhe é flexível, pois acredite, seu estilo de vida
          mudará. Portanto, antes de adotar um animal de estimação, pense sobre
          o tempo em que ele ficará sozinho em casa, qual a sua disposição para
          levá-lo para passear e se ele terá espaço para brincar e ficar livre.
        </p>
        <h1 class="is-size-6 is-uppercase has-text-weight-bold mt-4">
          Seu novo amigo é sustentável?
        </h1>
        <p>
          Lembre-se que pets adotados não estão livres de gastos, ali, na hora
          da adoção pet, a contribuição costuma ser apenas sentimental. Porém,
          ao levar o bichinho para casa, é preciso estar atento quanto aos
          cuidados fundamentais para mantê-los sempre saudáveis. E, portanto,
          alguns gastos com a alimentação, consultas ao médico-veterinário,
          medicamentos e banho e tosa, são inevitáveis.
        </p>
        <h1 class="is-size-6 is-uppercase has-text-weight-bold mt-4">
          Tenha certeza da sua decisão
        </h1>
        <p>
          Antes de escolher o bichinho, leve em consideração todas essas dicas e
          tenha 100% de certeza quanto a adquirir o cãozinho. Pode parecer
          estranho falar assim, mas, infelizmente, muitos tutores não avaliam
          bem os gastos e as necessidades que esses cãezinhos demandam e então
          acabam abandonando-os. Para que isso não aconteça com você, pense
          bastante antes de se apegar ao cachorrinho e levá-lo para casa. E,
          caso ainda esteja em dúvida quanto ao processo de adaptação,
          oferecemos a opção de ser um tutor temporário.
        </p>
      </div>
      <!-- Fim container-->
    </section>

    <section id="devs" class="container">
      <h1 class="is-size-3 is-uppercase has-text-weight-bold mt-4 mb-4 px-3">
        Time de desenvolvimento
      </h1>

      <div class="columns mx-0">
        <div class="column">
          <div>
            <div class="card">
              <div class="card-content">
                <p class="title">Anderson Souza</p>
                <p class="subtitle ellipsis">
                  andersou <b-icon icon="github"></b-icon>
                </p>
                <figure class="image adopetme-figure">
                  <img src="../assets/ander-image.png" alt="" srcset="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Mathaus Huber</p>
              <p class="subtitle ellipsis">
                HuberM1998 <b-icon icon="github"></b-icon>
              </p>
              <figure class="image adopetme-figure">
                <img src="../assets/mh-image.png" alt="" srcset="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Pedro Barros</p>
              <p class="subtitle ellipsis">
                pedrobarros05 <b-icon icon="github"></b-icon>
              </p>
              <figure class="image adopetme-figure">
                <img src="../assets/p-image.png" alt="" srcset="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Frederico Antunes</p>
              <p class="subtitle ellipsis">
                hpfred <b-icon icon="github"></b-icon>
              </p>
              <figure class="image adopetme-figure">
                <img src="../assets/hp-image.png" alt="" srcset="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Vitor Santos Borges</p>
              <p class="subtitle ellipsis">
                VitorBorg <b-icon icon="github"></b-icon>
              </p>
              <figure class="image adopetme-figure">
                <img src="../assets/v-image.png" alt="" srcset="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
#content {
  background: linear-gradient(110deg, rgb(110, 16, 197), #ad3a9e);
  width: 100%;
  color: white;
  @include desktop{
  border-top-style: dashed;
  border-bottom-style:dashed;
  border-bottom-width: 10px;
  border-top-width: 10px;
  margin-top: 70px;
  margin-bottom: 70px;
  }
}
#devs .card {
  width: fit-content;
  margin: 0 auto;
}
// #devs {
//   /*background-color: $primary;*/
//   width: 100%;
//   padding-top: 60px;
//   padding-bottom: 60px;
// }
// .adopetme-figure {
//   max-height: 250px;
// }
.adopetme-figure img {
  max-height: 250px;
  width: auto;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
