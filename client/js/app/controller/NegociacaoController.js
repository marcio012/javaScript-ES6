class NegociacaoController {

  constructor() {

    this._inputData = document.querySelector('#data')
    this._inputQuantidade = document.querySelector('#quantidade')
    this._inputValor = document.querySelector('#valor')
    this._listaNegociacoes = new ListaNegociacoes()
    this._divTable = document.querySelector('#negociacoesView')
    this._negociacoesView = new NegociacaoView(this._divTable)

    this._negociacoesView._update(this._listaNegociacoes)
    this._mensagem = new Mensagem()
    this._divMensagemView = document.querySelector('#mensagemView')
    this._mensagemView = new MensagemView(this._divMensagemView)
    this._mensagemView._update(this._mensagem)

  }

  adicionar(event){
    event.preventDefault()
    this._listaNegociacoes.adiciona(this._criaNegociacao())
    this._mensagem.texto = 'Negociacao adicionada com sucesso.'
    this._negociacoesView._update(this._listaNegociacoes)

    this._mensagemView._update(this._mensagem)
    this._limpaFormulario()

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
    this._inputValor.value = 0.0
    this._inputQuantidade.value = 0
    this._inputData.focus()
  }

}
