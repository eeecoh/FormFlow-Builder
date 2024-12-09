import AnswerTemplate from '../AnswerTemplate';
import { signatureIconSvg } from "../../constants/inputTypeIcons";

function Signature(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Signature"
            iconSvg={signatureIconSvg}
        />
    );
}

export default Signature;