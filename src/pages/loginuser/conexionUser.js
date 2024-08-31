import axios from "axios";
import Cookies from "js-cookie";

export default async function ram(firtName, lastName, email, password) {
  try {
            const API_URL = 'https://render-school.onrender.com/api/auth/register';
            const response = await axios.post(API_URL, {
                firtName,
                lastName,
                email,
                password,
            });
            const token = response.data.token;

            Cookies.set('token', token, {expires: 1});

            console.log('Usuario Conectado', response.data);
            console.log('Token Guardado: ', token);
            // Puedes realizar acciones adicionales con la respuesta del servidor aquí
        } catch (error) {
            console.error('Error en la solicitud:', error);
            // Puedes manejar errores específicos aquí si es necesario
            throw new Error('No se pudo conectar al servidor');
        }
};