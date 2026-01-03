// /* eslint-disable jsx-a11y/alt-text */
// import {
//   Box,
//   FormControl,
//   InputAdornment,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import {
//   SInput,
//   SInputField,
//   SMultilineInput,
//   SPhoneDiv,
// } from "./input.styled";
// import SearchIcon from "../../images/search_icon.svg";
// import UploadIcon from "../../images/file_upload.svg";

// import { Select as SELECT_INPUT } from "@material-ui/core";
// import { Lbl } from "../Labels";
// import { AppCSS } from "..";

// export const MultiLineText = () => {
//   return (
//     <SMultilineInput
//       id="outlined-multiline-flexible"
//       placeholder="Make a specific Request"
//       multiline
//       minRows={2}
//       maxRows={3}
//       onChange={() => {}}
//     />
//   );
// };

// export interface InputBoxProps {
//   onChange: Function;
//   placeholder: string;
//   value?: any;
//   items?: unknown;
//   lines?: number;
//   width?: number;
//   type?: any;
//   onPressEnter?: Function;
//   secure?: boolean;
//   disable?: boolean;
//   mt?: number;
//   mb?: number;
//   required?: boolean;
//   align?: "center" | "left" | "right";
// }

// export const TxtInput: React.FC<InputBoxProps> = ({
//   onChange,
//   placeholder,
//   lines,
//   width,
//   type,
//   onPressEnter,
//   secure,
//   value,
//   disable = false,
//   mt,
//   mb,
//   required,
//   align,
// }) => {
//   return (
//     <Box
//       style={{
//         flexDirection: "row",
//         padding: "1%",
//         paddingLeft: "2%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: AppCSS.GRAY_MILD,
//         borderRadius: "5px",
//         marginTop: "5px",
//         marginBottom: "5px",
//         width: width ? `${width}px` : "96%",
//         height: lines ? "auto" : "38px",
//       }}
//     >
//       <SInputField
//         autoCorrect="none"
//         autoComplete="off"
//         type={type ? type : "text"}
//         multiline={lines ? true : false}
//         minRows={lines ? lines : 0}
//         maxRows={4}
//         placeholder={placeholder}
//         onKeyPress={(e) => {
//           if (e.key === "Enter" && onPressEnter) {
//             onPressEnter();
//           }
//         }}
//         onChange={(e) => {
//           onChange(e.target.value);
//         }}
//         InputLabelProps={{
//           style: {
//             color: "#979797",
//             fontSize: 18,
//             textAlign: "center",
//           },
//         }}
//         InputProps={{
//           disableUnderline: true,
//           autoComplete: "off",
//           autoCorrect: "none",
//           inputProps: {
//             min: 1,
//             max: 100000,
//             style: { textAlign: align ? align : "left" },
//           },
//         }}
//         value={value}
//         disabled={disable}
//       ></SInputField>
//       {required && (
//         <p
//           style={{
//             fontSize: 32,
//             color: AppCSS.RED,
//             zIndex: 200,
//           }}
//         >
//           *
//         </p>
//       )}
//     </Box>
//   );
// };

// export const UploadInput: React.FC<InputBoxProps> = ({
//   onChange,
//   placeholder,
//   lines,
//   width,
//   type,
//   onPressEnter,
// }) => {
//   return (
//     <SInputField
//       type={type ? type : "text"}
//       multiline={lines ? true : false}
//       minRows={lines ? lines : 0}
//       placeholder={placeholder}
//       onKeyPress={(e) => {
//         if (e.key === "Enter" && onPressEnter) {
//           onPressEnter();
//         }
//       }}
//       onChange={(e) => {
//         onChange(e.target.value);
//       }}
//       style={{
//         width: width ? width : "100%",
//         height: lines ? "auto" : "32px",
//       }}
//       InputLabelProps={{
//         style: {
//           color: "#979797",
//           fontSize: 18,
//         },
//       }}
//       InputProps={{
//         disableUnderline: true,
//         endAdornment: <img src={UploadIcon} />,
//       }}
//     ></SInputField>
//   );
// };

// export const TxtInputSelect: React.FC<InputBoxProps> = ({
//   onChange,
//   placeholder,
//   value,
//   items,
// }) => {
//   const itemsIteration = () => {
//     if (Array.isArray(items)) {
//       return items.map((item) => (
//         <MenuItem
//           style={{
//             fontSize: 22,
//             color: "#1A1824",
//           }}
//           key={`${item}`}
//           value={item}
//         >
//           {item}
//         </MenuItem>
//       ));
//     }
//     return [<></>];
//   };

//   return (
//     <SInputField
//       label={placeholder}
//       select
//       onChange={(e) => onChange(e.target.value)}
//       variant="standard"
//       InputLabelProps={{
//         style: { color: "#979797", fontSize: 22 },
//       }}
//       inputProps={{
//         style: { fontSize: 22, color: "#1A1824" },
//       }}
//     >
//       <MenuItem
//         selected
//         disabled
//         style={{
//           fontSize: 22,
//           color: "#1A1824",
//         }}
//         key={`selected`}
//         value={placeholder}
//       >
//         {placeholder}
//       </MenuItem>
//       {itemsIteration()}
//     </SInputField>
//   );
// };

// interface SearchTextProps {
//   placeholder: string;
//   onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
// }

// export const TxtSearch: React.FC<SearchTextProps> = ({
//   placeholder,
//   onChange,
// }) => {
//   return (
//     <SInput
//       style={{
//         background: AppCSS.GRAY_LIGHT,
//         borderRadius: 30,
//         justifyContent: "center",
//       }}
//       id="input-with-icon-textfield"
//       placeholder={placeholder}
//       onChange={onChange}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment
//             style={{
//               marginLeft: "10px",
//               marginRight: "10px",
//               fontSize: "16pt",
//             }}
//             position="start"
//           >
//             <img src={SearchIcon} width={18} height={18} />
//           </InputAdornment>
//         ),
//         disableUnderline: true,
//       }}
//       variant="standard"
//     />
//   );
// };

// interface PhoneProps {
//   onChangeCountry: Function;
//   onChangePhone: Function;
// }

// export const TxtPhoneNumber: React.FC<PhoneProps> = ({
//   onChangeCountry,
//   onChangePhone,
// }) => {
//   const [open, setOpen] = React.useState(false);

//   const handleChange = (event: any) => {
//     console.log(event.taget.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const countries = [
//     {
//       label: "+1",
//       src: "",
//       link: " ",
//       value: "USA",
//     },
//   ];

//   const Flag = (src: string, label: string) => {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={src}
//           alt={label}
//           style={{
//             width: "24px",
//             height: "24px",
//           }}
//         />
//         <Lbl size={16} title={label} />
//       </div>
//     );
//   };

//   return (
//     <SPhoneDiv>
//       <SInputField
//         label={"Phone Number"}
//         onChange={(e) => onChangePhone(e.target.value)}
//         variant="standard"
//         InputLabelProps={{
//           style: { color: "#979797", fontSize: 22 },
//         }}
//         inputProps={{
//           style: { fontSize: 22, color: "#1A1824" },
//         }}
//       ></SInputField>
//     </SPhoneDiv>
//   );
// };

// interface SelectProps {
//   items: any;
//   placeHolder: string;
//   onChange: Function;
//   width?: number;
//   selectedItem?: any;
// }

// export const SelectInput: React.FC<SelectProps> = ({
//   items,
//   placeHolder,
//   onChange,
//   width,
//   selectedItem,
// }) => {
//   const [item, setItem] = useState<any>();

//   useEffect(() => {
//     if (selectedItem) {
//       setItem(selectedItem);
//     }
//   }, []);

//   const options = () => {
//     if (Array.isArray(items)) {
//       return items.map(({ key, value }) => {
//         return <MenuItem value={key}>{value}</MenuItem>;
//       });
//     }
//     return <></>;
//   };

//   const onChangeItem = (e: any) => {
//     setItem(e.target.value);
//     onChange(e.target.value);
//   };

//   return (
//     <FormControl
//       variant="filled"
//       fullWidth
//       style={{
//         width: "98%",
//       }}
//     >
//       {!item && (
//         <InputLabel
//           sx={{
//             fontSize: "1.5rem",
//             color: AppCSS.GRAY,
//             marginTop: "10px",
//           }}
//         >
//           {placeHolder}
//         </InputLabel>
//       )}

//       <SELECT_INPUT
//         onChange={onChangeItem}
//         defaultValue={0}
//         style={{
//           background: AppCSS.TEXTFIELD_BG,
//           width: width ? `${width}px` : "98%",
//           borderRadius: "5px",
//           padding: "5px",
//           paddingLeft: "10px",
//           color: AppCSS.GRAY,
//           marginLeft: "5px",
//           marginTop: "10px",
//         }}
//         disableUnderline
//       >
//         {options()}
//       </SELECT_INPUT>
//     </FormControl>
//   );
// };

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

import SearchIcon from "../../images/search_icon.svg";
import UploadIcon from "../../images/file_upload.svg";

import { Lbl } from "../Labels";
import { AppCSS } from "..";

// ====================== STYLED COMPONENTS ======================

export const SInputField = styled(TextField)`
  display: flex;
  color: #1a1824;
  background: #faf9f7;
  width: 99%;
`;

export const SInput = styled(TextField)`
  & {
    display: flex;
    width: 100%;
    color: #1a1824;
  }
`;

export const SMultilineInput = styled(TextField)`
  & {
    display: flex;
    width: 90%;
    min-height: 80px;
    color: #1a1824;
  }
`;

export const SPhoneDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SFlagDiv = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
`;

export const SFileUpload = styled(Button)`
  & {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 42px;
    border-radius: 4px;
    color: #1a1824;
    background: #faf9f7;
    text-transform: none;
  }
`;

// ====================== COMPONENTS ======================

// ----- Multi-line Text -----
export const MultiLineText = () => {
  return (
    <SMultilineInput
      placeholder="Make a specific Request"
      multiline
      minRows={2}
      maxRows={3}
      onChange={() => {}}
    />
  );
};

// ----- TxtInput -----
export interface InputBoxProps {
  onChange: Function;
  placeholder: string;
  value?: any;
  items?: unknown;
  lines?: number;
  width?: number;
  type?: any;
  onPressEnter?: Function;
  secure?: boolean;
  disable?: boolean;
  mt?: number;
  mb?: number;
  required?: boolean;
  align?: "center" | "left" | "right";
}

export const TxtInput: React.FC<InputBoxProps> = ({
  onChange,
  placeholder,
  lines,
  width,
  type,
  onPressEnter,
  value,
  disable = false,
  required,
  align,
}) => {
  return (
    <Box
      sx={{
        flexDirection: "row",
        padding: "1%",
        paddingLeft: "2%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: AppCSS.GRAY_MILD,
        borderRadius: 1,
        mt: 1,
        mb: 1,
        width: width ? `${width}px` : "96%",
        height: lines ? "auto" : 38,
      }}
    >
      <SInputField
        autoCorrect="none"
        autoComplete="off"
        type={type || "text"}
        multiline={!!lines}
        minRows={lines || 0}
        maxRows={4}
        placeholder={placeholder}
        onKeyPress={(e) => e.key === "Enter" && onPressEnter && onPressEnter()}
        onChange={(e) => onChange(e.target.value)}
        InputLabelProps={{
          style: {
            color: "#979797",
            fontSize: 18,
            textAlign: "center",
          },
        }}
        InputProps={{
          disableUnderline: true,
          autoComplete: "off",
          autoCorrect: "none",
          inputProps: {
            min: 1,
            max: 100000,
            style: { textAlign: align || "left" },
          },
        }}
        value={value}
        disabled={disable}
      />
      {required && (
        <Box
          component="span"
          sx={{ fontSize: 32, color: AppCSS.RED, zIndex: 200, ml: 0.5 }}
        >
          *
        </Box>
      )}
    </Box>
  );
};

// ----- Upload Input -----
export const UploadInput: React.FC<InputBoxProps> = ({
  onChange,
  placeholder,
  lines,
  width,
  type,
  onPressEnter,
}) => {
  return (
    <SInputField
      type={type || "text"}
      multiline={!!lines}
      minRows={lines || 0}
      placeholder={placeholder}
      onKeyPress={(e) => e.key === "Enter" && onPressEnter && onPressEnter()}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        width: width || "100%",
        height: lines ? "auto" : 32,
      }}
      InputLabelProps={{
        style: { color: "#979797", fontSize: 18 },
      }}
      InputProps={{
        disableUnderline: true,
        endAdornment: <img src={UploadIcon} alt="upload" />,
      }}
    />
  );
};

// ----- TxtInput Select -----
export const TxtInputSelect: React.FC<InputBoxProps> = ({
  onChange,
  placeholder,
  value,
  items,
}) => {
  return (
    <SInputField
      label={placeholder}
      select
      onChange={(e) => onChange(e.target.value)}
      variant="standard"
      InputLabelProps={{ style: { color: "#979797", fontSize: 22 } }}
      inputProps={{ style: { fontSize: 22, color: "#1A1824" } }}
      value={value}
    >
      <MenuItem disabled value="">
        {placeholder}
      </MenuItem>
      {Array.isArray(items) &&
        items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
    </SInputField>
  );
};

// ----- TxtSearch -----
interface SearchTextProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export const TxtSearch: React.FC<SearchTextProps> = ({ placeholder, onChange }) => {
  return (
    <SInput
      placeholder={placeholder}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ mx: 1 }}>
            <img src={SearchIcon} width={18} height={18} alt="search" />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
      sx={{
        background: AppCSS.GRAY_LIGHT,
        borderRadius: 30,
        justifyContent: "center",
      }}
    />
  );
};

// ----- TxtPhoneNumber -----
interface PhoneProps {
  onChangeCountry: Function;
  onChangePhone: Function;
}

export const TxtPhoneNumber: React.FC<PhoneProps> = ({
  onChangeCountry,
  onChangePhone,
}) => {
  const [open, setOpen] = useState(false);

  const countries = [
    { label: "+1", src: "", value: "USA" },
  ];

  const Flag = (src: string, label: string) => (
    <SFlagDiv>
      <img src={src} alt={label} width={24} height={24} />
      <Lbl size={16} title={label} />
    </SFlagDiv>
  );

  return (
    <SPhoneDiv>
      <SInputField
        label="Phone Number"
        variant="standard"
        onChange={(e) => onChangePhone(e.target.value)}
        inputProps={{ style: { fontSize: 22, color: "#1A1824" } }}
        InputLabelProps={{ style: { fontSize: 22, color: "#979797" } }}
      />
    </SPhoneDiv>
  );
};

// ----- SelectInput -----
interface SelectProps {
  items: any[];
  placeHolder: string;
  onChange: Function;
  width?: number;
  selectedItem?: any;
}

export const SelectInput: React.FC<SelectProps> = ({
  items,
  placeHolder,
  onChange,
  width,
  selectedItem,
}) => {
  const [item, setItem] = useState(selectedItem || "");

  return (
    <FormControl variant="filled" fullWidth sx={{ width: width || "98%" }}>
      {!item && (
        <InputLabel sx={{ fontSize: "1.5rem", color: AppCSS.GRAY, mt: 1 }}>
          {placeHolder}
        </InputLabel>
      )}
      <Select
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
          onChange(e.target.value);
        }}
        sx={{
          background: AppCSS.TEXTFIELD_BG,
          borderRadius: 1,
          px: 1,
          py: 0.5,
          color: AppCSS.GRAY,
        }}
      >
        {items.map(({ key, value }) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
