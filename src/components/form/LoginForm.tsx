import React from 'react'
import {useForm} from 'react-hook-form'
import {Bars} from "react-loader-spinner"
import FormInput from './FormInput'
const LoginForm = ({inputs, defaultValues, onSubmit, isLoading, isSingup}: any) => {
    const {control, handleSubmit} = useForm({
        defaultValues
    });

  return (
   <div className='flex flex-col justify-center items-start w-full'>
    {inputs.map((item: any, index: number) => (
        <FormInput key={index} control={control} input={item} rules={item?.rules}/>
    ))}
    <div className ="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 text-center"
    onClick={handleSubmit(onSubmit)}>
{isLoading ? <Bars color="#fff" height={30} width={30}/> : <p className="text-white text-xl font-bold">{isSingup ? "Sign up" : "Log in"}</p>}

    </div>
   </div>
  )
}

export default LoginForm