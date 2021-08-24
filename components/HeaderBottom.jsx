import React from 'react';
import Link from 'next/link';
import classes from './HeaderBottom.module.scss';
import SidebarForOtherPage from '../UI/SidebarForOtherPage/SidebarForOtherPage';

const HeaderBottom = ({ show, isShow }) => {
  const data = [
    {
      title: 'commercial vehicle',
      path: '/commercial',
    },
    {
      title: 'public vehicle',
      path: '/public',
    },
    {
      title: 'motor servicing',
      path: '/motor',
    },
    {
      title: 'garage equipment',
      path: '/garage',
    },
    {
      title: 'spare parts',
      path: '/spare',
    },
    {
      title: 'electric motorcycle',
      path: '/electric',
    },
    {
      title: 'forklit/stacker',
      path: '/forklit',
    },
    {
      title: 'construction machinary',
      path: '/construction',
    },
    {
      title: 'special vehicle',
      path: '/special',
    },
  ];

  return (
    <>
      <div className="relative z-50 w-full text-white bg-gradient-to-br from-akij-blue to-akij-lblue">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="pl-2 pr-3 text-xl cursor-pointer " onClick={show}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="48"
                    d="M88 152h336M88 256h336M88 360h336"
                  ></path>
                </svg>
              </div>
              <p className="hidden px-2 text-sm font-bold uppercase md:block">
                Categories
              </p>
            </div>

            <div className="flex items-center py-2 space-x-2 overflow-scroll font-bold scrollbar-hide">
              {data.map((item, i) => (
                <Link href={item.path} key={i}>
                  <a className="px-2 font-medium uppercase cursor-pointer sub-button hover:text-akij-red">
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .sub-button {
            font-size: 10px;
          }
        `}</style>
      </div>

      <div
        className={
          isShow
            ? `${classes.isVisible} ${classes.active}`
            : `${classes.isVisible}`
        }
      >
        <SidebarForOtherPage />
      </div>
    </>
  );
};

export default HeaderBottom;
