import React from "react";
import Search from "../Image/Search.png"
import Notification from "../Image/Notification.png"
import Icon9 from "../Image/icon9.png"
import Image1 from "../Image/Image1.png"
import Icon10 from "../Image/icon10.png"
import Icon11 from "../Image/icon11.png"
import Image2 from "../Image/Image2.png"
import Image3 from "../Image/Image3.png"
import Icon12 from "../Image/icon12.png"
import Icon13 from "../Image/icon13.png"
import Image4 from "../Image/Image4.png"
import Card from "../Image/Card.png"

const Center=()=>{
    return(
        <div className=" bg-[#EEEEEE] w-[920px]">
            <div className="my-[40px] mx-[40px] flex flex-row justify-between">
                <div className="pt-[5px]"><p className="text-black text-[24px] font-bold">Dashboard</p></div>
                <div className="flex flex-row pt-[-10px]">
                    <img src={Search} alt="Search" className="mr-[10px]"/>
                    <img src={Notification} alt="Notification" className="mr-[10px]"/>
                    <img src={Icon9} alt="Icon9"/>
                </div>
            </div>
            <div className="mt-[20px] mx-[40px] flex flex-row justify-between">
                <div className=" bg-customBlack  h-[60px] flex flex-row rounded-lg  ">
                    <div className="flex flex-row mt-[16px] mx-[10px] ">
                        <img src={Image1} alt="Image1" className="w-[16px] h-[16px] mt-[5px] ml-[6px]"/>
                        <p className="text-[20px] font-semibold pl-[15px] mt-[-4px]">To Do List</p>
                    </div>
                    <div className="w-[33px] h-[33px] mt-[12px] ml-[70px] mr-[20px] text-center text-white bg-black rounded-full pt-[4px]">
                        3
                    </div>
                </div>
                <div className=" bg-customBlack  h-[60px] flex flex-row rounded-lg  ">
                    <div className="flex flex-row mt-[16px] mx-[10px] ">
                        <img src={Image1} alt="Image1" className="w-[16px] h-[16px] mt-[5px] ml-[6px]"/>
                        <p className="text-[20px] font-semibold pl-[15px] mt-[-4px]">Review</p>
                    </div>
                    <div className="w-[33px] h-[33px] mt-[12px] ml-[70px] mr-[30px] text-center text-white bg-black rounded-full pt-[4px]">
                        2
                    </div>
                </div>
                <div className=" bg-customBlack  h-[60px] flex flex-row rounded-lg ">
                    <div className="flex flex-row mt-[16px] mx-[10px] ">
                        <img src={Image1} alt="Image1" className="w-[16px] h-[16px] mt-[5px] ml-[6px]"/>
                        <p className="text-[20px] font-semibold pl-[15px] mt-[-4px]">Complete</p>
                    </div>
                    <div className="w-[33px] h-[33px] mt-[12px] ml-[70px] mr-[10px] text-center text-white bg-black rounded-full pt-[4px]">
                        2
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row">
                <div className="mt-[20px] mx-[40px]">
                    <div className=" bg-white px-[20px] py-[25px] w-[265px] ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon10} alt="Icon10"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className="text-customBlue">Mobile App</span> - Create a design for Flight Ticket in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customBlue px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">22 Jun 2021</p></button>
                        </div>
                    </div>
                    <div className=" bg-white px-[20px] py-[25px] w-[265px] mt-[20px] ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon12} alt="Icon12"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className=" text-customOrange">Website</span> - Create a design for Task Management in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customOrange px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">27 Jun 2021</p></button>
                        </div>
                    </div>
                    <div className=" bg-white px-[20px] py-[25px] w-[265px] mt-[20px] ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon13} alt="Icon13"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className=" text-customGreen">Dashboard</span> - Create a design for Cryptocurrency in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customGreen px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">29 Jun 2021</p></button>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <button><img src={Image4} alt="Image4" className="w-[265px] mb-[20px]"/></button>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className=" bg-white px-[20px] py-[25px] w-[245px]  ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon12} alt="Icon12"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className=" text-customOrange">Website</span> - Create a design for Online Course in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customOrange px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">26 Jun 2021</p></button>
                        </div>
                    </div> 
                    <div className=" bg-white px-[20px] py-[25px] w-[245px] mt-[20px] ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon10} alt="Icon10"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className="text-customBlue">Mobile App</span>-Create a design for Concert Ticket in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customBlue px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">21 Jun 2021</p></button>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <img src={Card} alt="Card" className="h-[200px] w-[245px]"/>
                    </div>
                    <div className="mt-[20px]">
                        <img src={Image4} alt="Image4" className="h-[52px]"/>
                    </div>
                </div>
                <div className="mt-[20px] ml-[30px]">
                    <div className=" bg-white px-[20px] py-[25px] w-[265px]  ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon13} alt="Icon13"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className=" text-customGreen">Dashboard</span> - Create a design for Task Manager in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customGreen px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">28 Jun 2021</p></button>
                        </div>
                    </div> 
                    <div className=" bg-white px-[20px] py-[25px] w-[265px] mt-[20px] ">
                        <div className="flex flex-row justify-between">
                            <img src={Icon10} alt="Icon10"/>
                            <img src={Icon11} alt="Icon11"/>
                        </div>
                        <div className="mt-[15px]">
                            <p className="text-[16px] font-medium">
                                <span className="text-customBlue">Mobile App</span> - Create a design for Groceries in Figma
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[20px]">
                            <img src={Image2} alt="Image2" className="w-[75px] h-[30px]"/>
                            <button className=" bg-customBlue px-[10px] py-[8px] flex flex-row rounded-xl"><img src={Image3} alt="Image3" className=" mr-[4px] "/><p className="text-white font-bold text-[10px]">22 Jun 2021</p></button>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <img src={Card} alt="Card" className="w-[265px] h-[200px]"/>
                    </div>
                    <div className="mt-[20px]">
                        <button><img src={Image4} alt="Image4" className="w-[265px] mb-[20px]"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Center;