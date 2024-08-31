import { Customer } from "@/types/types";
import DeleteIcon from '../../../public/images/delete_icon.png'
import Image from "next/image";

interface TableElementProps {
    customer: Customer,
    additionalStyles?: string,
    handleDelete: (id: number) => void,
};

export default function TableElement({ customer, additionalStyles, handleDelete}: TableElementProps) {
  return <div className={`flex justify-between items-center px-12 ${additionalStyles} py-3`}>
    <p className="w-32">#{customer.trackingID}</p>
    <div className="flex w-32 items-center">
        <Image src={customer.productImage} width={30} height={30} alt="product image"/>
        <p className="ml-2">{customer.productName}</p>
    </div>
    <p className="w-32">{customer.customer}</p>
    <p className="w-32">{(customer.date).toString()}</p>
    <p className="w-32">${customer.amount}</p>
    <p className="w-32">{customer.paymentMode}</p>
    {customer.status === 'Delivered' ? <p className="w-32 rounded-full text-green-500 bg-green-500 bg-opacity-45 py-2  text-center">{customer.status}</p> : customer.status === 'Process' ? <p className="w-32 rounded-full text-orange-400 bg-orange-400 bg-opacity-45 py-2 text-center">{customer.status}</p> : customer.status === 'Cancelled' && <p className="w-32 rounded-full text-red-500 bg-red-500 bg-opacity-45 text-center py-2">{customer.status}</p>}
    
    <div className="flex w-32 items-center justify-center">
        <Image src={DeleteIcon} width={20} height={20} alt="delete" onClick={() => handleDelete(customer.trackingID)}/>
    </div>
  </div>;
}
