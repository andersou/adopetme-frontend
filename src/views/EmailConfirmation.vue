<template>
  <main>

<div class="mt-6 border blue effect8">
      <div class="mt-6 body border">
                  <figure class="adopetme-figure image">
        <img src="../assets/Mailbox-bro.svg" alt="" srcset="" />
        </figure>


      </div>
      <div class="body pb-1">
          <div class="message__title">Confirmação de email</div>
          <br />
          <br />
          <div>Olá! Você está quase pronto para começar a procurar um novo pet!</div>
          <br />
          <div>Aperte no botão abaixo para confirmar a sua conta!</div>

          <div class="buttons body mt-6 pb-6" label="Launch toast (custom)"
                type="is-success"
                size="is-medium"
                @click="success">
              <b-button type="is-success">Confirmar email</b-button>
          </div>
          
      </div>
</div>

  </main>
</template>

<style lang="scss" scoped>
.image{
        width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.color{
    background-color: aliceblue;
}

.body{
    width: 45%;
    height: 45%;
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.blue{
    margin-top: 50px;

  box-shadow:
  0 0.8px 2.2px rgba(0, 0, 0, 0.04),
  0 0.7px 5.3px rgba(0, 0, 0, 0.08),
  0 0.5px 10px rgba(0, 0, 0, 0.06),
  0 0.3px 17.9px rgba(0, 0, 0, 0.02),
  0 0.8px 33.4px rgba(0, 0, 0, 0.06),
  0 100px 80px rgba(0, 0, 0, 0.012)
;

  
  
  min-height: 200px;
  width: 50vw;
  margin: 100px auto;
  background: white;
  border-radius: 5px;

}

.effect8:after
{
  right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}

.border{
    border-radius: 25px;
}

.message__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
   font-size: 1.6rem;
  padding-bottom: 40px;
  max-width: 960px;
  margin: 0 auto;
  color:dimgray;
}


</style>

<script>
    export default {
        data() {
            return {
                indefinteToast: null
            }
        },
        methods: {
            toast() {
                this.$buefy.toast.open('Something happened')
            },
            success() {
                this.$buefy.toast.open({
                    message: 'Email confirmado!',
                    type: 'is-success'
                })
            },
            danger() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Algum erro ocorreu! Email não confirmado!`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            },

            indefinite() {
                this.indefinteToast = this.$buefy.toast.open({
                    indefinite: true,
                    message: `I won't close until you explicitly close me!`,
                    type: 'is-warning'
                })
            },
            closeIndefinite() {
                if (this.indefinteToast) {
                    this.indefinteToast.close();
                    this.indefinteToast = null;
                }
            }
        }
    }
</script>
