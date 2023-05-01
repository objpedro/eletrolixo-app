//Yup
import * as yup from 'yup';

const schemaSignIn = yup.object({
    email: yup.string().email("Email inválido").required("Informe seu Email"),
    password: yup.string().required("Informe sua Senha"),
})

export { schemaSignIn }