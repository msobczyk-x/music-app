import React from 'react'; 
import { Link } from 'react-router-dom';
import useAuthentication from '@/hooks/useAuthentication';
import LoginForm from '@/components/form/LoginForm';
import { DEFAULT_FORM_VALUES,
SIGN_IN_FORM_INPUTS_ARRAY } from '@/utils/constants';
export default function Login() {
    const {isLoading, signInCall} = useAuthentication();
   const onSubmit = async (data:any) => {

    await signInCall({email: data?.email, password: data?.password})
   }

    return (
        <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl' >
            <p className='text-3xl font-semibold text-center text-purple-700 uppercase'>
                Login
            </p>
            <LoginForm
            inputs={SIGN_IN_FORM_INPUTS_ARRAY}
            defaultValues={DEFAULT_FORM_VALUES}
            onSubmit={onSubmit}
            isLoading={isLoading}
            />
            <div className='flex flex-row'>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
            </p>
            <Link
            to='/signup'
            className="font-medium text-purple-600 hover:underline"
            >
                Create account
            </Link>
            </div>
        </div>
    );
}