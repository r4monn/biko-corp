import { CardContainer, CardHeader, CardFooter, Classification } from "./styles";
import avatar from '../../assets/avatar.png'
import Star from '../../assets/Star.svg'
import Google from '../../assets/google.svg'
import Twitter from '../../assets/Twitter.svg'

interface CardProps {
  autor: string
  content: string
}


export default function Card({ autor, content }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <img src={avatar} alt={autor} />
        <div>
          <strong>{autor}</strong>
          <Classification>
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <img src={Star} alt='' />
            <strong>5.0</strong>
          </Classification>
        </div>
      </CardHeader>
      <p>{content}</p>
      <CardFooter>
        <img src={Google} alt="Google" />
        <img src={Twitter} alt="Google" />
      </CardFooter>
    </CardContainer>
  )
}