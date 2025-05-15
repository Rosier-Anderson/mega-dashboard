'use server';
import  { z} from 'zod';
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
console.log(name,email, amount, status, payment)
       
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