import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { LucideProps } from 'lucide-react'
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps{
    title:string;
    description:string;
    icon?: FC<LucideProps>;
}
export default function AboutCard({title,description, icon: Icon}:CardProps) {
    const {t} = useTranslation();
  return (
    <Card className='h-70'>
    <CardHeader>
      {Icon && <Icon className='m-1 text-white' height={45} width={45}/>}
      <CardTitle className='regular text-lg text-white'>{t(title)}</CardTitle></CardHeader>
    <CardContent>
      <CardDescription className='light text-white'>
        {t(description)}
    </CardDescription>
    </CardContent>
  </Card>
  )
}
