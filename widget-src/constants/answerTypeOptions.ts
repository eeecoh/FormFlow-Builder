import * as icon from "./inputTypeIcons";
import { currencySVGs } from "../currencySVGs";

export const answerTypeOptions = [
    { option: "Input", label: "Input", icon: icon.inputIconSvg },
    { option: "Radio", label: "Radio", icon: icon.radioIconSvg },
    { option: "Dropdown", label: "Dropdown", icon: icon.dropdownIconSvg },
    { option: "Checkbox", label: "Checkbox", icon: icon.checkboxIconSvg },
    { option: "TextArea", label: "Text Area", icon: icon.textAreaIconSvg },
    { option: "Currency", label: "Currency", icon: currencySVGs.default },
    { option: "PercentageInput", label: "Percentage Input", icon: icon.percentageInputIconSvg },
    { option: "Datepicker", label: "Datepicker", icon: icon.datepickerIconSvg },
    { option: "Fileupload", label: "File Upload", icon: icon.fileUploadIconSvg },
    { option: "Slider", label: "Slider", icon: icon.sliderIconSvg },
    { option: "Signature", label: "Signature", icon: icon.signatureIconSvg },
    { option: "PhoneNumberInput", label: "Phone Number", icon: icon.phoneNumberIconSvg }, // Add this line
    { option: "EmailInput", label: "Email", icon: icon.emailIconSvg }, // Add this line
    { option: "Custom", label: "Custom", icon: icon.customIconSvg },
  ];