function dividir(a, b) {
  if (b === 0) {
    throw new Error("o se puede dividir entre cero");
  }
  return a / b;
}
try {
  let resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (e) {
  console.log("Ocurrió un error:");
  console.log("Mensaje:", e.message);
}

try {
  const texto = '{"1": "2": "3": 4';
  
  const obj = JSON.parse(texto);
  console.log(obj);

} catch (e) {
  console.log("nombre del error:", e.name);
  console.log("mensaje del error:", e.message); 
}

try {
    console.log(obj);

} catch (e) {
    console.log("fallo");
  
} finally {
    console.log("siempre se ejecuta");
}

function validarEdad(edad) {
    if (typeof edad !== "number" || edad < 0){
        throw new Error("Edad inválida");
    }
}
try {
    console.log(validarEdad(-5));
} catch (e) {
    console.log("error: ", e.message);
}

try {
    let x = null;
    console.log(x.nombre);
} catch (e) {
    if (e instanceof TypeError) {
        console.log("ocurrio un TypeError:", e.message);
    } else {
        console.log("otro error");
    } 
}

function primera_funcion() {
    try {
        let x = null;
        x.nombre;
    } catch (e) {
        console.log("primer catch (nivel 1)", e.message);
        throw e;
    }   
}
function segunda_funcion() {
    try {
     primera_funcion();
     } catch (e) {
        console.log("segundo catch (nivel 2)", e.message);
     throw e;
    }
}
try {
    segunda_funcion();
} catch (e) {
    console.log("carch fianal (nivel final)", e.message);
}

function mensaje(callback) {
    setTimeout(() => {
        callback("mensaje cargado");
    }, 1000);
}
mensaje(function(mensaje) {
    console.log("mensaje");
});

function cargarUsuario(c) {
  const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
  setTimeout(() => {
    const usuario = {
      id: 1,
      nombre: "pablo"
    };
    c(usuario);
  }, tiempo);
}
cargarUsuario(function(usuario) {
  console.log(`Usuario ${usuario.nombre} (ID: ${usuario.id})`)});

function dividirAsync(a, b, callback) {
    setTimeout(() => {
    if (b === 0) {
        callback(new Error("no se puede dividir entre cero"), null);
    } else {
        callback(null, a / b);
    }
    }, 1500);
}
dividirAsync(10, 0, function(error, resultado) {
    if (error) {
        console.log("error:", error.message);
    } else {
        console.log("resultado:", resultado);
    }
});

function procesarLista(lista, callbackFinal) {
    let procesados = 0;

    lista.forEach((numero) => {
    const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    setTimeout(() => {
        console.log("procesando   " + numero +"...");
        procesados++;
        if (procesados === lista.length) {
            callbackFinal("Proceso completado");
        }
        }, tiempo);
    });
}
procesarLista([10, 20, 30, 40], function(mensajeFinal) {
    console.log(mensajeFinal);
});

function mensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mensaje cargado");
        }, 1000);
    });
}
mensaje()
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error(err);
    });
