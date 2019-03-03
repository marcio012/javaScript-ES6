class MensagemView extends View{

  constructor(elemento) {
    super(elemento)
  }

  _template = model => model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p/>'


}
