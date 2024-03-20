import React from "react";
import homeImg from "../../assets/homeImg.png";
import service1 from "../../assets/service1.jpg";
import service3 from "../../assets/service3.jpg";
import service2 from "../../assets/service2.jpg";
import service4 from "../../assets/service4.jpg";
const Ourservice = () => {
  return (
    <div className="bg-servicescolor">
      <h2 className="mt-1 mb-5 text-center text-4xl">Our Service </h2>
      <div className="  flex   justify-center item-center  ">
        <div className=" w-5/6    ">
          <div className="flex  ">
            <img className="w-2/6" src={service2} alt="" />
            <div className="w-1/2 ml-3  justify-center  flex flex-col">
              <h3 className="font-bold">Personal Care Assistance</h3>
              <p>
                We offer a wide range of services to meet the unique needs of
                individuals with disabilities. From personal care assistance to
                medical support, our team is here to help.
              </p>
            </div>
          </div>
          <div className="flex     ">
            <div className="w-1/2 ml-3    justify-center  flex flex-col">
              <h3>Medical Support</h3>
              <p>
                Our personal care assistants provide support with daily
                activities such as bathing, dressing, and meal preparation. We
                strive to promote independence and enhance quality of life.
              </p>
            </div>
            <img className="w-2/6" src={service4} alt="" />
          </div>
          <div className="flex mb-4">
            <img className="w-2/6" src={service3} alt="" />
            <div className="w-1/2 ml-3  justify-center  flex flex-col">
              <h3>Transportation Services</h3>
              <p>
                Our skilled nurses and medical professionals offer comprehensive
                medical support, including medication management, wound care,
                and chronic disease management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
