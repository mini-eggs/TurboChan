<template>
  <section class="about">
    <article>
      <p>Turbo Chan is a mobile first, read-only 4chan client. No ads. No payments. No closed source software. Free as in free beer.</p>
      <br/>
      <p>We hope you enjoy the app.</p>
      <br/>
      <p>You may contact us with app related discussion/questions at <a href="mailto:turbochan@gmail.com">turbochan@gmail.com</a>.</p>
      <br/>
      <p>You may view the source code <a href="https://github.com/mini-eggs/TurboChan">here</a>.</p>
    </article>
  </section>
</template>

<style scoped>
section.about {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 1.4;
}

section.about > * {
  max-width: 300px;
}
</style>