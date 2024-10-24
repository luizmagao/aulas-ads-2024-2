const { createApp, ref } = Vue
  
    createApp({
      setup() {

        const valor = ref(0)
        const resultado = ref(0)

        return {
            valor,
            resultado
        }
      }
    }).mount('#desafio')