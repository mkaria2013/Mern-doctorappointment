// import React from 'react';
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return   <div>
    <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className="tect-irisBlueColor font-bold tect-[24px] leading-9">
                Muhibar Rahman</span>
            </h3>
       <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt blanditiis consequatur non et. Iusto, aliquid. Laudantium nemo tenetur iste deleniti pariatur corporis, eaque reprehenderit, praesentium assumenda, consectetur explicabo enim quae quibusdam accusamus ipsa iusto doloribus qui. Amet, sequi dolore eligendi dolor autem rem rerum! Earum quo dolores repellat optio?
       </p>     
    </div>
    <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Education
            </h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                          {formateDate("9-13-2014")} -  {formateDate("9-13-2016")}
                        </span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          New Apollo Hospital, New York.
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        {formateDate("07-04-2010")} -  {formateDate("9-13-2014")}
                        </span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          New Apollo Hospital, New York.
                    </p>
                </li>

            </ul>

    </div>
     <div className="mt-12">
     <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor tect-[15px] leading-6 font-semibold">
                    {formateDate("07-04-2010")} -  {formateDate("9-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          New Apollo Hospital, New York.
                    </p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor tect-[15px] leading-6 font-semibold">
                    {formateDate("07-04-2010")} -  {formateDate("9-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          New Apollo Hospital, New York.
                    </p>
                </li>


            </ul>

     </div>
    </div>;
  
};

export default DoctorAbout;