export const dateFormatter = (date) => {
  // Analizar la cadena de fecha y hora en el formato proporcionado
  const fechaOriginal = new Date(date)

  // Obtener los componentes de la fecha y hora
  const dia = fechaOriginal.getDate()
  const mes = fechaOriginal.getMonth() + 1 // Los meses en JavaScript se indexan desde 0
  const año = fechaOriginal.getFullYear()
  const horas = fechaOriginal.getHours()
  const minutos = fechaOriginal.getMinutes()

  // Agregar ceros iniciales si es necesario
  const diaFormateado = dia < 10 ? "0" + dia : dia
  const mesFormateado = mes < 10 ? "0" + mes : mes
  const horasFormateadas = horas < 10 ? "0" + horas : horas
  const minutosFormateados = minutos < 10 ? "0" + minutos : minutos

  // Formatear la fecha y hora en el formato deseado
  const fechaFormateada = `${diaFormateado}/${mesFormateado}/${año}`
  const horaFormateada = `${horasFormateadas}:${minutosFormateados}`

  return `${fechaFormateada} a las ${horaFormateada}`
}
