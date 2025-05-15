'use server';

import  { z} from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const FromSchema = z.object({
  name: z.string(),
  email: z.string(),
  amount: z.number(),
  status: z.enum(['Paid', 'Pending']),
  payment: z.enum(['Debit', 'Credit']),
  id: z.number()

})
const createUsers = FromSchema.omit({id: true })
export async function createUser(formData: FormData) {

const  {name, email, amount, status, payment} = createUsers.parse({
   name: formData.get('user-name'),
        email: formData.get('user-email'),
        // active: formData.get('user-active'), it ll be automacally true not have to implemted by the user 
        amount: Number(formData.get('user-amount')),
        status: formData.get('user-status'),
        // picture will be automatic not by the user 
        payment: formData.get('user-payment')
   
      // Test it out:
      
})
const id = 31;
const date = 'some darte';
const plan ='Basic';
const active = true;
const picture = "https://logo.clearbit.com/simplemachines.org";

// here i have to update the data to my database 
await fetch('https://retoolapi.dev/rdy8zr/data', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }, 
  body: JSON.stringify({id, date, name, plan, email, active, amount, status, picture, payment})

})
revalidatePath('/dashboard/users');
redirect('/dashboard/users');
       
}

 //   "id": 1,
    // "date": "Apr 7, 2025 5:00 PM",
    // "name": "Herb Durrett",
    // "plan": "Basic Plan",
    // "email": "yslides4g@bbc.co.uk",
    // "active": true,
    // "amount": "50",
    // "status": "Paid",
    // "picture": "https://logo.clearbit.com/simplemachines.org",
    // "payment method": "Credit"