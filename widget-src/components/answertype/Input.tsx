import AnswerTemplate from '../AnswerTemplate';
import { inputIconSvg } from "../../constants/inputTypeIcons";

function Input(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Input"
            iconSvg={inputIconSvg}
        />
    );
}

export default Input;