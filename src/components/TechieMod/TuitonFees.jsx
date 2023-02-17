import React from "react";

const TuitonFees = () => {
  return (
    <div className="bg-[#C83898]/10 mt-10 pb-20">
      <div className=" ml-20 pt-20">
        <h1 className="text-4xl  text-start">Tuition Fees</h1>
        <p className="text-[#7A7A7A] text-sm mt-4">
          Switching careers can be challenging, and we understand. We’re here to
          provide you with the flexibility you need.
        </p>
        <section className="flex flex-col gap-4 place-center md:flex-row  justify-around mt-10">
          <div className="bg-white border-[#C83898] border-2  px-2 rounded-2xl w-[400px] md:w-[250px] h-[200px] flex flex-col items-center ">
            <p className="text-[#4D4E4E] text-2xl mt-4">Full Tuiton</p>
            <h1  className="text-[#C83898] text-4xl">Ksh. 50,000</h1>
            <p className="text-[#4D4E4E] text-2xltext-sm mt-4">one time full payment</p>
          </div>
          <div className="bg-white border-[#C83898] border-2  px-2 rounded-2xl w-[400px] md:w-[250px] h-[200px] flex flex-col items-center ">
            <p className="text-[#4D4E4E] text-2xl mt-4">Installments plan</p>
            <h1  className="text-[#C83898] text-4xl">Ksh. 18,000</h1>
            <p className="text-[#4D4E4E] text-2xltext-sm mt-4">one time full payment</p>
          </div>
          <div className="bg-white border-[#C83898] border-2  px-2 rounded-2xl w-[400px] md:w-[250px] h-[200px] flex flex-col items-center ">
            <p className="text-[#4D4E4E] text-2xl mt-4">Talk to us</p>
           
            <button className="text-[#C83898] border-2 border-[#C83898] px-4 rounded-3xl text-2xl mt-10">Contact us</button>
          </div>
         
        </section>
      </div>
    </div>
  );
};

export default TuitonFees;
