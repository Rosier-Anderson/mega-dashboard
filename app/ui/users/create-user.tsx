import { createUser } from "@/app/lib/actions";
import { DataType } from "@/app/lib/definitions";

export default function Form({
   user,
  }: {
   user : DataType[];
  }){
    return (
    <form className='flex flex-col gap-2' action={createUser}>
          <label htmlFor="user-payment">Choose an payment method</label>
                <select name="user-payment" id="create-form">
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
        </select>
        <label htmlFor="user-status">Choose the status of the payment</label>
                <select name="user-status" id="create-form">
                
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
        </select>
                    <label htmlFor="user-email">user email</label>
            <input className="bg-gray-300" name="user-email" type="email" />
            <label htmlFor="user-name">user name</label>
            <input className="w-20 h-4 bg-gray-300" name="user-name" type="text" />
            <label htmlFor="user-amount">amount</label>
            <input className="w-20 h-4 bg-gray-300" name="user-amount" type="number" />

        <button className='bg-blue-500 w-20 h-5 rounded ' type="submit">Create</button> 
     
    </form>
          
 
    )
}