-- CreateTable
CREATE TABLE "siswa" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "tgl" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,

    CONSTRAINT "siswa_pkey" PRIMARY KEY ("id")
);
