import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Home } from 'lucide-react'
import { useTranslation } from 'react-i18next';

interface CardProps{
    title:string;
    description:string;
}
export default function ProjectCard({title,description}:CardProps) {
    const {t} = useTranslation();
  return (
    <Card>
    <CardHeader>
      <Home/>
      <CardTitle>{t(title)}</CardTitle></CardHeader>
    <CardContent>
      <CardDescription>
        {t(description)}
    </CardDescription>
    </CardContent>
  </Card>
  )
}
