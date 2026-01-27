import { useState, useEffect } from "react";
import "@fontsource/arimo";
import "boxicons/css/boxicons.min.css";

const DepartmentsSection = () => {
  const [departments, setDepartments] = useState([]);
  const [showContent, setShowContent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/departments/with-employees")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="w-full min-h-625 flex justify-center">
      <div className="w-[95%]">
        <div className="text-center my-20 ">
          <h3 className="text-8xl">Departments</h3>
        </div>
        <div className="flex flex-col">
          {departments.map((dept) => (
            <div key={dept.id}>
              <button
                onClick={() => setShowContent(dept)}
                className="h-60 border-b flex w-full font-sans p-7 hover:bg-black transition-all duration-300 ease-out hover:text-white cursor-pointer"
              >
                <div className="text-4xl">
                  <p>{dept.id < 10 ? `0${dept.id}` : `${dept.id}`}</p>
                </div>
                <div className="flex justify-center w-full  items-center text-9xl">
                  <h3>{dept.name}</h3>
                </div>
              </button>
              <div className="">
                {showContent && (
                  <div className="fixed inset-0 flex justify-center">
                    <div className="bg-black mt-1560 w-[95%] max-w-640 sticky">
                      <div className="flex justify-end text-white  text-4xl p-10">
                        <button
                          className="cursor-pointer"
                          onClick={() => setShowContent(null)}
                        >
                          <i className="bx bx-x"></i>
                        </button>
                      </div>
                      <div className="text-white ">
                          <div className="flex border-t border-b h-50 ">
                            <div className="text-4xl w-[5%] p-10">
                              <p>{showContent.id < 10 ? `0${showContent.id}`: `${showContent.id}`}</p>
                            </div>
                            <div className="text-8xl w-[50%] flex items-center">
                              <h3>{showContent.name}</h3>
                            </div>
                            <div className="text-2xl flex w-[55%] items-center">
                              <p>{showContent.description}</p>
                            </div>
                          </div>
                            {showContent.employees && showContent.employees.length > 0 ? (showContent.employees.map((emp) => (
                            <div key={emp.id} className="border-b pb-6">
                              <div className="flex h-50 text-6xl items-center p-10 relative">
                                <p className="w-[50%]">{emp.role}</p>
                                <div className="w-[50%] relative group">
                                  <h4 className="">{emp.name}</h4>
                                  <img
                                    src={emp.video_src}
                                    className=" absolute mt-[-16%] ml-[-40%] w-100 h-90 object-cover opacity-0 scale-100 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 rounded-xl shadow-xl
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                            ))
                          ) : (
                            <p className="text-6xl flex justify-center h-250 items-center">
                              No employees in this department.
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;