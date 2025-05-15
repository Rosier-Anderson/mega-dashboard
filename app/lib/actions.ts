'use server';
export async function createUser(formData: FormData) {
    const rawFormData = {
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
    
        name: formData.get('user-name'),
        email: formData.get('user-email'),
        active: formData.get('user-active'),
        amount: formData.get('user-amount'),
        status: formData.get('user-status'),
        // picture will be automatic not by the user 
        payment: formData.get('user-payment')
      };
      // Test it out:
      console.log(rawFormData);
}