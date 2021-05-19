<template>
<main>
  <div class="container">
    <div class="columns">
     <div class="column is-three-quarters">
       <h1 class="is-size-3 is-uppercase has-text-weight-bold mt-4">
         Intuito do Projeto
       </h1>
       <p>
         Tendo em vista a baixa disponibilidade de soluções, relacionada à adoção de pets, disponíveis no mercado, que sejam confiáveis e de fácil
         interação com o usuário, propomos um projeto diferente, que une o melhor da experiência UI com o desempenho de uma ferramenta móvel.
       </p>
       <br>
       <p>
         Pensando nisso, preparamos uma plataforma completa a fim de facilitar o processo de adoção de animais, os recursos e documentos necessários
         estão disponíveis na nossa página de registro. Contudo, iremos avisar com antecedência, temos um rigoroso método de rating para Adotantes e Protetores,
         por isso disponilizamos um conteúdo vocacional para que você esteja realmente ciente da adoção do seu peludinho. ❤️
       </p>
       <h1 class="is-size-5 is-uppercase has-text-weight-bold mt-4">
         Por que adotar conosco?
       </h1>
       <p>
         Contamos com um exclusivo sistema de Rating de usuários, de forma a avaliar a instância do pet para com o seu Adotante, tal como o bom trato 
         no convívio com o seu Protetor. Além disso, contamos com chat disponível para Adotantes e Protetores do mesmo pet, facilitando a comunicação 
         durante o processo. 
       </p>
       <br>
       <p>
         Sem falar que, ao adotar, você ajuda a reduzir o número de cães e gatos abandonados, motivação maior que essa não há! 
         Os animais de rua já passaram por muito sofrimento e tudo o que precisam é de um lar para serem felizes de verdade.
       </p>
     </div>
     <div class="column">
      <b-carousel>
        <b-carousel-item>
                  <div class="column">
                <div class="hero-body has-text-left">
                    <img src="../assets/mh-image.png">
                </div>
                  </div>
        </b-carousel-item>
        <b-carousel-item>
                  <div class="column">
                <div class="hero-body has-text-left">
                    <img src="../assets/p-image.png">
                </div>
                  </div>
        </b-carousel-item>
         <b-carousel-item>
                  <div class="column">
                <div class="hero-body has-text-left">
                    <img src="../assets/hp-image.png">
                </div>
                  </div>
        </b-carousel-item>
        <b-carousel-item>
                  <div class="column">
                <div class="hero-body has-text-left">
                    <img src="../assets/ander-image.png">
                </div>
                  </div>
        </b-carousel-item>
        <b-carousel-item>
                  <div class="column">
                <div class="hero-body has-text-left">
                    <img src="../assets/v-image.png">
                </div>
                  </div>
        </b-carousel-item>
        </b-carousel>
      </div>
    </div>
  </div>
  
  <section id="content" class="mt-6"> <!-- Início seção content-->
    <div class="container pt-6 pb-6"><!-- Início container -->
    <h1 class="is-size-4 is-uppercase has-text-weight-bold mt-4">Você está preparado para nos ajudar?</h1>
    <p>
      Para adotar um pet, não é necessário ter muito, o importante é oferecer amor, carinho e alguns cuidados para que ele tenha uma vida plena. 
      Nesse caso, ir em uma ONG pegar um pet já é algo do passado, com a tecnologia caminhando a passos largos, nos certificamos de fazer a ponte
      entre você e seu novo melhor amigo. Mas, para isso é provável que queiram saber sobre a sua vida, profissão e se você tem todos os recursos 
      necessários a fim de garantir qualidade de vida ao pet. 
    </p><br>
    <p> 
       Nesse caso, é provável que alguns protetores peçam fotos de sua casa, perguntem por que você quer um novo animal e te façam diversas perguntas
       relacionadas à adoção, exatamente como se fosse uma entrevista. Facilita muito ao dono do pet, quando você disponibiliza informações além 
       das solicitadas no formulário de cadastro, lembrando que para registrar-se, necessitas apenas informar teus dados iniciais, porém, lembra-te, 
       quanto mais informações deres ao Protetor, maiores a chance de sua solicitação de adoção ser bem sucedida.
    </p>
    </div> <!-- Fim container-->
  </section><!-- Fim seção content -->

  </main>
</template>
<style lang="scss" scoped>
@include desktop {
  #content{
    background-color: rgb(110, 16, 197);
    width: 100%;
    color: white;
  }
  
}
</style>
