export const javascriptPhone = `
**Code Sample Phone Model with @mui/material TextField:**
\`\`\`javascript

    <MaskedInput
        label="Phone Number Example"
        size={"x-large"}
        color={"warning"}
        fullWidth
        mask={"+90 (###) ### ## ##"}
        value={phone || ""}
        onChange={setPhone}
    >
        <TextField></TextField>
    </MaskedInput>


\`\`\`
`;

export const javascriptMixed = `
**Code Sample Phone Model with @mui/material TextField:**
\`\`\`javascript

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


\`\`\`
`;

export const javascriptString = `
**Code Sample Allowed only strings with @mui/material TextField:**
\`\`\`javascript

    <MaskedInput
        label="Only String Characters"
        size={"x-large"}
        color={"warning"}
        fullWidth
        mask={"aa aa aa"}
        value={phone || ""}
        onChange={setPhone}
    >
        <TextField></TextField>
    </MaskedInput>


\`\`\`
`;

export const javascriptCC = `
**Code Sample Credit Card with @mui/material TextField:**
\`\`\`javascript

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


\`\`\`
`;

export const javascriptTime = `
**Code Sample Time Model with @mui/material TextField:**
\`\`\`javascript

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


\`\`\`
`;

export const javascriptDateTime = `
**Code Sample Date Time model @mui/material TextField:**
\`\`\`javascript

    <MaskedInput
        label="Date Time Format"
        size={"x-large"}
        color={"warning"}
        fullWidth
        mask={"##/##/## ##:##"}
        value={dateTime || ""}
        onChange={setDateTime}
    >
    <TextField></TextField>
    </MaskedInput>


\`\`\`
`;

export const javascriptStatic = `
**Code Sample include Static Value in Mask with @mui/material TextField:**
\`\`\`javascript


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


\`\`\`
`;

export const javascriptConditionalMask = `
**Code Sample Conditional Mask with @mui/material TextField:**


\`\`\`javascript
...

const [conditionalMask, setConditonalMask] = React.useState("##");
const [conditionalValue, setConditionalValue] = React.useState("");

...

useEffect(() => {
    if (conditionalValue > 90) {
      setConditonalMask("## ##");
    }
  }, [conditionalValue]);

...

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

\`\`\`

*you can use for cc type or some types with conditionaly

`;

export const javascriptIBAN = `
**Code Sample IBAN with @mui/material TextField:**


\`\`\`javascript

    <MaskedInput
        label="IBAN for Turkei 26 Chars."
        size={"x-large"}
        color={"warning"}
        fullWidth
        mask={"TR## #### #### #### #### #### ##"}
        value={iban || ""}
        onChange={setIban}
    >
    <TextField></TextField>
    </MaskedInput>

\`\`\`


*you can update the mask with your country iban starts characters

`;
