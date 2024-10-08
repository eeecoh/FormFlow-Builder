const { useSyncedState, AutoLayout, Input, Text } = figma.widget;

function DevNote(props: Partial<AutoLayoutProps> & { showAdditionalInput?: boolean }) {
    const [devNoteText, setDevNoteText] = useSyncedState("devNoteText", "");
    const [additionalInputText, setAdditionalInputText] = useSyncedState("additionalInputText", "");

    return (
        <AutoLayout
            name="DevNote"
            overflow="visible"
            direction="vertical"
            width={370}
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
                    fill="#178F51"
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
                        name="DevNoteLabel"
                        fill="#FFFFFF"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.154}
                        fontWeight={600}
                    >
                        Dev Note
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
                fill="#2C2C2C"
                cornerRadius={12}
                direction="vertical"
                width={372}
            >
                <AutoLayout
                    name="devnote-content"
                    fill="#2C2C2C"
                    stroke="#FFFFFF14"
                    strokeWidth={1}
                    direction="vertical"
                    spacing={12}
                    padding={{
                        vertical: 12,
                        horizontal: 14,
                    }}
                    width="fill-parent"
                >
                    <Input
                        name="Input"
                        value={devNoteText}
                        placeholder="Dev Note..."
                        onTextEditEnd={(event) => setDevNoteText(event.characters)}
                        fill="#FFF"
                        width={306}
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.198}
                        fontWeight={500}
                    />
                </AutoLayout>
                {props.showAdditionalInput && (
                    <AutoLayout
                        name="additional"
                        fill="#2C2C2C"
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
                            fill="#FFFFFF9E"
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

export default DevNote;