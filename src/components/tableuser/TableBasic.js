import React from 'react'
import MUIDataTable from "mui-datatables";

const columns=["Nombre","Apellidos","Email","User"]
const data = [
    ["javier", "Valencia", "javier@gmail.com", "javiervale132"],
    ["cristina", "renes", "crisre@gmail.com", "renescris2233"],
    ["pablo", "garza", "garpablo@gmail.com", "pablo6544"],
]
const options= {filterType: 'checkbox',}

const TableBasic = () => {
  return (
    <div>
        <MUIDataTable
            title={'Usuarios'}
            data={data}
            columns={columns}
            options={options}
        />
    </div>
  );
}

export default TableBasic