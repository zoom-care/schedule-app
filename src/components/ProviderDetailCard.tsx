
import Icon from '../assets/stethoscopeIcon.png';

export const ProviderDetailCard = ({provider, isNotExist, startTimeFormatted} : any) => {
  return (
    <div className="flex gap-5 items-center">
      <div>
        <img src={Icon} width="59" className="inline object-cover bg-sky-100 rounded-full" alt="Stetoscophe" />
      </div>
      <div>
        <p className="font-bold text-sky-500 ">{provider.name}  {provider.credentials}</p>
        <p>{provider.phoneNumber}</p>
        <button disabled={isNotExist} className="p-2 bg-gray-800 rounded-md text-white w-36 hover:opacity-75 hover:ring-2 disabled:bg-gray-500">{startTimeFormatted}</button>
      </div>
    </div>
  )
}
