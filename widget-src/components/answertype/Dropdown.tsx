import AnswerTemplate from '../AnswerTemplate';
import { dropdownIconSvg } from "../../constants/inputTypeIcons";

function Dropdown(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Dropdown"
            iconSvg={dropdownIconSvg}
        />
    );
}

export default Dropdown;