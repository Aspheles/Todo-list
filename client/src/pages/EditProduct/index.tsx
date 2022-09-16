import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import "./index.css";
import {TProduct} from "../../interfaces/global_interfaces";

const EditProduct = () => {
  const navigate = useNavigate();

  // const productData = { name: '', category: '', description: '', price: 0, img_url: ''};
  // const [product, setProduct] = useState<{name:string, description:string, category:string, price:number, img_url:string}>();
  const [product, setProduct] = useState<Partial<TProduct>>({ name: '', description: '', category: '', price: 0, img_url: '' });

  const addItem = () => {
    axios.post('http://localhost:3001/createitem', product).then(response => {

      if (response.status === 201) {
        toast.success("Item has been created");
        navigate("/products");
      } else {
        console.log(response);
        toast.error(response.data);
        
      }
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
              Edit Item
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="text" className="sr-only">
                  product name
                </label>
                <input
                  id="product-name"
                  name="product-name"
                  type="text"

                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Product name"
                  value={product?.name}
                  onChange={e => setProduct({ ...product, name: e.target.value })}
                />
              </div>
              <div className="pt-3">

                <select onChange={e => setProduct({ ...product, category: e.target.value })} defaultValue={product?.category} id="countries" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option value={""}>Choose a category</option>
                  <option value="Tech">Tech</option>
                  <option value="Food">Food</option>
                  <option value="Games">Games</option>
                  <option value="Clothes">Clothes</option>

                </select>
              </div>
              <div className="pt-3">
                <label htmlFor="text" className="sr-only">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"

                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Description"

                  value={product?.description}
                  onChange={e => setProduct({ ...product, description: e.target.value })}
                />
              </div>
              <div className="pt-3">
                <label htmlFor="text" className="sr-only">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"

                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Price"
                  value={product?.price}
                  onChange={e => setProduct({ ...product, price: parseInt(e.target.value) })}
                />
              </div>
              <div className="pt-3">
                <label htmlFor="text" className="sr-only">
                  img_url
                </label>
                <input
                  id="img_url"
                  name="img_url"
                  type="text"

                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Img_url"

                  value={product?.img_url}
                  onChange={e => setProduct({ ...product, img_url: e.target.value })}
                />
              </div>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem()
                }}
                className="mt-2 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export { EditProduct }