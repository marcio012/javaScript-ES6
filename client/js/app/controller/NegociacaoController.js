class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document)

    this._inputData = $('#data')
    this._inputQuantidade = document.querySelector('#quantidade')
    this._inputValor = document.querySelector('#valor')
    this._listaNegociacoes = new ListaNegociacoes()

  }

  adiciona(event) {
    event.preventDefault()

    this._listaNegociacoes.addciona(this._criaNegociacao())
    this._limpaFormulario()

    // add negociacao

    console.log(this._inputData.value)
    console.log(this._inputQuantidade.value)
    console.log(this._inputValor.value)


    console.log(this._listaNegociacoes.negociacoes)

  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )
  }

  _limpaFormulario() {
    this._inputData.value = ''
    this._inputQuantidade.value = 1
    this._inputValor.value = 0.0

    this._inputData.focus()
  }

}