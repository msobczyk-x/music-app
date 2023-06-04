import React from 'react'; 
import { Link } from 'react-router-dom';
import useAuthentication from '@/hooks/useAuthentication';
import LoginForm from '@/components/form/LoginForm';
import { DEFAULT_FORM_VALUES,
SIGN_IN_FORM_INPUTS_ARRAY } from '@/utils/constants';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Signup() {
    const {isLoading, signUpCall} = useAuthentication();
    const [error, setError] = React.useState('' as any);
   const onSubmit = async (data:any) => {
    await signUpCall({email: data?.email, password: data?.password}).catch((err:any) => {
        console.log(err.message)
        err.message === 'Firebase: Error (auth/email-already-in-use).' ? setError('Email already in use') :
        err.message === 'Firebase: Error (auth/invalid-email).' ? setError('Invalid email') :
        err.message === 'Firebase: Error (auth/weak-password).' ? setError('Password should be at least 6 characters') :
        setError('Something went wrong');
    }
    );
   }

    return (
        <motion.div className='col-span-1 p-6 m-auto lg:max-w-2xl min-w-[20rem] border-y-2 py-16' 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
    >
             <div className="flex flex-col items-center justify-center mb-8">
        <NavLink to="/">
          <h2 className="text text-2xl drop-shadow-2xl">
            <span className="font-bold">Tune</span>mate
          </h2>
        </NavLink>
      </div>
        <p className='text-3xl  text-yellow-400 font-bold '>
            Sign up
        </p>
        <LoginForm
        inputs={SIGN_IN_FORM_INPUTS_ARRAY}
        defaultValues={DEFAULT_FORM_VALUES}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isSingup={true}
        />
        {error && (
        <div className='text-red-500 text-sm mt-2'>
            {error}
        </div>
        )}
        <div className='flex flex-row justify-center items-center gap-2 mt-5'>
        <p className='text-xs font-light text-center '>Already have an account ? </p>
        <Link
        to='/login'
        className="font-medium text-yellow-400 hover:underline"
        >
            Log in
        </Link>
        </div>
    </motion.div>
    );
}