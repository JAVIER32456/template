import { useState } from "react";
import axios from "axios";
import img from "../../img/no-image-found.png"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import "./new.css"

const New = () => {
  // Se crea el estado del documento
  const [document, setDocument] = useState(null);

    const handleDocument = (event) =>{
    const selectedDocument = event.target.files[0];
    setDocument(selectedDocument);
  };
  //
  // Se crea el estado del select
  const [option, setOption] = useState("");

    const handleOption = (event) =>{
    setOption(event.target.value);
  };
  //
 
  const [ formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    id: "",
    fechaNac: "",
    lugarNac: "",
    nombreInstituto: "",
    nacionalidad: "",
    direccion: "",
    telefono: "",
    email: "",
  });
  
  /*
  const handleInput = (event) =>{
    const {name, value } = event.target; 
    setFormData({...formData, [name]: value});
  };
  */

  const handleInput = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('', {
        // Aquí puedes enviar los datos que deseas al endpoint
        formData: formData,
        option: option,
        // Puedes agregar más datos según sea necesario
      });
  
      console.log('Respuesta del servidor:', response.data);
  
      // Restablecer los campos del formulario después de enviarlos
      setFormData({
        nombre: "",
        apellidos: "",
        id: "",
        fechaNac: "",
        lugarNac: "",
        nombreInstituto: "",
        nacionalidad: "",
        direccion: "",
        telefono: "",
        email: "",
      });
      setOption("");
      setDocument(null);
      setFile("");
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };
  

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData, "Genero: ",option);
    
    if (document){
      console.log("Archivo Seleccionado: ", document)
    } else {
      console.log("Ningun Archivo Seleccionado.");
    }

  };

  //Estado de la imagen de perfil
  const [ file, setFile ] = useState("");


  
  return (
    <div className="new">
      <Sidebar/>
      <div className="containerNew">
        <Navbar/>
        <div className="topNew">
          <h1> Add Nuevo Usuario </h1>
        </div>
        <div className="bottomNew">
          <div className="leftNew">
            <img src= {file ? URL.createObjectURL(file)
              :img} 
            alt="" />  
            <label htmlFor="file"><UploadFileIcon className="fileNew"/></label>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} 
            style={{display: "none"}} accept=".jpg, .jpeg, .png"/> 
          </div>
            <div className="rightNew">
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <label htmlFor="nombre">Nombres</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input type="text" id="apellidos" name="apellidos" value={formData.apellidos}  onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="id">Identificacion</label>
                  <input type="number"  id="id" name="id" value={formData.id}  onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="fechaNac">Fecha Nacimiento</label>
                  <input type="date" id="fechaNac" name="fechaNac" value={formData.fechaNac}  onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="lugarNac">Lugar Nacimiento</label>
                  <input type="text" id="lugarNac" name="lugarNac" value={formData.lugarNac}  onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="select">Genero</label>
                  <select id="select" value={option} onChange={handleOption}>
                    <option value="seleccione">Seleccione una opcion</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>  
                  </select>
                </div>
                <div className="formInput">
                  <label htmlFor="nombreInstituto">Nombre centro Educativo</label>
                  <input type="text" id="nombreInstituto" name="nombreInstituto" value={formData.nombreInstituto} onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="nacionalidad">Nacionalidad</label>
                  <input type="text" id="nacionalidad" name="nacionalidad" value={formData.nacionalidad}  onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="direccion">Direccion</label>
                  <input type="text" id="direccion" name="direccion" value={formData.direccion}  onChange={handleInput} />
                </div>
                <div className="formInput">
                  <label htmlFor="telefono">Tel</label>
                  <input type="number" id="telefono" name="telefono" value={formData.telefono}  onChange={handleInput}/>
                </div>
                <div className="formInput">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email}  onChange={handleInput} />
                </div>
                <div className="formDocument">
                  <label htmlFor="archivoInput">Documento</label>
                  <input type="file" id="archivoInput" onChange={handleDocument} 
                  accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"/>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New