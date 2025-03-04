# Markdown para Google Docs

Este projeto contém uma função para converter texto em **Markdown** para formatação no **Google Docs**, utilizando **Google Apps Script**.

## 📌 Funcionalidades

- Suporte a títulos (`#`, `##`, `###`)
- Negrito (`*texto**`) e itálico (`texto*`)
- Listas (`item` ou `item`)
- Links (`[texto](url)`)
- Inserção automática no local correto do documento

## 🚀 Como Usar

1. **Crie um projeto no Google Apps Script**
2. **Copie e cole a função de conversão**
3. **Chame a função passando o corpo do documento e o texto em Markdown**

## 🔧 Exemplo de Uso

```
var corpo = DocumentApp.getActiveDocument().getBody();
inserirMarkdownNoLugar(corpo, "# Título Principal\n\nTexto normal com **negrito** e *itálico*.");
```

## 📜 Licença

Este projeto é open-source e pode ser modificado conforme necessário.