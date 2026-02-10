import { Link } from "react-router-dom";

const FormDepartments = () => {
  return (
    <div className="bg-white my-8 p-6 ">
      <Link
        to="/"
        className="flex items-center  cursor-pointer text-gray-600 mb-4 hover:text-gray-800"
      >
        <span className="mr-3 mb-1">←</span>
        <span>Kembali</span>
      </Link>
      <div className="font-bold text-3xl">
        <h1>Tambah Department</h1>
      </div>
      <form action="">
        <div className="grid gap-5 my-5">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex">
          <button
            type="sumbit"
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg"
          >
            Tambah
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDepartments;
