import FormDepartments from "../component/sectionDepartments/FormDepartments";
import ListDepartments from "../component/sectionDepartments/ListDepartments";
import { useEffect, useState } from "react";

const Department = () => {
  const [departements,setDepartments] = useState([])
  const [loading, setLoading] = useState(false);
  const API_BASE = "http://localhost:3000/api/departments"

  useEffect(() =>  {
    setLoading(true);
    fetch(API_BASE)
    .then((res) => res.json())
    .then((data) => {
      setDepartments(data.departements);
      setLoading(false);
    })
    .then((err) => console.log(err))
  },[])

  return (
    <>
      <div className="flex justify-center h-screen w-full bg-gray-100">
        <section className="w-700 p-6">
          <h1 className="text-4xl font-bold">Departments</h1>
          <FormDepartments />
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-600">Loading departments...</p>
              </div>
            </div>
          ) : (
            departements.map((dept) => (
              <div key={dept.id}>
                <ListDepartments 
                id={dept.id}
                nama={dept.name}
                description={dept.description}
                />
              </div>
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default Department;
