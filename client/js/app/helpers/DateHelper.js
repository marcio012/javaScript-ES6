class DateHelper {

  constructor() {
    throw new Error('Esta Class não pode ser instanciada.')
  }

  static textParaData(texto) {
    //TODO: Tratando Data

    // testando o data no formato yyyy-mm-dd
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Deve estar no formato aaaa-mm-dd')

    return new Date(texto.replace(/-/g, ','))

  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }


}
