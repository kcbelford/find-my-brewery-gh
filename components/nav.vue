<template lang="html">
  <div id="nav" class="nav-container">
    <nav class="navbar navbar-expand-sm navbar-light d-flex justify-content-center nav">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="ul navbar-nav container-fluid">
            <nuxt-link to="/" class="mylink">FMB</nuxt-link>
            <nuxt-link to="/about" class="mylink">About FMB</nuxt-link>
            <nuxt-link to="/craft" class="mylink">What is Craft Beer?</nuxt-link>
            <nuxt-link to="/favorites" class="mylink">My Favorites</nuxt-link>
          </ul>
        </div>
      </nav>
    </div>

  <!-- <nav>
    <ul>
      <nuxt-link to="/">FMB</nuxt-link>
      <nuxt-link to="/about">About FMB</nuxt-link>
      <nuxt-link to="/craft">What is Craft Beer?</nuxt-link>
      <nuxt-link to="/favorites">My Favorites</nuxt-link>
    </ul>
  </nav> -->
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.nav-container {
  width: 100%;
}

.ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
}

.mylink {
  color: white;
}

.mylink:visited {
  color: white;
}

.mylink:hover {
  color: #AFB28D;
  text-decoration: none;
}

.nav {
  background-color: #697649;
  padding: 2rem 0;
}
</style>
