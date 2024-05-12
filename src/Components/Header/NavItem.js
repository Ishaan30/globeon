import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll/modules";

const NavItem = ({ item, icons }) => {
  return (
    <Link
    activeClassName="block bg-indigo-700 text-white"
    to={item.id}
    spy={true}
    offset={-10}
    smooth={true}
    duration={1000}
    >
      <span
        onClick={item.clicked}
        className={"flex items-center p-4 md:px-1.5 lg:px-4 md:py-1.5 hover:bg-purple-900 hover:text-white hover:rounded-full " + (item.class)}
        onKeyDown={item.clicked}
        role="button"
        tabIndex="0"
      >
        {icons && (
          <span className="mr-2">
            <FontAwesomeIcon className="text-lg" icon={item.icon} />
          </span>
        )}
        <span className="block px-3 py-0.5 rounded-md text-base font-semibold md:font-black">
          {item.name}
        </span>
      </span>
    </Link>
  ) 
};
export default NavItem;
