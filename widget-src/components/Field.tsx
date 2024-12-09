import { answerTypeOptions } from "../constants/answerTypeOptions";
import { currencySVGs } from '../currencySVGs';

const { useSyncedState, AutoLayout, Input, Frame, SVG, Text } = figma.widget;

interface QuestionProps extends Partial<AutoLayoutProps> {
    showAdditionalInput: boolean;
    showQuestionNumber: boolean; // Add this line
    isValidationRequired: boolean; // Add this new prop
    answerType: string;
    currency: string;
}

function Field(props: QuestionProps) {
    const [questionText, setQuestionText] = useSyncedState("questionText", "");
    const [additionalInputText, setAdditionalInputText] = useSyncedState("additionalInputText", "");
    const [numberInputText, setNumberInputText] = useSyncedState("numberInputText", "");
    const currentAnswer = answerTypeOptions.find(an => an.option === props.answerType);
    const icon = currentAnswer?.option === "Currency" ?  currencySVGs[props.currency] || currencySVGs.default : currentAnswer?.icon;

    console.log("Rendering Field component with props:", props);

    // Define styles for validation tag based on isValidationRequired prop
    const validationTagStyle = props.isValidationRequired
        ? { fill: "#FFE0E1" }
        : { fill: "#E3E4E8" };

    const validationTextStyle = props.isValidationRequired
        ? { fill: "#78393A" }
        : { fill: "#30333D" };

    return (
        <AutoLayout
            name="field"
            overflow="visible"
            direction="vertical"
            width={370}
            horizontalAlignItems="center"
        >
            <AutoLayout
                name="badge-container"
                overflow="visible"
                spacing={10}
                width={props.showQuestionNumber ? 77 : "hug-contents"}
                horizontalAlignItems={props.showQuestionNumber ? "end" : "center"}
            >
                {props.showQuestionNumber && (
                    <AutoLayout
                        name="number"
                        fill="#404040"
                        height={29}
                        cornerRadius={{
                            topLeft: 8,
                            topRight: 8,
                            bottomRight: 0,
                            bottomLeft: 0,
                        }}
                        overflow="visible"
                        spacing={6}
                        padding={{
                            vertical: 4,
                            horizontal: 8,
                        }}
                        horizontalAlignItems="center"
                        verticalAlignItems="center"
                    >
                        <Input
                            name="numberInput"
                            value={numberInputText}
                            placeholder="1"
                            onTextEditEnd={(event) => setNumberInputText(event.characters)}
                            fill="#fff"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={14}
                            letterSpacing={-0.154}
                            fontWeight={600}
                            width={32}
                            horizontalAlignText="center"
                        />
                    </AutoLayout>
                )}
                <AutoLayout
                    name="label"
                    fill="#404040"
                    cornerRadius={{
                        topLeft: 8,
                        topRight: 8,
                        bottomRight: 0,
                        bottomLeft: 0,
                    }}
                    overflow="visible"
                    spacing={6}
                    padding={{
                        vertical: 4,
                        horizontal: 8,
                    }}
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                >
                    <Text
                        name="Field"
                        fill="#fff"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.154}
                        fontWeight={600}
                    >
                        Field
                    </Text>
                </AutoLayout>
            </AutoLayout>
            <AutoLayout
                name="Main"
                overflow="hidden"
                effect={{
                    type: "drop-shadow",
                    color: "#0000002E",
                    offset: {
                        x: 0,
                        y: 1,
                    },
                    blur: 3.2,
                    showShadowBehindNode: false,
                }}
                fill="#FFF"
                cornerRadius={12}
                direction="vertical"
                width="fill-parent"
            >
                <AutoLayout
                    name="question-input"
                    fill="#FFF"
                    stroke="#00000014"
                    strokeWidth={1}
                    direction="vertical"
                    spacing={12}
                    padding={{
                        vertical: 12,
                        horizontal: 14,
                    }}
                    width="fill-parent"
                >
                        <Text
                            name="field-label"
                            fill="#000"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={8}
                            fontWeight={700}
                            opacity={0.5}
                        >
                            LABEL
                        </Text>
                    <Input
                        name="Input"
                        value={questionText}
                        placeholder="Label..."
                        onTextEditEnd={(event) => setQuestionText(event.characters)}
                        fill="#000"
                        width="fill-parent"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={18}
                        letterSpacing={-0.198}
                        fontWeight={500}
                    />
                    <AutoLayout
                        name="badges-container"
                        direction="horizontal"
                        spacing={8}
                        width="fill-parent"
                        height={22}
                    >
                      <AutoLayout
                          name="validation-tag"
                          cornerRadius={5}
                          overflow="visible"
                          spacing={3}
                          padding={{
                              vertical: 2,
                              horizontal: 4,
                          }}
                          horizontalAlignItems="center"
                          verticalAlignItems="center"
                          {...validationTagStyle}
                      >
                          <Text
                              name="validation-text"
                              lineHeight="150%"
                              fontFamily="Inter"
                              fontSize={12}
                              letterSpacing={-0.132}
                              fontWeight={500}
                              {...validationTextStyle}
                          >
                              {props.isValidationRequired ? "Required" : "Optional"}
                          </Text>
                      </AutoLayout>
                      <AutoLayout
                          name="type-badge"
                          fill="#E3E4E8"
                          cornerRadius={5}
                          overflow="visible"
                          spacing={3}
                          padding={{
                              vertical: 2,
                              horizontal: 4,
                          }}
                          horizontalAlignItems="center"
                          verticalAlignItems="center"
                      >
                          <AutoLayout
                              name="Icon"
                              width={12}
                              height={12}
                              overflow="visible"
                              horizontalAlignItems="center"
                              verticalAlignItems="center"
                          >
                              <SVG
                                  name="Vector"
                                  src={icon}
                              />
                          </AutoLayout>
                          <Text
                              name="form-type"
                              fill="#30333D"
                              lineHeight="150%"
                              fontFamily="Inter"
                              fontSize={12}
                              letterSpacing={-0.132}
                              fontWeight={500}
                          >
                              {currentAnswer?.label}
                          </Text>
                      </AutoLayout>
                    </AutoLayout>
                </AutoLayout>
                {props.showAdditionalInput && (
                    <AutoLayout
                        name="additional"
                        fill="#FFF"
                        strokeWidth={2}
                        strokeAlign="outside"
                        direction="vertical"
                        spacing={8}
                        padding={{
                            vertical: 12,
                            horizontal: 14,
                        }}
                        width="fill-parent"
                    >
                        <Input
                            name="additionalInput"
                            value={additionalInputText}
                            placeholder="Additional information"
                            onTextEditEnd={(event) => setAdditionalInputText(event.characters)}
                            fill="#1E1E1E9E"
                            width="fill-parent"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={12}
                            letterSpacing={-0.132}
                            fontWeight={500}
                        />
                    </AutoLayout>
                )}
            </AutoLayout>
        </AutoLayout>
    );
}

export default Field;