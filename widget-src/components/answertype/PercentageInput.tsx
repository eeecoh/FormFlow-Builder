import AnswerTemplate from '../AnswerTemplate';
import { percentageInputIconSvg } from "../../constants/inputTypeIcons";

function PercentageInput(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Percentage Input"
            iconSvg={percentageInputIconSvg}
        />
    );
}

export default PercentageInput;