// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas

const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(mesasSolicitadas>mesasDisponibles)
        reject( new Error(`No se pueden reservar ${mesasSolicitadas}, solo hay ${mesasDisponibles} mesas disponibles.`));
      resolve(`Se han reservado ${mesasSolicitadas}.`);
        
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
      // de lo contrario, recházala con un mensaje adecuado.
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if((Math.random()*100)>50)
        reject(new Error(`No se ha podido enviar el mensaje de confirmación a ${nombreCliente}`));
      resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}
// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log(disponibilidad);
    const reservacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(reservacion);
  } catch (error) {
    console.error(error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 4);  // Intenta hacer una reserva para 3 personas