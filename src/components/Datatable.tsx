import { useEffect, useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import { carData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'car_make', headerName: 'Make', flex: 1 },
  { field: 'car_model', headerName: 'Model', flex: 1 },
  { field: 'car_year', headerName: 'Year', flex: 1 },
  { field: 'car_color', headerName: 'Color', flex: 1 },
  { field: 'car_id', headerName: 'car_id', flex: 1 },
  { field: 'car_vin', headerName: 'VIN', flex: 2 }
 
];

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  const [ carData, setCarData ] = useState<carData[]>([])
  
  console.log(contactData)

  //bandaid fix
  useEffect(() => {
    if (contactData as carData[]){
    let fixCarId = contactData.map((data) =>( {...data, id: data.car_id }))
    setCarData(fixCarId)
    }
  }, [contactData])
  



  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 1000)
  }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Create New Car
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Contacts</h2>
            <DataGrid rows={carData} columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable