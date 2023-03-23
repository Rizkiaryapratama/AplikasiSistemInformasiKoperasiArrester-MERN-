import mongoose from "mongoose";

const kas = mongoose.Schema({
  tanggal: {
    type: Date,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
  pekerjaan: {
    type: String,
    required: true,
  },
  in: {
    type: String,
    required: true,
  },
  out: {
    type: String,
    required: true,
  },
  saldo: {
    type: Number,
    required: true,
  },
  totalSaldo: {
    type: Number,
    required: true,
  },
  new_in: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Kas", kas);
