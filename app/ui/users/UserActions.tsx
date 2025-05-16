import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

export function UserActions({id}: {id: number}) {
 
  return (
    <td className="py-2 px-4 flex gap-2">
        <Link
      href={`/dashboard/users/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >

    </Link>
    <PencilIcon className="w-5" />
    </td>
  );
}
