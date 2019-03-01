class ListaNegociacoes {


  constructor() {

    this._negociacoes = []

  }

  addciona(negociacao) {

    this._negociacoes.push(negociacao)

  }

  get negociacoes() {

    return this._negociacoes

  }
}