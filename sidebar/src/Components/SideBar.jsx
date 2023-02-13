/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import {
  BsCalendarCheck,
  BsCardList,
  BsChatSquareText,
  BsPatchExclamation,
  BsReceipt,
  BsShop,
  BsStickies,
  BsTag
} from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";
import { IoChevronBackOutline, IoSettingsOutline } from "react-icons/io5";

const menuList = [
  {
    id: 1,
    name: "Dashboard",
    isNotifiTab: false,
    icon: <BsShop />,
  },
  {
    id: 2,
    name: "Project Task",
    isNotifiTab: false,
    icon: <BsCalendarCheck />,
  },
  {
    id: 3,
    name: "Schedule",
    isNotifiTab: false,
    icon: <BsReceipt />,
  },
  {
    id: 4,
    name: "Document",
    isNotifiTab: true,
    icon: <BsStickies />,
    notifiNumber: 6,
    notifiColor: "#3D6ADA",
  },
  {
    id: 5,
    name: "Mention",
    isNotifiTab: true,
    icon: <BsTag />,
    notifiNumber: 2,
    notifiColor: "#F164C1",
  },
  {
    id: 6,
    name: "Files",
    isNotifiTab: true,
    icon: <BsCardList />,
    notifiNumber: 50,
    notifiColor: "#bd111a",
    subItems: [
      {
        id: 11,
        subName: "Recent",
        notifiNumber: 16,
      },
      {
        id: 22,
        subName: "Sent",
        notifiNumber: 14,
      },
      {
        id: 33,
        subName: "Uploaded",
        notifiNumber: 4,
      },
      {
        id: 44,
        subName: "Draft",
        notifiNumber: 6,
      },
      {
        id: 55,
        subName: "Deleted",
        notifiNumber: 10,
      },
    ],
  },

  {
    id: 7,
    name: "Teams",
    isNotifiTab: false,
    icon: <BsChatSquareText />,
  },
];

const menuList2 = [
  {
    id: 8,
    name: "Help",
    isNotifiTab: false,
    icon: <BsPatchExclamation />,
  },
  {
    id: 9,
    name: "Setting",
    isNotifiTab: false,
    icon: <IoSettingsOutline />,
  },
];

function SideBar() {
  const [isShrinkView, setIsShrinkView] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = () => {
    setIsShrinkView(!isShrinkView);
  };
  const handleActive = (id) => {
    setActiveTab(id);
  };
  return (
    // sidebar wrapper
    <div
      className={`relative flex h-[95%] ${
        isShrinkView ? "w-[75px]" : "w-[280px]"
      } flex-col items-start rounded-md bg-white p-4 shadow transition-[all_0.5s_ease]`}
    >
      {/* menu icon */}
      <button
        type="button"
        onClick={handleClick}
        className={`absolute top-[6vh] right-[-11px] grid aspect-square w-6 cursor-pointer place-content-center rounded-full bg-white shadow-sm transition-[all_0.5s_ease]  hover:shadow-md ${
          isShrinkView ? "rotate-[180deg]" : "rotate-0"
        }`}
      >
        <IoChevronBackOutline />
      </button>
      {/* logo */}
      <div className="flex items-center gap-3  px-[2px]">
        <div className="grid h-10 w-10 place-content-center rounded-md bg-black text-2xl text-white">
          <CgInfinity />
        </div>
        <div
          className={`text-xl transition-[all_0.4s_ease] ${
            isShrinkView ? "opacity-0" : "opacity-1"
          } `}
        >
          <span className="font-bold">Infinity</span>Space
        </div>
      </div>
      {/* menu wrapper */}
      <div className="relative mt-6 flex w-full flex-1 flex-col ">
        {/* Top wrapper */}
        <ul className="flex-[1_1_auto]">
          {/* tab wrapper */}
          {menuList.map((tabValue) =>
            tabValue.subItems ? (
              <CollapseTab
                key={tabValue.id}
                tab={tabValue}
                isActive={activeTab === tabValue.id}
                handleActiveClick={() => handleActive(tabValue.id)}
                isShrinkView={isShrinkView}
                setIsShrinkView={setIsShrinkView}
              />
            ) : (
              <NormalTab
                key={tabValue.id}
                tab={tabValue}
                isActive={activeTab === tabValue.id}
                handleActiveClick={() => handleActive(tabValue.id)}
                isShrinkView={isShrinkView}
              />
            ),
          )}
        </ul>
        {/* bottom wrapper */}
        <ul className="flex-[0_1_auto]">
          {/* tab wrapper */}
          {menuList2.map((tabValue) =>
            tabValue.subItems ? (
              <CollapseTab
                key={tabValue.id}
                tab={tabValue}
                isActive={activeTab === tabValue.id}
                handleActiveClick={() => handleActive(tabValue.id)}
                isShrinkView={isShrinkView}
                setIsShrinkView={setIsShrinkView}
              />
            ) : (
              <NormalTab
                key={tabValue.id}
                tab={tabValue}
                isActive={activeTab === tabValue.id}
                handleActiveClick={() => handleActive(tabValue.id)}
                isShrinkView={isShrinkView}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
// normal tab
function NormalTab({ tab, isActive, handleActiveClick, isShrinkView }) {
  return (
    <li
      onClick={handleActiveClick}
      className=" flex w-full cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-black  "
      style={{
        backgroundColor: isActive ? "#EFEFEF" : "transparent",
        color: isActive ? "#000" : "#8b8d91",
      }}
    >
      <div
        className={`aspect-square p-0 text-xl ${isActive ? "#000" : "#8b8d91"}`}
      >
        {tab.icon}
      </div>
      <div
        className={`flex w-full items-center justify-between whitespace-nowrap transition-[all_0.4s_ease] ${
          isShrinkView ? "opacity-0" : "opacity-1"
        }`}
      >
        <h3 className="text-sm font-[500]">{tab.name}</h3>
        {tab.isNotifiTab ? (
          <div
            style={{
              backgroundColor: tab.notifiColor,
            }}
            className="grid h-5 w-5 place-items-center rounded-md text-xs font-[600] text-white "
          >
            {tab.notifiNumber}
          </div>
        ) : null}
      </div>
    </li>
  );
}

// collapse tab
function CollapseTab({
  tab,
  isActive,
  handleActiveClick,
  isShrinkView,
  setIsShrinkView,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const subTabClick = () => {
    setIsShrinkView(false);
    handleActiveClick();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        onClick={subTabClick}
        style={{
          backgroundColor: isActive ? "#EFEFEF" : "transparent",
          color: isActive ? "#000" : "#8b8d91",
        }}
        className="flex cursor-pointer items-center gap-3 rounded-md p-3 "
      >
        <div
          className={`aspect-square p-0 text-xl ${
            isActive ? "#000" : "#8b8d91"
          }`}
        >
          {tab.icon}
        </div>
        <div
          className={`flex w-full items-center justify-between whitespace-nowrap transition-[all_0.4s_ease] ${
            isShrinkView ? "opacity-0" : "opacity-1"
          }`}
        >
          <h3 className="text-sm font-[500]">{tab.name}</h3>
          {tab.isNotifiTab ? (
            <div className="relative flex items-center gap-2">
              <div
                style={{
                  backgroundColor: tab.notifiColor,
                }}
                className="grid h-5 w-5 place-items-center rounded-md text-xs text-white"
              >
                {tab.notifiNumber}
              </div>
              <div
                className={`grid h-5 w-5 rotate-90 place-items-center rounded-md bg-[#8b8d91] text-xs font-[600] text-white transition-[all_0.4s_ease] ${
                  isOpen ? "rotate-[270deg]" : "rotate-90"
                }`}
              >
                <IoChevronBackOutline />
              </div>
            </div>
          ) : null}
        </div>
      </li>
      {isOpen && !isShrinkView ? (
        <div className="scroll  relative mt-1 flex h-24 w-full flex-1 items-center gap-2 px-7">
          <div
            className={`h-full w-0.5  bg-gray-400 transition-[all_0.5s_ease]  ${
              isShrinkView ? "opacity-0" : "opacity-1"
            }`}
          />
          <ul
            className={`h-full flex-[1_1_auto]  transition-[all_6s_ease] ${
              isShrinkView ? "opacity-0" : "opacity-1"
            } `}
          >
            {tab.subItems.map((subTab) => (
              <li
                key={subTab.id}
                className="flex items-center justify-between  rounded-sm px-1 py-[0.1rem] hover:bg-[#e7e2e2] hover:text-white"
              >
                <h3 className="text-sm font-medium text-gray-400 ">
                  {subTab.subName}
                </h3>
                <div className="grid h-5 w-5 place-items-center rounded-md  text-xs font-medium text-gray-400 ">
                  {subTab.notifiNumber}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default SideBar;
