function copyCode() {
  const code = document.getElementById('code-snippet').innerText;
  navigator.clipboard.writeText(code).then(() => {
  }).catch((err) => {
    console.error("Erro ao copiar o código: ", err);
  });
}

function viewCode() {
  const codeContainer = document.getElementById('code-container');
  codeContainer.classList.toggle('expanded');
}
