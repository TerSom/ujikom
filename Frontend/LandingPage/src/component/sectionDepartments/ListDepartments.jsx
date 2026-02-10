const ListDepartments = ({ id, nama, description }) => {
  return (
    <div className="bg-white pb-">
      <table className="w-full text-sm">
        <thead className="">
          <tr>
            <th className="px-4 py-3 text-left">No</th>
            <th className="px-4 py-3 text-left">Nama</th>
            <th className="px-4 py-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-4 py-3 min-w-30">{id}</td>
            <td className="px-4 py-3 font-medium min-w-30">{nama}</td>
            <td className="px-4 py- font-medium min-w-270">{description}</td>
            <td className="px-4 py-3 flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-1 px-3 rounded">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartments;
