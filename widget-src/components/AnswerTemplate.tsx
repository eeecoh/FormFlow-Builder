const { useSyncedState, AutoLayout, Input, Frame, SVG, Text } = figma.widget;

interface AnswerTemplateProps extends Partial<AutoLayoutProps> {
    showAdditionalInput: boolean;
    answerType: string;
    iconSvg: string;
}

function AnswerTemplate(props: AnswerTemplateProps & {
    answerText: string,
    setAnswerText: (text: string) => void,
    additionalInputText: string,
    setAdditionalInputText: (text: string) => void
}) {
    console.log(`Rendering ${props.answerType} component with props:`, props);

    return (
        <AutoLayout
            name={props.answerType}
            overflow="visible"
            direction="vertical"
            width={200}
            horizontalAlignItems="center"
        >
            <AutoLayout
                name="badge-container"
                overflow="visible"
                spacing={10}
                width="hug-contents"
                horizontalAlignItems="center"
            >
                <AutoLayout
                    name="label"
                    fill="#D0FAE5"
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
                        name="Answer"
                        fill="#1E5C49"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.154}
                        fontWeight={600}
                    >
                        Response type
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
                    name="answer"
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
                    <AutoLayout
                        name="input-container"
                        direction="vertical"
                        spacing={0}
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
                            value={props.answerText}
                            placeholder="Label..."
                            onTextEditEnd={(event) => props.setAnswerText(event.characters)}
                            fill="#000"
                            width="fill-parent"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={16}
                            letterSpacing={-0.198}
                            fontWeight={500}
                        />
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
                                src={props.iconSvg}
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
                            {props.answerType}
                        </Text>
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
                            value={props.additionalInputText}
                            placeholder="Additional information"
                            onTextEditEnd={(event) => props.setAdditionalInputText(event.characters)}
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

export default AnswerTemplate;