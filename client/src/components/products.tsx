import axios from "axios";
import { useState, useEffect} from "react";

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

 return(
    // <p>{JSON.stringify(products)}</p>
    <>
    

    <div className="overflow-x-auto relative flex justify-center items-center">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            </tr>
        </thead>
        <tbody>
           
                {itemproducts?.map((item: { name: string; category: string; description: string; price: number; img_url: string; }) => {
                return (
                    <tr key={item.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </th>
                        <td className="py-4 px-6">
                            { item.category }
                        </td>
                        <td className="py-4 px-6">
                            { item.description }
                        </td>
                        <td className="py-4 px-6">
                            { item.price }
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


export {Products}