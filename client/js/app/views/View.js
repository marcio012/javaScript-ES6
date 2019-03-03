class View {

  constructor(elemento) {
    this._elemento = elemento
  }

  _template(model) {
    throw new Error('Ó método template deve ser implementado')
  }

  _update(model) {
    this._elemento.innerHTML = this._template(model)
  }

}
