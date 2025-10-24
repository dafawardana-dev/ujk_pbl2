import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useSWR, { mutate } from 'swr'

const  fetcher = async () => {
    const response = await axios.get('http://localhost:5000/api/siswa',{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.data;
}


const DaftarSiswa = () => {
    const { data, error } = useSWR('http://localhost:5000/api/siswa', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    
    const handleDelete = async (id) => {
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            await axios.delete(`http://localhost:5000/api/siswa/${id}`)
            mutate('http://localhost:5000/api/siswa');
        }
 
    }
  return (
    <>
    <div className="container mx-auto p-4">
        <h1 className=" font-medium text-center">Daftar Siswa</h1>
        <div className="flex justify-end mb-4">
            <Link to="/tambah" className="bg-blue-300 text-gray-700 p-2 rounded"> + Tambah</Link>
        </div>
        <table className="table border-collapse border border-gray-400 w-full">
            <thead className="bg-blue-200 text-gray-700">
                <tr>
                    <th className="border border-gray-400 p-2">No</th>
                    <th className="border border-gray-400 p-2">Nama</th>
                    <th className="border border-gray-400 p-2">Alamat</th>
                    <th className="border border-gray-400 p-2">Tanggal</th>
                    <th className="border border-gray-400 p-2">Jurusan</th>
                    <th colSpan="2" className="border border-gray-400 p-2">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((siswa, index) => (
                    <tr key={siswa.id}>
                        <td className="border border-gray-400 text-center p-2">{index + 1}</td>
                        <td className="border border-gray-400 text-center p-2">{siswa.nama}</td>
                        <td className="border border-gray-400 text-center p-2">{siswa.alamat}</td>
                        <td className="border border-gray-400 text-center p-2">{siswa.tgl}</td>
                        <td className="border border-gray-400 text-center p-2">{siswa.jurusan}</td>
                        <td className="border border-gray-400 text-center p-2"><Link className="bg-green-300 text-gray-700 p-2 rounded"to={`/edit/${siswa.id}`}>Edit</Link></td>
                        <td className="border border-gray-400 text-center p-2"><button onClick={() => handleDelete(siswa.id)} className="bg-red-300 text-gray-700 p-2 rounded">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default DaftarSiswa;