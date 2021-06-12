<template>
   <main>
      <div class="container is-fluid">
		<div class="columns">
			<div class="column hero">
				<div class="hero-body container has-text-centered tuble">
					<h1 class="is-size-3 has-text-weight-light mt-4">
					Uma confirmação de e-mail foi enviada para sua caixa postal, para conectar-se ao app é necessário a verificação, caso não esteja na caixa
					de entrada, verifique também o seu spam ou a lixeira.
					</h1>
					<b-button
					type="is-primary"
					>Enviar novamente!<b-icon class="ml-2" icon="email" size="is-small"> </b-icon></b-button
					>
				</div>
			</div>
			<div class="column">
				<img src="../../src/assets/email.svg">
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
@include desktop{
	.tuble{
		margin-top: 150px;
	}
}
</style>