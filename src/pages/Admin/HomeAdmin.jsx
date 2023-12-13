import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const HomeAdmin = ({ title }) => {

  let navigate = useNavigate()
  let handleAddBoard = () => {
    navigate('/form')
  }

  return (
    <div className="flex justify-between flex-wrap items-center mb-6">
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
        {title}
      </h4>
      <div className="flex space-x-4 justify-end items-center rtl:space-x-reverse">
        <Button
          icon="heroicons-outline:plus"
          text="Add Admin"
          className="bg-slate-800 dark:hover:bg-opacity-70   h-min text-sm font-medium text-slate-50 hover:ring-2 hover:ring-opacity-80 ring-slate-900  hover:ring-offset-1  dark:hover:ring-0 dark:hover:ring-offset-0"
          iconclassName=" text-lg"
          onClick={() => handleAddBoard()}
        />
      </div>
    </div>
  );
};

export default HomeAdmin;
