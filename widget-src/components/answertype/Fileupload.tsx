import AnswerTemplate from '../AnswerTemplate';
import { fileUploadIconSvg } from "../../constants/inputTypeIcons";

function FileUpload(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="File upload"
            iconSvg={fileUploadIconSvg}
        />
    );
}

export default FileUpload;