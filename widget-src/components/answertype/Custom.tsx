import { customIconSvg } from "../../constants/inputTypeIcons";

const { useSyncedState, AutoLayout, Input, Frame, SVG, Text } = figma.widget;

function Custom(props: Partial<AutoLayoutProps> & {
    showAdditionalInput: boolean,
    isLinkEditable: boolean,
    answerText: string,
    setAnswerText: (text: string) => void,
    additionalInputText: string,
    setAdditionalInputText: (text: string) => void
}) {
    const [linkText, setLinkText] = useSyncedState("linkText", "");

    console.log("Rendering Custom component with props:", props);

    const handleLinkClick = () => {
        if (linkText) {
            let url = linkText.trim();
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            figma.notify(`Opening link: ${url}`);
            figma.openExternal(url);
        }
    };

    return (
        <AutoLayout
            name="Answer"
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
                        letterSpacing={
                            -0.154
                        }
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
                    showShadowBehindNode:
                        false,
                }}
                fill="#FFF"
                cornerRadius={12}
                direction="vertical"
                width="fill-parent"
            >
                <AutoLayout
                    name="question"
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
                            name="custom"
                            value={props.answerText}
                            placeholder="Label..."
                            onTextEditEnd={(event) => props.setAnswerText(event.characters)}
                            fill="#1E1E1E"
                            width="fill-parent"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={18}
                            letterSpacing={-0.198}
                            fontWeight={500}
                        />
                    </AutoLayout>
                    <AutoLayout
                        name="badges-container"
                        direction="horizontal"
                        spacing={8}
                        width="fill-parent"
                        height={22}
                    >
                        <AutoLayout
                            name="type-badge"
                            fill="#F5F3FF"
                            cornerRadius={5}
                            overflow="visible"
                            spacing={3}
                            padding={{
                                vertical: 2,
                                horizontal: 4,
                            }}
                            horizontalAlignItems="center"
                            verticalAlignItems="center"
                            height="fill-parent"
                        >
                            <Frame
                                name="Icon"
                                strokeWidth={0.5}
                                width={12}
                                height={12}
                            >
                                <SVG
                                    name="Vector"
                                    x={{
                                        type: "horizontal-scale",
                                        leftOffsetPercent: 9.375,
                                        rightOffsetPercent: 9.375,
                                    }}
                                    y={{
                                        type: "vertical-scale",
                                        topOffsetPercent: 9.375,
                                        bottomOffsetPercent: 9.375,
                                    }}
                                    height={10}
                                    width={10}
                                    src={customIconSvg}
                                />
                            </Frame>
                            <Text
                                name="Custom"
                                fill="#7C3AED"
                                lineHeight="150%"
                                fontFamily="Inter"
                                fontSize={12}
                                letterSpacing={
                                    -0.132
                                }
                                fontWeight={500}
                            >
                                Custom
                            </Text>
                        </AutoLayout>
                        <AutoLayout
                            name="link-badge"
                            fill="#DBEAFE"
                            cornerRadius={5}
                            overflow="hidden"
                            spacing={3}
                            padding={{
                                vertical: 2,
                                horizontal: 4,
                            }}
                            horizontalAlignItems="start"
                            verticalAlignItems="center"
                            height="fill-parent"
                            minWidth={22}
                            maxWidth={96}
                        >
                            <AutoLayout
                                name="LinkIcon"
                                width={12}
                                height={12}
                                overflow="visible"
                                horizontalAlignItems="center"
                                verticalAlignItems="center"
                            >
                                <SVG
                                    name="LinkVector"
                                    src={`
                                        <svg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M5.49268 7.84719C5.54512 7.89945 5.58673 7.96154 5.61512 8.02992C5.64351 8.09829 5.65812 8.1716 5.65812 8.24563C5.65812 8.31966 5.64351 8.39297 5.61512 8.46134C5.58673 8.52971 5.54512 8.59181 5.49268 8.64407L5.25268 8.88407C4.99791 9.13978 4.69498 9.34245 4.3614 9.48035C4.02782 9.61826 3.6702 9.68867 3.30924 9.6875C2.76565 9.68768 2.23422 9.52662 1.78218 9.22469C1.33014 8.92277 0.97781 8.49356 0.769762 7.99135C0.561714 7.48915 0.507297 6.93652 0.613395 6.40338C0.719493 5.87024 0.981338 5.38054 1.3658 4.99625L2.99471 3.36735C3.34118 3.02093 3.77394 2.77341 4.2482 2.65042C4.72246 2.52743 5.22097 2.53343 5.69213 2.66781C6.16328 2.80218 6.58996 3.06005 6.92799 3.41471C7.26602 3.76937 7.50311 4.20794 7.61471 4.685C7.6332 4.75754 7.63702 4.83303 7.62595 4.90707C7.61488 4.9811 7.58915 5.05217 7.55026 5.11613C7.51138 5.18009 7.46011 5.23565 7.39948 5.27954C7.33885 5.32344 7.27006 5.35479 7.19716 5.37176C7.12425 5.38873 7.0487 5.39098 6.97491 5.37837C6.90113 5.36577 6.8306 5.33856 6.76746 5.29835C6.70433 5.25814 6.64985 5.20573 6.60723 5.1442C6.5646 5.08267 6.53469 5.01325 6.51924 4.94C6.45302 4.65839 6.31278 4.39958 6.11302 4.19032C5.91327 3.98106 5.66125 3.82896 5.38302 3.74972C5.10479 3.67049 4.81044 3.667 4.53041 3.73962C4.25038 3.81225 3.99483 3.95835 3.79018 4.16282L2.16127 5.79172C1.93422 6.01859 1.77954 6.30771 1.7168 6.62249C1.65406 6.93728 1.68608 7.2636 1.80881 7.56019C1.93154 7.85678 2.13946 8.11031 2.40629 8.28872C2.67312 8.46713 2.98686 8.56241 3.30784 8.5625C3.52111 8.5631 3.73238 8.5214 3.92942 8.43982C4.12647 8.35823 4.30538 8.23838 4.4558 8.08719L4.69534 7.84719C4.7476 7.79468 4.80973 7.75301 4.87814 7.72458C4.94656 7.69615 5.01992 7.68151 5.09401 7.68151C5.1681 7.68151 5.24146 7.69615 5.30987 7.72458C5.37829 7.75301 5.44041 7.79468 5.49268 7.84719ZM10.6325 1.11735C10.117 0.601964 9.41783 0.312439 8.68885 0.312439C7.95987 0.312439 7.26073 0.601964 6.74518 1.11735L6.50565 1.35688C6.39998 1.46255 6.34061 1.60587 6.34061 1.75532C6.34061 1.90476 6.39998 2.04808 6.50565 2.15375C6.61132 2.25943 6.75464 2.31879 6.90409 2.31879C7.05353 2.31879 7.19685 2.25943 7.30252 2.15375L7.54252 1.91375C7.84711 1.60917 8.26021 1.43805 8.69096 1.43805C9.12171 1.43805 9.53481 1.60917 9.8394 1.91375C10.144 2.21834 10.3151 2.63144 10.3151 3.06219C10.3151 3.49294 10.144 3.90604 9.8394 4.21063L8.20768 5.83719C8.05729 5.98842 7.87838 6.1083 7.68133 6.18989C7.48427 6.27148 7.27299 6.31316 7.05971 6.3125C6.69385 6.31224 6.3388 6.1884 6.05215 5.96105C5.7655 5.73371 5.56406 5.41619 5.48049 5.06C5.44668 4.91467 5.35651 4.78873 5.22984 4.70987C5.10317 4.63102 4.95035 4.60572 4.80502 4.63953C4.65969 4.67335 4.53375 4.76351 4.4549 4.89019C4.37604 5.01686 4.35074 5.16967 4.38456 5.315C4.5257 5.91823 4.86648 6.45608 5.35163 6.84134C5.83678 7.2266 6.43785 7.43668 7.05737 7.4375H7.05971C7.42084 7.43849 7.77859 7.36787 8.11225 7.22972C8.44592 7.09157 8.74888 6.88864 9.00362 6.63266L10.6325 5.00375C10.8877 4.74859 11.0902 4.44564 11.2283 4.11223C11.3665 3.77881 11.4375 3.42145 11.4375 3.06055C11.4375 2.69965 11.3665 2.34229 11.2283 2.00887C11.0902 1.67546 10.8877 1.37251 10.6325 1.11735Z' fill='#2563EB'/>
</svg>
                                    `}
                                />
                            </AutoLayout>
                            {props.isLinkEditable ? (
                                <Input
                                    name="link-input"
                                    value={linkText}
                                    onTextEditEnd={(e) => setLinkText(e.characters)}
                                    fill="#2563EB"
                                    fontFamily="Inter"
                                    fontSize={12}
                                    fontWeight={500}
                                    placeholder="Enter URL"
                                    inputBehavior="truncate"
                                    width="fill-parent"
                                />
                            ) : linkText ? (
                                <Text
                                    name="link-text"
                                    fill="#2563EB"
                                    lineHeight="150%"
                                    fontFamily="Inter"
                                    fontSize={12}
                                    letterSpacing={-0.132}
                                    fontWeight={500}
                                    onClick={handleLinkClick}
                                    width="fill-parent"
                                    truncate={1}
                                >
                                    {linkText}
                                </Text>
                            ) : null}
                        </AutoLayout>
                    </AutoLayout>
                </AutoLayout>
                {props.showAdditionalInput && (
                    <AutoLayout
                        name="additonal"
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

export default Custom;