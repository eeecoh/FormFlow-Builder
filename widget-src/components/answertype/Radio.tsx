import AnswerTemplate from '../AnswerTemplate';
import { radioIconSvg } from "../../constants/inputTypeIcons";

function Radio(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Radio"
            iconSvg={radioIconSvg}
        />
    );
}

export default Radio;