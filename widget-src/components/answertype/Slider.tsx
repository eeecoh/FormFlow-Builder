import AnswerTemplate from '../AnswerTemplate';
import { sliderIconSvg } from "../../constants/inputTypeIcons";

function Slider(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Slider"
            iconSvg={sliderIconSvg}
        />
    );
}

export default Slider;