import AnswerTemplate from '../AnswerTemplate';
import { timepickerIconSvg } from "../../constants/inputTypeIcons";

function Timepicker(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            questionType="Timepicker"
            iconSvg={timepickerIconSvg}
        />
    );
}

export default Timepicker;