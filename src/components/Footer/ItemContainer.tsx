import { EnvelopeOpenIcon, MobileIcon } from "@radix-ui/react-icons";
import Item from "./Item";
import { PROJECTS,QuickLinks} from "./data";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
          <ul>
      <h1 className="mb-1 font-semibold text-lg">ABOUT MODON</h1>
    
        <li >
          <p
            className="text-gray-400 hover:text-primary duration-300
          text-sm cursor-pointer leading-6"
          >
            Modon knows no boundaries for leadership.
            We work today to shape the future.
          </p>
        </li>
      
    </ul>
      <Item Links={PROJECTS} title="OUR PROJECTS" />
      <Item Links={QuickLinks} title="QUICK LINKS" />
      <ul>
      <h1 className="mb-1 font-semibold text-lg">HEAD OFFICE</h1>
    
        <li >
          <p
            className="text-gray-400 hover:text-primary duration-300
          text-sm cursor-pointer leading-6"
          >
Al Mamoon District, Al Nossor Area Near
Baghdad Tower, Baghdad, Iraq.
          </p>
        </li>
        <li >
          <p
            className="text-gray-400 hover:text-primary duration-300
          text-sm cursor-pointer leading-6 flex items-center gap-2"
          >
<MobileIcon height={16} width={16} />  +964 770 0300 005
          </p>
        </li>
        <li >
          <p
            className="text-gray-400 hover:text-primary duration-300
          text-sm cursor-pointer leading-6 flex items-center gap-2"
          >
<EnvelopeOpenIcon height={16} width={16} />  info@modoniq.com
          </p>
        </li>
      
    </ul>
    </div>
  );
};

export default ItemsContainer;