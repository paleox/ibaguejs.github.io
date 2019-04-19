<template lang="pug">
  .about.has-background-js.py-3
    v-container(grid-list-md, text-xs-center)
      v-layout(row, justify-center, black--text)
        v-flex.px-4(xs12)
          h2.display-1.pb-3 Acerca de IbagueJS
          div(
            :class="{'mx-5 px-5': $vuetify.breakpoint.mdAndUp}"
          )
            p
              | Acércate y aprende con nosotros, IbaguéJS es un espacio gratuito y libre
              | para aprender y compartir conocimiento sobre JavaScript. Nos regimos bajo un 
              strong
                a.black--text(
                  href="https://github.com/colombia-dev/codigo-de-conductad"
                ) Código de Conducta 
              | que aplica a los integrantes, asistentes, patrocinadores y organizadores
              | del grupo, esto con el objetivo de propiciar un ambiente sin acoso e
              | inclusivo, al hacer parte de este grupo entendemos que estás de acuerdo con nuestro 
              strong
                a.black--text(
                  href="https://github.com/colombia-dev/codigo-de-conductad"
                  class=""
                ) Código de Conducta.
            p
              | Nuestra filosofía será siempre la de mantener un ambiente informal, nada
              | estricto en ningún sentido. Así que cualquier colaboración, en cualquier
              | sentido, será muy bien recibida.
</template>
