import mongoose from "mongoose";

const kontrak = mongoose.Schema({
  tgl_kontrak: {
    type: Date,
    required: true,
  },
  nomor_kontrak: {
    type: String,
    required: true,
  },
  nama_pekerjaan: {
    type: String,
    required: true,
  },
  nilai_kontrak: {
    type: Number,
    required: true,
  },
  dpp: {
    type: Number,
    required: true,
  },
  ppn: {
    type: Number,
    required: true,
  },
  pph: {
    type: Number,
    required: true,
  },
  netto_akhir: {
    type: Number,
    required: true,
  },
  modal: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  total_upp: {
    type: Number,
    required: true,
  },
  laba_rugi: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Kontrak", kontrak);
