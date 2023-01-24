import React, { useEffect } from "react";
import "./App.css";
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import Iconify from "./components/Iconify";
import MaskedInput from "@mahiraltinkaya/react-masked-input";

import Highlighter from "./components/Highlighter";
import {
  javascriptPhone,
  javascriptCC,
  javascriptTime,
  javascriptDateTime,
  javascriptStatic,
  javascriptConditionalMask,
  javascriptIBAN,
  javascriptString,
  javascriptMixed,
} from "./constants";

function App() {
  const [mixed, setMixed] = React.useState("");
  const [onlyStrings, setOnlyStrings] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [cc, setCC] = React.useState("");
  const [time, setTime] = React.useState("");
  const [dateTime, setDateTime] = React.useState("");
  const [staticValue, setStaticValue] = React.useState("");
  const [conditionalMask, setConditonalMask] = React.useState("##");
  const [conditionalValue, setConditionalValue] = React.useState("");
  const [iban, setIban] = React.useState("");

  useEffect(() => {
    if (conditionalValue > 90) {
      setConditonalMask("## ##");
    }
  }, [conditionalValue]);

  return (
    <>
      <Container maxWidth={"lg"} sx={{ height: "100vh", py: 2 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: ".5px solid grey",
            }}
          >
            <Box>
              <a
                href="/"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Typography variant={"h5"}>React Masked Input</Typography>
              </a>
              <Typography variant={"caption"}>
                A lightweight Input masking
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <a
                href="https://github.com/mahiraltinkaya/react-masked-input"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant={"caption"}
                  sx={{ display: "flex", alignItems: "center", mt: 1 }}
                >
                  View on Github <Iconify icon={"mdi:git"} size={18}></Iconify>
                </Typography>
              </a>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={"h6"}
              sx={{ fontWeight: "bold", mb: 4, mt: 4 }}
            >
              #Usage
            </Typography>
            <p>
              There are a lot of type combination for using the modules. I
              shared some examples for using below.
            </p>

            <p>
              - You have to know some things firstly.
              <strong>
                The module not allowed left twice space characters.
              </strong>
            </p>
            <p>
              - You can use <strong>(#)</strong> for only numeric characters.
            </p>
            <p>
              - You can use <strong>(a)</strong> for only string characters.
            </p>
            <p>
              - You can use <strong>(*)</strong> for alphanumeric characters.
            </p>
            <p>
              - If you want to use a space you can put the in mask combination.
            </p>
            <p>- You can use all mask characters together.</p>
            <p>
              - (*) (#) (a) All types that do not contain a are used as a
              separator.
            </p>
            <p>
              - You can use conditional mask but you can not use regex instead a
              mask seperators. (any condition or regex value){" "}
            </p>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant={"h6"}
              sx={{ fontWeight: "bold", mb: 4, mt: 4 }}
            >
              #Examples
            </Typography>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptMixed}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Mix Types and Seperators"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"##-*a & ##-*#"}
                      value={mixed || ""}
                      onChange={setMixed}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {mixed}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptString}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Only Strings Chars"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"aa aa aa"}
                      value={onlyStrings || ""}
                      onChange={setOnlyStrings}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {onlyStrings}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptPhone}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Phone Number Example"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"+ 90 (###) ### ## ##"}
                      value={phone || ""}
                      onChange={setPhone}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {phone}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptCC}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Credit Card Example"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"#### #### #### ####"}
                      value={cc || ""}
                      onChange={setCC}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {cc}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptTime}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Time Format"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"##:##"}
                      value={time || ""}
                      onChange={setTime}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {time}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptDateTime}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Date Time Format"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"##/##/#### ##:##"}
                      value={dateTime || ""}
                      onChange={setDateTime}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {dateTime}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} sm={6} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptStatic}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Include Static Value"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"##/##/2023"}
                      value={staticValue || ""}
                      onChange={setStaticValue}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {staticValue}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptConditionalMask}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Conditional Mask"
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={conditionalMask}
                      value={conditionalValue || ""}
                      onChange={setConditionalValue}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {conditionalValue}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12} p={1}>
            <Grid container mb={8}>
              <Grid item xs={12}>
                <Highlighter model={javascriptIBAN}></Highlighter>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <MaskedInput
                      label="Iban for Turkei 26 Chars."
                      size={"x-large"}
                      color={"warning"}
                      fullWidth
                      mask={"TR## #### #### #### #### #### ##"}
                      value={iban || ""}
                      onChange={setIban}
                    >
                      <TextField></TextField>
                    </MaskedInput>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: 2, display: "flex", alignItems: "center" }}
                  >
                    Result: {iban}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider></Divider>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 200,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/mahiraltinkaya"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant={"caption"}
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                @mahiraltinkaya <Iconify icon={"mdi:git"} size={18}></Iconify>
              </Typography>
            </a>
            <br />

            <a href="https://lustrous-basbousa-314294.netlify.app/">
              <Typography
                variant={"caption"}
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                Resume<Iconify icon={"mdi:git"} size={18}></Iconify>
              </Typography>
            </a>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default App;
