import React from 'react'
import {Controller} from 'react-hook-form'
const FormInput = ({input, control, rules}: any) => {
    const renderInput = ({field: {onChange,value}, fieldState: {error}}: any) => (
        <div className="mb-2 w-full">
            <input
                className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                onChange={onChange}
                value={value}
                placeholder={input?.name}
                type={input?.type}
                />
                {error && <p className="text-red-500 text-xl mt-1">{error?.message}</p>}
        </div>
    );
  return (
    <Controller
    control={control}
    rules={rules}
    name={input?.name}
    render={renderInput}
    />
  )
}

export default FormInput