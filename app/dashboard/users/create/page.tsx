import { fetchData } from "@/app/api/data/ data"
import Form from "@/app/ui/users/create-user";

export default async  function Page (){

    const Users = await fetchData();


    return (
        <main>
            <h1>this is the form user </h1>
<Form user={Users} />
        </main>
    )
}