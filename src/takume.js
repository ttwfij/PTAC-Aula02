
entra = function() {
    let valor = document.getElementById("nome").value
    console.log(valor)
    valor = "Bom dia, " + valor + ". ( ◕‿◕)"
    document.getElementById("nome").innerHTML = valor
  }