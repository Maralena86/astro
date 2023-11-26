import { SHA256 } from 'crypto-js';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import logo from '@/public/logo-nubia.png';

export const Login = ({
  setAccess,
}: {
  setAccess: Dispatch<SetStateAction<boolean>>;
}) => {
  const [code, setCode] = useState('');
  // const handleClick = () => {
    
  //   const hash = SHA256(code).toString();
  //   console.log(code);
  //   if (
  //     hash ===
  //     'f1264fe082ef163498687cf3d9ba5f33ea3a56c46a22c83bd50d0c8cd2059e02'
  //   ) {
  //     setAccess(true);
  //   } else {
  //     alert('Código incorrecto');
  //   }
  // }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-h-1/2 bg-dark  rounded-2xl border border-gray-900">
        <div className="md:mx-34 mx-4 mx-auto flex flex-col  items-center space-y-4 py-16 font-semibold text-gray-500 sm:mx-24 lg:mx-56">
          <Image src={logo} alt={'logo'} width={150} />
          <h1 className="text-2xl text-white">Conexion de acceso</h1>
          <input
            className="w-full rounded-md border border-gray-700 bg-gray-900 p-2 "
            placeholder="Código"
            type="text"
            onChange={(e) => 
              setCode(e.target.value)
            }
            name="correo"
            id=""
          />
          <button
            className="w-full rounded-full border border-blue-950 bg-blue-950 p-2 font-bold text-gray-100 hover:bg-blue-800"
            // onClick={handleClick}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
