// import { Fragment } from 'react';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

// import { sideBarData as sidebarData } from '../../../sidebardata';
// import classes from './Sidebar.module.scss';

// const Sidebar = () => {
//   return (
//     <div className={classes.sidebar}>
//       <ProSidebar>
//         {sidebarData.map((menu, ind) => {
//           return (
//             <Menu iconShape="square" key={ind}>
//               <SubMenu title={menu.name}>
//                 {menu.subMenu.map((subMenu, ind) => {
//                   return (
//                     <Fragment key={ind}>
//                       {!subMenu.DeepSubMenu && (
//                         <MenuItem>{subMenu.name}</MenuItem>
//                       )}

//                       {subMenu.DeepSubMenu && (
//                         <Menu iconShape="round" key={ind}>
//                           <SubMenu title={menu.name}>
//                             {subMenu.DeepSubMenu &&
//                               subMenu.DeepSubMenu.map((deepMenu, ind) => {
//                                 return (
//                                   <MenuItem key={ind}>{deepMenu.name}</MenuItem>
//                                 );
//                               })}
//                           </SubMenu>
//                         </Menu>
//                       )}
//                     </Fragment>
//                   );
//                 })}
//               </SubMenu>
//             </Menu>
//           );
//         })}
//       </ProSidebar>
//     </div>
//   );
// };

// export default Sidebar;

import { useState } from 'react';
import Link from 'next/link';
// import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { sideBarData } from '../../../sidebardata';
import classes from './Sidebar.module.scss';

const Sidebar = () => {
  const [subMenu, setSubMenu] = useState(false);
  // const [menu, setMenu] = useState(sideBarData);

  // const handleChange = () => {
  //   setSubMenu(!subMenu);
  // };

  // const uniqueOne = sideBarData.find((item) => item.name === menu.name);

  // console.log('unique :', uniqueOne, 'menu :', subMenu);

  return (
    <div className={classes.sidebar}>
      {sideBarData.map((menu) => (
        <>
          <Link href={menu.url} passHref key={menu.name}>
            <a
              className={classes.sidebarLink}
              // onMouseEnter={menu.subMenu && handleChange}
            >
              <span className={classes.sidebar__Label}>{menu.name}</span>

              {menu.subMenu
                ? menu.iconClosed
                : menu.subMenu
                ? menu.iconOpen
                : null}
            </a>
          </Link>

          {/* {subMenu &&
            menu.subMenu.map((item) => {
              return (
                <>
                  <Link href={item.url}>
                    <a className={classes.sidebarLink}>
                      <span>{item.name}</span>

                      {menu.subMenu.DeepSubMenu
                        ? menu.iconOpen
                        : menu.subMenu
                        ? menu.iconClosed
                        : null}
                    </a>
                  </Link>
                </>
              );
            })} */}
        </>
      ))}
    </div>
  );
};

export default Sidebar;
