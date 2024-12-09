import AnswerTemplate from '../AnswerTemplate';
import { emailIconSvg } from "../../constants/inputTypeIcons";

function EmailInput(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Email Input"
            iconSvg={emailIconSvg}
        />
    );
}

export default EmailInput;