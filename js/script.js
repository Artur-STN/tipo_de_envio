document.getElemrnyId('quantidade_Pac').value = 0
document.getElemrnyId('quantidade_Sedex').value = 0

function maisUm(tipo_de_envio) {
    
    let input_number = document.getElementById(`quantidade_` + tipo_de_envio)

    input_number.value = Number(input_number.value) + 1

}

function menosUm(tipo_de_envio) {
    
    let input_number = document.getElementById(`quantidade_` + tipo_de_envio)

    input_number.value = Number(input_number.value) - 1

}
