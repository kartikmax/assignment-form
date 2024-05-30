import React, { useState } from "react";
import { Card, TextField, Button, Alert, Snackbar } from "@mui/material";

function UserData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Name is required.";
    tempErrors.email = email
      ? /\S+@\S+\.\S+/.test(email)
        ? ""
        : "Email is not valid."
      : "Email is required.";
    tempErrors.address = address ? "" : "Address is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = { name, email, address, phone };
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setSnackbarMessage(`User ${name} is saved successfully!`);
      setSuccess(true);
    }
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  return (
    <Card>
      <h2>User Data Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
            />
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <TextField
              fullWidth
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={!!errors.address}
              helperText={errors.address}
              margin="normal"
            />
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <TextField
              fullWidth
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              // error={!!errors.phone}
              // helperText={errors.phone}
              margin="normal"
            />
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Save
          </Button>
        </div>
      </form>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          sx={{ width: "100%" }}
          severity="success"
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
}

export default UserData;
