# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// import { useState, useEffect } from "react";
// import "@fontsource/arimo";
// import "boxicons/css/boxicons.min.css";

// const DepartmentsSection = () => {
//   const [departments, setDepartments] = useState([]);
//   const [showContent, setShowContent] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState("");
//   const [selectedDept, setSelectedDept] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//   });

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = () => {
//     fetch("http://localhost:3000/api/departments/with-employees")
//       .then((res) => res.json())
//       .then((data) => setDepartments(data))
//       .catch((err) => console.log(err));
//   };

//   const openModal = (type, dept = null) => {
//     setModalType(type);
//     setSelectedDept(dept);
//     if (type === "edit" && dept) {
//       setFormData({
//         name: dept.name,
//         description: dept.description,
//       });
//     } else {
//       setFormData({ name: "", description: "" });
//     }
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setModalType("");
//     setSelectedDept(null);
//     setFormData({ name: "", description: "" });
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCreate = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/departments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         fetchDepartments();
//         closeModal();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleEdit = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/departments/${selectedDept.id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (response.ok) {
//         fetchDepartments();
//         closeModal();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/departments/${selectedDept.id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (response.ok) {
//         fetchDepartments();
//         closeModal();
//         setShowContent(null);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleSubmit = () => {
//     if (modalType === "create") {
//       handleCreate();
//     } else if (modalType === "edit") {
//       handleEdit();
//     } else if (modalType === "delete") {
//       handleDelete();
//     }
//   };

//   return (
//     <section className="w-full min-h-625 flex justify-center">
//       <div className="w-[95%]">
//         <div className="my-20 flex justify-between items-center">
//           <h3 className="text-8xl">Departments</h3>
//           <button
//             onClick={() => openModal("create")}
//             className="text-2xl bg-black text-white p-5 rounded-2xl cursor-pointer hover:bg-gray-800 transition-colors"
//           >
//             Add Departments
//           </button>
//         </div>
//         <div className="flex flex-col">
//           {departments.map((dept) => (
//             <div key={dept.id}>
//               <div
//                 onClick={() => setShowContent(dept)}
//                 className="h-60 border-b flex w-full font-sans p-7 hover:bg-black transition-all duration-300 ease-out hover:text-white cursor-pointer"
//               >
//                 <div className="text-4xl">
//                   <p>{dept.id < 10 ? `0${dept.id}` : `${dept.id}`}</p>
//                 </div>
//                 <div className="flex ml-20 justify-between w-full items-center text-9xl">
//                   <h3>{dept.name}</h3>
//                   <div className="text-2xl flex gap-10">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         openModal("delete", dept);
//                       }}
//                       className="rounded-xl p-5 w-50 cursor-pointer bg-[#ff0e0e] hover:bg-red-700 transition-colors"
//                     >
//                       Delete
//                     </button>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         openModal("edit", dept);
//                       }}
//                       className="rounded-xl p-5 w-50 cursor-pointer bg-blue-400 hover:bg-blue-500 transition-colors"
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="">
//                 {showContent && showContent.id === dept.id && (
//                   <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-40">
//                     <div className="bg-black mt-1000 w-[95%] max-w-640 sticky">
//                       <div className="flex justify-end text-white text-4xl p-10">
//                         <button
//                           className="cursor-pointer hover:text-gray-400 transition-colors"
//                           onClick={() => setShowContent(null)}
//                         >
//                           <i className="bx bx-x"></i>
//                         </button>
//                       </div>
//                       <div className="text-white">
//                         <div className="flex border-t border-b h-50">
//                           <div className="text-4xl w-[5%] p-10">
//                             <p>
//                               {showContent.id < 10
//                                 ? `0${showContent.id}`
//                                 : `${showContent.id}`}
//                             </p>
//                           </div>
//                           <div className="text-8xl w-[50%] flex items-center">
//                             <h3>{showContent.name}</h3>
//                           </div>
//                           <div className="text-2xl flex w-[55%] items-center">
//                             <p>{showContent.description}</p>
//                           </div>
//                         </div>
//                         {showContent.employees && showContent.employees.length > 0 ? (
//                           showContent.employees.map((emp) => (
//                             <div key={emp.id} className="border-b pb-6">
//                               <div className="flex h-50 text-6xl items-center p-10 relative">
//                                 <p className="w-[50%]">{emp.role}</p>
//                                 <div className="w-[50%] relative group">
//                                   <h4 className="">{emp.name}</h4>
//                                   <video
//                                     src={emp.video_src}
//                                     className="absolute mt-[-16%] ml-[-40%] w-100 h-90 object-cover opacity-0 scale-100 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 rounded-xl shadow-xl"
//                                     autoPlay
//                                     muted
//                                     loop
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           ))
//                         ) : (
//                           <p className="text-6xl flex justify-center h-250 items-center">
//                             No employees in this department.
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal untuk Create/Edit/Delete */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-white rounded-3xl w-[90%] max-w-xl p-10">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-5xl font-bold">
//                 {modalType === "create" && "Add Department"}
//                 {modalType === "edit" && "Edit Department"}
//                 {modalType === "delete" && "Delete Department"}
//               </h2>
//               <button
//                 onClick={closeModal}
//                 className="text-4xl hover:text-gray-600 transition-colors"
//               >
//                 <i className="bx bx-x"></i>
//               </button>
//             </div>

//             {modalType === "delete" ? (
//               <div>
//                 <p className="text-2xl mb-8">
//                   Are you sure you want to delete{" "}
//                   <strong>{selectedDept?.name}</strong>?
//                 </p>
//                 <div className="flex gap-5 justify-end">
//                   <button
//                     onClick={closeModal}
//                     className="px-8 py-4 text-xl bg-gray-300 rounded-xl hover:bg-gray-400 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="px-8 py-4 text-xl bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <div className="mb-6">
//                   <label className="block text-2xl mb-3 font-medium">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors"
//                     placeholder="Enter department name"
//                   />
//                 </div>
//                 <div className="mb-8">
//                   <label className="block text-2xl mb-3 font-medium">
//                     Description
//                   </label>
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl h-40 resize-none focus:outline-none focus:border-black transition-colors"
//                     placeholder="Enter department description"
//                   />
//                 </div>
//                 <div className="flex gap-5 justify-end">
//                   <button
//                     onClick={closeModal}
//                     className="px-8 py-4 text-xl bg-gray-300 rounded-xl hover:bg-gray-400 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="px-8 py-4 text-xl bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
//                   >
//                     {modalType === "create" ? "Create" : "Update"}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default DepartmentsSection;