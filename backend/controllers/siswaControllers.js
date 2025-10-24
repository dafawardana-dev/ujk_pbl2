import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const getAllSiswa = async (req, res) => {
  try {
    const response = await prisma.siswa.findMany();
    res.status(200).json(response)
  }catch (error) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};

export const getAllSiswaByID = async (req, res) => {
  try {
    const response = await prisma.siswa.findUnique({
        where: { id: Number(req.params.id) },
    });
    res.status(200).json(response)
  }catch (error) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};

export const createSiswa = async (req, res) => {
    const {nama, alamat, tgl, jurusan} = req.body;
  try {
    const response = await prisma.siswa.create({
        data: { 
            nama: nama, 
            alamat:alamat, 
            tgl:tgl, 
            jurusan:jurusan 
        },
    });
    res.status(200).json(response)
  }catch (error) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};

export const updateSiswa = async (req, res) => {
    const {nama, alamat, tgl, jurusan} = req.body;
  try {
    const response = await prisma.siswa.update({
        where: { id: Number(req.params.id) },
        data: { 
            nama: nama, 
            alamat:alamat, 
            tgl:tgl, 
            jurusan:jurusan 
        },
    });
    res.status(200).json(response)
  }catch (error) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};
export const deleteSiswa = async (req, res) => {
  try {
    const response = await prisma.siswa.delete({
        where: { id: Number(req.params.id) }, 
    });
    res.status(200).json(response)
  }catch (error) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};