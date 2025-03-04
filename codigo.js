function inserirMarkdownNoLugar(corpoDoc, markdown, indiceParagrafo) {
    var linhas = markdown.split("\n")
      .map(linha => linha.trim())
      .filter(linha => linha !== "");
  
    if (linhas.length === 0) {
      Logger.log("Aviso: Nenhum conteúdo Markdown para inserir.");
      return;
    }
  
    linhas.forEach((linha, index) => {
      var elementoInserido;
      
      if (linha.startsWith("# ")) {
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, linha.replace("# ", ""))
          .setHeading(DocumentApp.ParagraphHeading.HEADING1);
      } else if (linha.startsWith("## ")) {
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, linha.replace("## ", ""))
          .setHeading(DocumentApp.ParagraphHeading.HEADING2);
      } else if (linha.startsWith("### ")) {
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, linha.replace("### ", ""))
          .setHeading(DocumentApp.ParagraphHeading.HEADING3);
      } else if (/^[\*\-]\s/.test(linha)) {
        var textoLista = linha.replace(/^[\*\-]\s+/, "").trim();
        elementoInserido = corpoDoc.insertListItem(indiceParagrafo + index, textoLista);
      } else if (/\*\*(.*?)\*\*/.test(linha)) {
        var texto = linha.replace(/\*\*(.*?)\*\*/g, "$1");
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, texto);
        elementoInserido.editAsText().setBold(true);
      } else if (/\*(.*?)\*/.test(linha)) {
        var texto = linha.replace(/\*(.*?)\*/g, "$1");
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, texto);
        elementoInserido.editAsText().setItalic(true);
      } else if (/\[(.*?)\]\((.*?)\)/.test(linha)) {
        var match = linha.match(/\[(.*?)\]\((.*?)\)/);
        var texto = match[1];
        var url = match[2];
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, texto);
        elementoInserido.setLinkUrl(url);
      } else {
        elementoInserido = corpoDoc.insertParagraph(indiceParagrafo + index, linha);
      }
    });
  }
  