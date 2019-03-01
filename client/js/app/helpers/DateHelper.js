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

    // console.log(data)

    /*
    // usando o spret operator
    let data2 = new Date(
      ...this._inputData.value
        .split('-')
        .map((item, index) => {
          if (index == 1)
            return item - 1
          return item
        })
    )
    console.log(data2)
    */

  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }


}