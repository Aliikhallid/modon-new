import { Link } from "react-router-dom";

interface ItemProps{
  Links:{name:string , link:string}[]
  title:string
}

const Item = ({ Links, title }:ItemProps) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-lg">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Link
            className="text-gray-400 hover:text-primary duration-300
          text-sm cursor-pointer leading-6"
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;