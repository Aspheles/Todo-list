import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {User} from "../../../interfaces/global_interfaces";
import { toast } from 'react-hot-toast';

const Register = () => {
  const [user, setUser] = useState<Partial<User>>({username: '', email: '', password: '', repeatPassword: ''});
  const navigate = useNavigate();


  const AddUser = () => {
    if(user.password !== user.repeatPassword){
      toast.error("Passwords are not matching");
      return;
    }

    axios.post("http://localhost:3001/register", user).then(response => {
      if(response.status === 201){
        toast.success("Account has been created");
        navigate("/login");
      }else{
        toast.error(response.data);
      }
    }).catch(error => {
      throw(error);
    })
  }


  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
               Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            

            
            <div className="-space-y-px rounded-md shadow-sm">
              {/* Username */}
            <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="username"
                  value={user?.username}
                  onChange={e => setUser({ ...user, username: e.target.value })}
                />
              </div>
                {/* Email */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={user?.email}
                  onChange={e => setUser({ ...user, email: e.target.value})}
                />
              </div>
              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={user?.password}
                  onChange={e => setUser({ ...user, password: e.target.value})}
                />
              </div>

              {/* Repeat Password */}

              <div>
                <label htmlFor="password" className="sr-only">
                  Repeat Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Repeat Password"
                  value={user?.repeatPassword}
                  onChange={e => setUser({ ...user, repeatPassword: e.target.value})}
                />
              </div>
            </div>

            

            <div>
            <p className="text-sm text-black-600"> Already have an account? <button className="font-medium text-indigo-600 hover:underline dark:text-primary-500"><Link to={"/login"}>Sign in</Link></button> </p>
              <button onClick={(e) => {
                e.preventDefault(); AddUser();}} className="mt-2 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export {Register};