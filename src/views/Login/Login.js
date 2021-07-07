import React, { useState, useContext } from "react";
import { Button, Grid, TextField, InputLabel } from "@material-ui/core";
import useStyles from "./LoginStyle";
import Alert from '@material-ui/lab/Alert'
import { useHistory } from 'react-router-dom'
import useAuthContext from './../../context/AuthContext'
const Login = () => {
  const { addUser } = useContext(useAuthContext)
  const classes = useStyles();
  const history = useHistory()

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const onSubmit = (event) => {
    const { name, password } = user;
    event.preventDefault();
    setAlertMessage("");
    if (name === "" || password === "") {
      setAlertMessage("Ingrese usuario y contraseña");
      return;
    }
    if (name !== "prueba" || password !== "12345") {
      setAlertMessage("contraseña o usuario icorrecto");
      return;
    }
    addUser(name)
    history.push('/formulario')
  };
  return (
    <>
      <form>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.divCenter}
        >
            {alertMessage && (
                    <Alert
                      severity="error"
                      onClose={() => {
                        setAlertMessage('')
                      }}
                    >
                      {alertMessage}
                    </Alert>
                  )}
          <div className={classes.buttonIngreso}>
            <InputLabel htmlFor="storeName">Usuario</InputLabel>

            <TextField
              id="user"
              formcontrolprops={{
                fullWidth: true,
              }}
              variant="outlined"
              InputProps={{
                onChange: ({ target }) =>
                  setUser({ ...user, name: target.value }),
              }}
            />
          </div>
          <div className={classes.buttonIngreso}>
            <InputLabel htmlFor="storeName">Contraseña</InputLabel>

            <TextField
              type="password"
              id="password"
              onKeyUp={(e) => {
                e.preventDefault();
                if (e.key === "Enter" && user.password !== "") onSubmit(e);
              }}
              formcontrolprops={{
                fullWidth: true,
              }}
              variant="outlined"
              InputProps={{
                onChange: ({ target }) =>
                  setUser({ ...user, password: target.value }),
              }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              className={classes.buttonIngreso}
              onClick={onSubmit}
            >
              Ingresar
            </Button>
          </div>
        </Grid>
      </form>
    </>
  );
};

export default Login;
