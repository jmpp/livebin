(function(app) {
	'use strict';
	
  var socket = io('http://192.168.10.61:3000');

  var aceEditor = ace.edit('code-area');
  aceEditor.setFontSize(16);
  aceEditor.setTheme('ace/theme/tomorrow_night_bright');
  aceEditor.setShowPrintMargin(false);
  aceEditor.getSession().setMode('ace/mode/text');
  aceEditor.setReadOnly(true);

  socket.on('codeUpdate', (data) => {
    aceEditor.setValue(data.content);
    aceEditor.clearSelection();
  })

  socket.on('setMode', (mode) => {
    aceEditor.getSession().setMode('ace/mode/'+mode )
  })

  app.socket    = socket;
  app.aceEditor = aceEditor;
})(window.app);
