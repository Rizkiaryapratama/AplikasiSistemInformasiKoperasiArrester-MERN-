import mongoose from "mongoose";

const bebanusaha = mongoose.Schema({
  gaji_karyawan: {
    type: Number,
    required: true,
  },
  beban_operasional: {
    type: Number,
    required: true,
  },
  biaya_jamsostek: {
    type: Number,
    required: true,
  },
  biaya_lain: {
    type: Number,
    required: true,
  },
  biaya_aset: {
    type: Number,
    required: true,
  },
  biaya_jilid: {
    type: Number,
    required: true,
  },
  biaya_atk: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("BebanUsaha", bebanusaha);
