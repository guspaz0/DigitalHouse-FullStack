let perfil = "ASISTENTE";

perfil = perfil.toLowerCase()

switch (perfil) {
    case "":
        console.log("Debe especificar el perfil del usuario")
        break
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema")
        break
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
        break
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos")
    default:
        console.log("Debe especificar un perfil válido")
    }