<template lang="html">
  <div class="footer-container">
    <div class="footer">
      <p class="footer-content">created by kevin belford using the <a href="https://www.openbrewerydb.org/" target="_blank" class="api-link">open brewery db api</a></p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.footer-container {
  position: relative;
  min-height: 40vh;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #24352B;
  text-align: center;
  padding: 6rem 0;
  margin-top: 4rem;
}

.footer-content {
  color: #FFFFFF;
  text-transform: uppercase;
  word-spacing: 2px;
  letter-spacing: 0.5px;
  margin: 0;
  font-size: 1rem;
}

.api-link {
  color: #AFB28D;
}

.api-link:hover:visited {
  color: #AFB28D;
}

/* mobile media query */
@media screen and (max-width: 577px) {
    .footer-content {
      font-size: 0.5rem;
    }

}

/* tablet media query */
@media screen  and (max-width: 769px) {

}
</style>
