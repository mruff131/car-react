import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseMake, chooseModel, chooseYear, chooseColor,chooseVIN } from "../redux/slices/RootSlice";

// interfaces

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    event.preventDefault();
    
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));
      dispatch(chooseVIN(data.vin));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
      
    }
    
  }

  return (


<div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make"> Make</label>
          <Input {...register('make')} name='make' placeholder="Make"/>
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model"/>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder="year"/>
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="color"/>
        </div>
        <div>
          <label htmlFor="vin">VIN</label>
          <Input {...register('vin')} name='vin' placeholder="VIN"/>
        </div>
        <div className="flex p-1">     
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm