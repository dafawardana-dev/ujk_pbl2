import React, { useState }from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const TambahData = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [tgl, setTgl] = useState('');
    const [jurusan, setJurusan] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/siswa', {
            nama: nama,
            alamat: alamat,
            tgl: tgl,
            jurusan: jurusan
        });
        console.log(response.data);
        navigate('/');
    }
    
  return (
    <>  
        <div className='mb-4'>
            <div className=' text-gray-700 p-2 font-medium text-center'>Form Tambah Data Siswa</div>
        </div>
        
        <div className='container mx-auto p-4 bg-gray-100 '>            
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nama:</label>
                        <input className='border border-gray-400 p-2 rounded mb-4' type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <div>
                        <label>Alamat:</label>
                        <input className='border border-gray-400 p-2 rounded mb-4' type="text" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
                    </div>
                    <div>
                        <label>Tanggal Lahir:</label>
                        <input className='border border-gray-400 p-2 rounded mb-4' type="date" name="tgl" value={tgl} onChange={(e) => setTgl(e.target.value)}/>
                    </div>
                    <div>
                        <label>Jurusan:</label>
                        <input className='border border-gray-400 p-2 rounded mb-4' type="text" name="jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
                    </div>
                    <div className='flex justify-between'>                
                        <Link to="/" className='bg-blue-300 text-gray-700 px-4 py-2 rounded mb-4 '>Kembali</Link>
                        <button type="submit" className='bg-blue-300 text-gray-700 px-4 py-2 rounded mb-4 '>Simpan</button>
                    </div>
                </form>  
            </div>
        </div>
    </>
  )
}

export default TambahData