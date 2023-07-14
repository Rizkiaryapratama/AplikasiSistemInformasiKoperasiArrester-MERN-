import { Box, Button, TextField, FormLabel } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postBebanUsaha } from "../../api/api";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const InputBebanUsaha = () => {
  //bridgetobakcend
  const [gaji_karyawan, setGajiKaryawan] = useState("");
  const [beban_operasional, setBebanOperasional] = useState("");
  const [biaya_jamsostek, setBiayaJamsostek] = useState("");
  const [biaya_lain, setBiayaLain] = useState("");
  const [biaya_aset, setBiayaAset] = useState("");
  const [biaya_jilid, setBiayaJilid] = useState("");
  const [biaya_atk, setBiayaAtk] = useState("");
  const navigate = useNavigate();

  const saveBebanUsaha = async (e) => {
    e.preventDefault();
    try {
      await postBebanUsaha({
        gaji_karyawan,
        beban_operasional,
        biaya_jamsostek,
        biaya_lain,
        biaya_aset,
        biaya_jilid,
        biaya_atk,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //handleform
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <Header title="Data Beban Usaha" subtitle="Form Input Data Beban Usaha" />

      <Formik>
        {({ errors, touched, handleBlur, handleSubmit }) => (
          <form onSubmit={(handleSubmit, saveBebanUsaha)}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Gaji Karyawan
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Gaji"
                onBlur={handleBlur}
                onChange={(e) => setGajiKaryawan(e.target.value)}
                value={gaji_karyawan}
                name="Gaji Karyawan"
                error={!!touched.gaji_karyawan && !!errors.gaji_karyawan}
                helperText={touched.gaji_karyawan && errors.gaji_karyawan}
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Beban Operasional
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Beban Operasional"
                onBlur={handleBlur}
                onChange={(e) => setBebanOperasional(e.target.value)}
                value={beban_operasional}
                name="beban_operasional"
                error={
                  !!touched.beban_operasional && !!errors.beban_operasional
                }
                helperText={
                  touched.beban_operasional && errors.beban_operasional
                }
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Biaya Jamsostek
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Biaya"
                onBlur={handleBlur}
                onChange={(e) => setBiayaJamsostek(e.target.value)}
                value={biaya_jamsostek}
                name="biayajamsostek"
                error={!!touched.biaya_jamsostek && !!errors.biaya_jamsostek}
                helperText={touched.biaya_jamsostek && errors.biaya_jamsostek}
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Biaya Lain Lain
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Biaya"
                onBlur={handleBlur}
                onChange={(e) => setBiayaLain(e.target.value)}
                value={biaya_lain}
                name="Biaya Lain"
                error={!!touched.biaya_lain && !!errors.biaya_lain}
                helperText={touched.biaya_lain && errors.biaya_lain}
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Biaya Pemeliharaan Aset
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Biaya"
                onBlur={handleBlur}
                onChange={(e) => setBiayaAset(e.target.value)}
                value={biaya_aset}
                name="biayaaset"
                error={!!touched.biaya_aset && !!errors.biaya_aset}
                helperText={touched.biaya_aset && errors.biaya_aset}
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Biaya Jilid & Fotocopy
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Biaya"
                onBlur={handleBlur}
                onChange={(e) => setBiayaJilid(e.target.value)}
                value={biaya_jilid}
                name="biayajilid"
                error={!!touched.biaya_jilid && !!errors.biaya_jilid}
                helperText={touched.biaya_jilid && errors.biaya_jilid}
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
              <FormLabel sx={{ gridColumn: "span 3" }} className="label">
                Biaya ATK & Materai
              </FormLabel>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Biaya"
                onBlur={handleBlur}
                onChange={(e) => setBiayaAtk(e.target.value)}
                value={biaya_atk}
                name="biayaatk"
                error={!!touched.biaya_atk && !!errors.biaya_atk}
                helperText={touched.biaya_atk && errors.biaya_atk}
                sx={{ gridColumn: "span 4" }}
                required={true}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <SnackbarProvider />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={() => {
                  enqueueSnackbar("Berhasil Menambah Data!", {
                    variant: "success",
                  });
                }}
                sx={{ marginBottom: 5 }}
              >
                Simpan Data
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default InputBebanUsaha;
