(function(app) {
  var socket = app.socket;
  var aceEditor = app.aceEditor;

  aceEditor.setReadOnly(false);

  document.addEventListener('keyup', onKeyDown, false);
  function onKeyDown(evt) {
    socket.emit('codeUpdate', {content:aceEditor.getValue()} );
  }
  
  $('#language').on('change', (evt) => {
    let mode = $(evt.currentTarget).val()
    aceEditor.getSession().setMode('ace/mode/'+mode )
    socket.emit('setMode', mode)
  })
})(window.app)