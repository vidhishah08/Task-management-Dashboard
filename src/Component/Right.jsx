import React from "react";
import Image5 from "../Image/All_Member.png"
import Group_Chat from "../Image/Group_Chat.png"
import Icon14 from "../Image/icon14.png"
import Icon15 from "../Image/icon15.png"

const Right=()=>{
    return(
        <div className="mx-[30px] my-[30px]">
            <div className="flex flex-row ">
                <div className="mr-[120px]"><p className="text-[20px] font-bold">Member<span className=" text-customBlue">(20)</span></p></div>
                <div><p className="pt-[5px]">View all</p></div>
            </div>
            <img src={Image5} alt="Image5" className="my-[30px]"/>
            <div>
                <p className="text-[20px] font-bold">Group Chat</p>
            </div>
            <img src={Group_Chat} alt="Group_chat" className="mt-[40px]"/>
            <div className="flex flex-row">
                <input className=" bg-customBlack px-[20px] py-[15px] mt-[25px]" placeholder="Type a message"/>
                <img src={Icon14} alt="Icon14" className="w-[30px] h-[30px] mt-[35px] ml-[12px]"/>
                <img src={Icon15} alt="Icon15" className="w-[30px] h-[30px] mt-[35px] ml-[9px]"/>
            </div>
        </div>
    );
}

export default Right;