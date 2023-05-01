//Yup
import * as yup from 'yup';

const schemaSignUp = yup.object({
    userName: yup.string().required("Informe seu Nome"),
    email: yup.string().email("Email inválido").required("Informe seu Email"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 dígitos").required("Informe uma senha"),
})

export { schemaSignUp }