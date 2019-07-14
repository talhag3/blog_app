<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
      		<a class="navbar-brand" href="#">Lara Blog</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
				<li class="nav-item">
					<router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link> 	
				</li>
				<li class="nav-item pull-right">
					<router-link class="nav-link" to="logout"> Logout <span class="sr-only">(current)</span></router-link>
				</li>
				<li class="nav-item pull-right">
					<router-link class="nav-link" to="/messanger">Messenger</router-link>
				</li>
				</ul>
			</div>
      	</nav>
		<router-view/>
	</div>
</template>

<script>
export default {
     
}
</script>

<style scoped>

</style>

