import AnswerTemplate from '../AnswerTemplate';

const percentageInputIconSvg = `<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M8.77308 2.02203L2.02308 8.77203C1.97076 8.82435 1.90864 8.86586 1.84027 8.89418C1.77191 8.92249 1.69864 8.93707 1.62464 8.93707C1.55065 8.93707 1.47737 8.92249 1.40901 8.89418C1.34064 8.86586 1.27853 8.82435 1.2262 8.77203C1.17388 8.71971 1.13238 8.65759 1.10406 8.58923C1.07574 8.52086 1.06117 8.44759 1.06117 8.37359C1.06117 8.2996 1.07574 8.22632 1.10406 8.15796C1.13238 8.0896 1.17388 8.02748 1.2262 7.97516L7.9762 1.22516C8.08188 1.11948 8.2252 1.06012 8.37464 1.06012C8.52408 1.06012 8.66741 1.11948 8.77308 1.22516C8.87875 1.33083 8.93812 1.47415 8.93812 1.62359C8.93812 1.77304 8.87875 1.91636 8.77308 2.02203ZM1.23699 3.88766C0.930406 3.58077 0.73972 3.17707 0.697417 2.74535C0.655114 2.31363 0.763811 1.8806 1.00499 1.52004C1.24617 1.15947 1.6049 0.89369 2.02007 0.767971C2.43524 0.642252 2.88116 0.664376 3.28185 0.830574C3.68254 0.996771 4.0132 1.29676 4.2175 1.67942C4.42181 2.06209 4.48711 2.50375 4.40228 2.92917C4.31745 3.35458 4.08774 3.73742 3.75229 4.01245C3.41684 4.28749 2.9964 4.4377 2.56261 4.4375C2.31626 4.43811 2.07224 4.38982 1.84469 4.29543C1.61714 4.20105 1.41058 4.06245 1.23699 3.88766ZM1.81261 2.5625C1.81253 2.73602 1.87262 2.9042 1.98264 3.03838C2.09266 3.17257 2.2458 3.26445 2.41598 3.29837C2.58615 3.3323 2.76282 3.30617 2.91588 3.22443C3.06895 3.1427 3.18894 3.01042 3.25541 2.85013C3.32187 2.68985 3.33071 2.51147 3.2804 2.34541C3.23009 2.17934 3.12376 2.03585 2.97951 1.9394C2.83527 1.84294 2.66205 1.79949 2.48935 1.81643C2.31666 1.83338 2.15519 1.90969 2.03245 2.03234C1.96253 2.10175 1.90709 2.18436 1.86935 2.27537C1.83161 2.36638 1.81232 2.46398 1.81261 2.5625ZM9.31261 7.4375C9.31259 7.87128 9.16218 8.29163 8.88699 8.62694C8.6118 8.96225 8.22886 9.19177 7.80342 9.2764C7.37798 9.36103 6.93636 9.29553 6.5538 9.09106C6.17123 8.8866 5.8714 8.55581 5.70538 8.15506C5.53936 7.75432 5.51742 7.3084 5.6433 6.89329C5.76919 6.47818 6.03511 6.11957 6.39575 5.87853C6.7564 5.6375 7.18946 5.52898 7.62115 5.57144C8.05285 5.6139 8.45646 5.80473 8.76324 6.11141C8.93802 6.28508 9.07658 6.49173 9.17089 6.71937C9.26519 6.94701 9.31337 7.1911 9.31261 7.4375ZM8.18761 7.4375C8.18796 7.3389 8.16871 7.24121 8.13096 7.15011C8.09322 7.05902 8.03775 6.97634 7.96777 6.90687C7.84504 6.78423 7.68359 6.70793 7.51092 6.69097C7.33825 6.67401 7.16505 6.71744 7.0208 6.81386C6.87656 6.91028 6.77021 7.05373 6.71987 7.21977C6.66953 7.38581 6.67832 7.56416 6.74472 7.72445C6.81113 7.88474 6.93106 8.01704 7.08408 8.09883C7.23709 8.18061 7.41373 8.20682 7.5839 8.17297C7.75407 8.13913 7.90724 8.04734 8.01732 7.91323C8.1274 7.77913 8.18758 7.611 8.18761 7.4375Z' fill='#30333D'/>
</svg>`;

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