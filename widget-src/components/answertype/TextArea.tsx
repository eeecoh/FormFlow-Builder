import AnswerTemplate from '../AnswerTemplate';
import { textAreaIconSvg } from "../../constants/inputTypeIcons";

function TextArea(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Text area"
            iconSvg={textAreaIconSvg}
        />
    );
}

export default TextArea;