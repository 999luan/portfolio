import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "Todos";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-purple-700";
  if (active === value) className += " text-purple-700 ";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="Todos" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Javascript" {...props} />
      <NavItem value="Unity" {...props} />
      <NavItem value="Godot" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="NextJs" {...props} />
    </div>
  );
};

export default ProjectNavbar;
