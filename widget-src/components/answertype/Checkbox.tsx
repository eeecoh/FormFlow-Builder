import AnswerTemplate from '../AnswerTemplate';
import { checkboxIconSvg } from "../../constants/inputTypeIcons";

function Checkbox(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Checkbox"
            iconSvg={checkboxIconSvg}
        />
    );
}

export default Checkbox;