import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../../../components/ui/Icon";

const Navmenu = ({ menus }) => {
  const location = useLocation();
  const locationName = location.pathname.replace("/", "");

  return (
    <>
      <ul>
        {menus.map((item, i) => (
          <li
            key={i}
            className={`single-sidebar-menu
              ${locationName === item.link ? "menu-item-active" : ""}`}
          >
            {!item.child && !item.isHeadr && (
              <NavLink className="menu-link" to={`/${item.link}`}>
                <span className="menu-icon flex-grow-0">
                  <Icon icon={item.icon} />
                </span>
                <div className="text-box flex-grow">{item.title}</div>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </NavLink>
            )}
            {item.isHeadr && !item.child && (
              <div className="menulabel">{item.title}</div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navmenu;


