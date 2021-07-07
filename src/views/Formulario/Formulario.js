import React, { useContext, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./FormularioStyle";
import useAuthContext from "./../../context/AuthContext";
const proyecto1dummy = [
  { id: 1, name: "proyecto1" },
  { id: 2, name: "proyecto2" },
];
const proyecto2dummy = [
  { id: 3, name: "proyecto3" },
  { id: 4, name: "proyecto4" },
];
const Formulario = () => {
  const classes = useStyles();
  const { userRegistrado } = useContext(useAuthContext);
  const [data, setData] = useState({
    name: userRegistrado,
    semana: "",
    horas: "",
    cliente: "",
    proyecto: "",
    descripcion: "",
  });
  const handleChange = (event) => {
    const jdjd = event.target;
    // debugger;
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Card className={classes.root}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.divControl}
          >
            <TextField
              id="name"
              label="Nombre"
              className={classes.formControl}
              variant="outlined"
              value={data.name || ""}
              disabled
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Semana</InputLabel>
              <Select
                id="semana"
                name="semana"
                value={data.semana || ""}
                label="semana"
                onChange={handleChange}
                className={classes.semanaWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>01/06/2020 - 01/06/2020</MenuItem>
                <MenuItem value={2}>05/06/2020 - 09/06/2020</MenuItem>
                <MenuItem value={3}>12/06/2020 - 16/06/2020</MenuItem>
                <MenuItem value={4}>19/06/2020 - 23/06/2020</MenuItem>
                <MenuItem value={5}>26/06/2020 - 30/06/2020</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.divControlAdd}
          >
            <TextField
              id="horas"
              name="horas"
              className={classes.formControl}
              label="Horas"
              variant="outlined"
              value={data.horas || ""}
              onChange={handleChange}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Cliente</InputLabel>
              <Select
                id="cliente"
                name="cliente"
                value={data.cliente || ""}
                onChange={handleChange}
                className={classes.semanaWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Cliente 1</MenuItem>
                <MenuItem value={2}>Cliente 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Proyecto</InputLabel>
              <Select
                id="proyecto"
                name="proyecto"
                value={data.proyecto || ""}
                onChange={handleChange}
                className={classes.semanaWidth}
              >
                {data.cliente === 1 &&
                  proyecto1dummy.map((value) => {
                    return <MenuItem value={value.id}>{value.name}</MenuItem>;
                  })}
                {data.cliente === 2 &&
                  proyecto2dummy.map((value) => {
                    return <MenuItem value={value.id}>{value.name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
              <TextField
                id="descripcion"
                name="descripcion"
                label="descripcion"
                variant="outlined"
                value={data.descripcion || ""}
                onChange={handleChange}
              />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Formulario;
