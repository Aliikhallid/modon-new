import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { LucideProps } from 'lucide-react'
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps{
    title:string;
    description:string;
    icon?: FC<LucideProps>;
    isWide?: boolean;
}
export default function ProjectCard({title,description, icon: Icon}:CardProps) {
    const {t} = useTranslation();
  return (
    <Card className="card w-52">
    <CardHeader>
      {Icon && <Icon className='m-3 text-primary-color' height={45} width={45}/>}
      <CardTitle className='regular text-lg'>{t(title)}</CardTitle></CardHeader>
    <CardContent>
      <CardDescription className='light'>
        {t(description)}
    </CardDescription>
    </CardContent>
  </Card>
  )
}
