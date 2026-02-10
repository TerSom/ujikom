import FormDepartments from "../component/sectionDepartments/FormDepartments";
import ListDepartments from "../component/sectionDepartments/ListDepartments";
import { useEffect, useState } from "react";

const Department = () => {

  return (
    <>
      <div className="flex justify-center h-screen w-full bg-gray-100">
        <section className="w-700 p-6">
          <h1 className="text-4xl font-bold">Departments</h1>
          <FormDepartments/>
          <ListDepartments/>
        </section>
      </div>
    </>
  );
};

export default Department;
