import { Fragment } from "react";
import Link from "next/link";
import { FaRegEnvelope} from "react-icons/fa";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-2">No More Procrastination.</h1>
      <div className="border-3 border-solid w-20 border-slate-200 mb-2"></div>
      <p className="text-1.8xl mb-5">Get Lucky and Get Things Done.</p>
      <div className="flex flex-col text-2xl bg-indigo-600 w-1/4 text-white rounded-2xl shadow-2xl py-6 text-center">
          <div className="w-11/12 bg-gray-100  py-2 flex mb-2 bg-gray-100 outline-none flex-1 mb-3 rounded-2xl" stakeholder="Username">
            <FaRegEnvelope className="text-gray-400 m-2"></FaRegEnvelope>
            <input type="email" name="email" placeholder="Email" className="bg-gray-100 w-10/12" />
          </div>
          <div className="w-11/12 bg-gray-100 w-80 py-2 flex item-center mb-2 bg-gray-100 outline-none flex-1 mb-3  rounded-2xl" stakeholder="Username">
            <FaRegEnvelope className="text-gray-400 m-2"></FaRegEnvelope>
            <input type="password" name="password" placeholder="Password" className="bg-gray-100 w-10/12" />
          </div>
          <button className="border-2 border-white rounded-2xl px-12 py-2 font-semibold hover:bg-white hover:text-indigo-600">Login</button>
        
      </div>
    </main>
  );
}
