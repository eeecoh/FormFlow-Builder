import AnswerTemplate from '../AnswerTemplate';
import { datepickerIconSvg } from "../../constants/inputTypeIcons";

function Datepicker(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Datepicker"
            iconSvg={datepickerIconSvg}
        />
    );
}

export default Datepicker;