import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
    const [itemproducts, setItemProducts] = useState<any>();

    useEffect(() => {
        axios.get('http://localhost:3001/items')
            .then(res => {
                setItemProducts(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        // <p>{JSON.stringify(products)}</p>
        <>

            {/* <div className="flex flex-col items-end  mt-3">
                <button className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-2 text-md rounded-md mr-2 ">Add Product</button>
            </div> */}
            <div className="overflow-x-auto relative flex justify-center items-center mt-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-dark-900 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">

                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {itemproducts?.map((item: { name: string; category: string; description: string; price: number; img_url: string; }) => {
                            return (
                                <tr key={item.name} className="bg-white border-b dark:bg-gray-50 dark:border-gray-50">
                                    <th scope="row" className="py-4 px-6 whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.category}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.description}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.price}
                                    </td>
                                    <td className="py px-6">
                                        <button style={{ "cursor": "pointer" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                                        </button>

                                        <button style={{ "cursor": "pointer" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>

                                        </button>


                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export { Products }