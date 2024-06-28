import React from "react";
import Logo from "../Image/Logo.png"
import Icon1 from "../Image/icon1.png"
import Icon2 from "../Image/icon2.png"
import Icon3 from "../Image/icon3.png"
import Icon4 from "../Image/icon4.png"
import Icon5 from "../Image/icon5.png"
import Icon6 from "../Image/icon6.png"
import Icon7 from "../Image/icon7.png"
import Icon8 from "../Image/icon8.png"

const Left=()=>{
    return(
        <div className="py-[30px] pl-[30px] ">
            <div className="flex flex-row">
                <img src={Logo} alt="Logo" className=""/>
                <p className="text-[22px] font-bold pl-[15px] text-customGreen pt-[3px]"><span className=" text-customBlue">TASK</span><span className="text-customOrange">MAN</span>IO</p>
            </div>
            <div className="pt-[50px] pl-[25px] mb-[357px]">
                <div className="text-customBlue flex flex-row border-r-[4px] border-r-customBlue pr-[60px] ">
                    <img src={Icon1} alt="Icon1"/>
                    <p className="pl-[15px] font-bold">Dashboard</p>
                </div>
                <div className="text-customGrey flex flex-row pr-[60px] mt-[30px] ">
                    <img src={Icon2} alt="Icon2" className="w-[30px]"/>
                    <p className="pl-[15px] pt-[2px]">All Activity</p>
                </div>
                <div className=" text-customGrey flex flex-row pr-[60px] mt-[30px] ">
                    <img src={Icon3} alt="Icon3" className="w-[30px]"/>
                    <p className="pl-[15px] pt-[2px]">Calender</p>
                </div>
                <div className=" text-customGrey flex flex-row pr-[60px] mt-[30px] ">
                    <img src={Icon4} alt="Icon4" className="w-[30px]"/>
                    <p className="pl-[15px] pt-[2px]">Projects</p>
                </div>
                <div className=" text-customGrey flex flex-row pr-[60px] mt-[30px] ">
                    <img src={Icon5} alt="Icon5" className="w-[30px]"/>
                    <p className="pl-[15px] pt-[2px]">Members</p>
                </div>
                <div className=" text-customGrey flex flex-row pr-[60px] mt-[30px] ">
                    <img src={Icon6} alt="Icon6" className="w-[30px]"/>
                    <p className="pl-[15px] pt-[2px]">Settings</p>
                </div>
                <div className=" text-customGrey flex flex-row pr-[60px] mt-[30px] ">
                    <img src={Icon7} alt="Icon7" className="w-[30px]"/>
                    <p className="pl-[15px] pt-[2px]">Logout</p>
                </div>
            </div>
            <button className="flex flex-row bg-customBlue  py-[10px] px-[33px] mr-[30px] rounded-lg ml-[-5px]"><img src={Icon8} alt="Icon8" className="mr-[5px]"/><p className="text-white font-bold text-[15px]">New Project</p></button>
        </div>
    );
}

export default Left;