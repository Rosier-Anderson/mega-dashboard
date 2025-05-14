import { createUser } from "@/app/lib/actions";
import { DataType } from "@/app/lib/definitions";

export default function Form({
   user,
  }: {
   user : DataType[];
  }){
    return (
    <form action={createUser}>
                <select name="form" id="create-form">
            <input type="number" />
            <input type="radio" />

        </select>
        <button type="submit"></button> 
     
    </form>
          
 
    )
}