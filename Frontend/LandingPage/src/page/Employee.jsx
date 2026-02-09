import { useEffect, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

export default function Employee() {
  const { setActiveModule } = useContext(AppContext);
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department_id: "",
    role: "",
    video_src: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = "http://localhost:3000/api";

  useEffect(() => {
    setActiveModule("Employee");
    fetchEmployees();
    fetchDepartments();
  }, []);

  const fetchEmployees = async () => {
    const res = await fetch(`${API_BASE}/employees`);
    const data = await res.json();
    setEmployees(data.employees || []);
  };

  const fetchDepartments = async () => {
    const res = await fetch(`${API_BASE}/departments`);
    const data = await res.json();
    setDepartments(data.departements || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.department_id || !formData.role) {
      return alert("Isi semua field!");
    }

    setLoading(true);
    const url = editingId ? `${API_BASE}/employees/${editingId}` : `${API_BASE}/employees`;
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(editingId ? "Berhasil diupdate" : "Berhasil ditambahkan");
      resetForm();
      fetchEmployees();
    }
    setLoading(false);
  };

  const handleEdit = (emp) => {
    setFormData({
      name: emp.name,
      department_id: emp.department_id,
      role: emp.role,
      video_src: emp.video_src || "",
    });
    setEditingId(emp.id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus?")) return;
    
    setLoading(true);
    const res = await fetch(`${API_BASE}/employees/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Berhasil dihapus");
      fetchEmployees();
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ name: "", department_id: "", role: "", video_src: "" });
    setEditingId(null);
  };

  const getDepartmentName = (id) => departments.find(d => d.id === id)?.name || "-";

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Manajemen Karyawan</h1>

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <Link to="/" className="flex items-center  cursor-pointer text-gray-600 mb-4 hover:text-gray-800">
            <span className="mr-3 mb-1">←</span>
            <span>Kembali</span>
          </Link>
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit" : "Tambah"} Karyawan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Nama"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="department_id"
              value={formData.department_id}
              onChange={(e) => setFormData({...formData, department_id: e.target.value})}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Pilih Departemen --</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              placeholder="Posisi"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="video_src"
              value={formData.video_src}
              onChange={(e) => setFormData({...formData, video_src: e.target.value})}
              placeholder="Link Video (Optional)"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg"
            >
              {loading ? "Loading..." : editingId ? "Update" : "Tambah"}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg">
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Daftar Karyawan ({employees.length})</h2>

        {employees.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Belum ada data</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">No</th>
                <th className="px-4 py-3 text-left">Nama</th>
                <th className="px-4 py-3 text-left">Departemen</th>
                <th className="px-4 py-3 text-left">Posisi</th>
                <th className="px-4 py-3 text-left">Video</th>
                <th className="px-4 py-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={emp.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3 font-medium">{emp.name}</td>
                  <td className="px-4 py-3">{getDepartmentName(emp.department_id)}</td>
                  <td className="px-4 py-3">{emp.role}</td>
                  <td className="px-4 py-3">
                    {emp.video_src ? <a href={emp.video_src} target="_blank" className="text-blue-500">Lihat</a> : "-"}
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button 
                      onClick={() => handleEdit(emp)} 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(emp.id)} 
                      disabled={loading}
                      className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-1 px-3 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}