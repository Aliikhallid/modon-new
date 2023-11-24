import { useTranslation } from 'react-i18next'

interface PrivacyPolicyProps{
    titleAndDescription:{title:string,description:string}[];

}

export default function InfoStructure({titleAndDescription}:PrivacyPolicyProps) {
    const {t} = useTranslation();
  return (
    <div className='w-full h-fit flex flex-col justify-start p-5 gap-4'>

        {titleAndDescription.map((pair, index) => (
        <div key={index} className='flex flex-col justify-start'>
            <div className='overview-p2 m-3 regular text-3xl text-primary-color'>
            {t(pair.title)} 
            </div>
            <div className="overview-d m-3 text-md">
            {t(pair.description)}
            </div>
        </div>
        ))}
        </div>
  )
}
