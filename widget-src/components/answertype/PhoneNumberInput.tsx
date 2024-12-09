import AnswerTemplate from '../AnswerTemplate';
import { phoneNumberIconSvg } from "../../constants/inputTypeIcons";

function PhoneNumberInput(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Phone Number"
            iconSvg={phoneNumberIconSvg}
        />
    );
}

export default PhoneNumberInput;