'use server';
export async function createUser(formData: FormData) {
    const rawFormData = {
       name: formData.get('name'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      };
      // Test it out:
      console.log(rawFormData);
}