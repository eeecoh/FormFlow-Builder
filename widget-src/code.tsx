import * as imports from './imports';
import Section from './components/Section'; // Add this line

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text } = widget;

function Widget(props: Partial<AutoLayoutProps>) {
  const [contentType, setContentType] = useSyncedState("contentType", "section");
  const [answerType, setAnswerType] = useSyncedState("answerType", "Input");
  const [showAdditionalInput, setShowAdditionalInput] = useSyncedState("showAdditionalInput", false);
  const [isLinkEditable, setIsLinkEditable] = useSyncedState("isLinkEditable", false);
  const [showHeaderAdditionalInput, setShowHeaderAdditionalInput] = useSyncedState("showHeaderAdditionalInput", false);
  const [currency, setCurrency] = useSyncedState("currency", "GBP");
  const [answerText, setAnswerText] = useSyncedState("answerText", "");
  const [additionalInputText, setAdditionalInputText] = useSyncedState("additionalInputText", "");
  const [showQuestionNumber, setShowQuestionNumber] = useSyncedState("showQuestionNumber", true);
  const [showHeaderNumber, setShowHeaderNumber] = useSyncedState("showHeaderNumber", true);
  const [isValidationRequired, setIsValidationRequired] = useSyncedState("isValidationRequired", true);
  const [connectorColor, setConnectorColor] = useSyncedState("connectorColor", "#334155");

  console.log("Current answerType:", answerType);

  const propertyMenuItems = [
    {
      itemType: "dropdown",
      propertyName: "contentType",
      tooltip: "Select Content Type",
      options: imports.contentTypeOptions,
      selectedOption: contentType,
    },
    ...(contentType === "question" || contentType === "field" ? [
      createToggleItem("toggleQuestionAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      createToggleItem("toggleQuestionNumber", showQuestionNumber, imports.icons.QUESTION_NUMBER),
      createToggleItem("toggleValidationRequired", isValidationRequired, imports.icons.REQUIRE_TOGGLE)
    ] : []),
    ...(contentType === "answer" || contentType === "field" ? [
      {
        itemType: "dropdown",
        propertyName: "answerType",
        tooltip: "Select Response type",
        options: imports.answerTypeOptions.map(({ label, option }) => ({ option, label })),
        selectedOption: answerType,
      },
      ...(answerType === "Currency" ? [{
        itemType: "dropdown",
        propertyName: "currency",
        tooltip: "Select Currency",
        options: imports.currencyOptions,
        selectedOption: currency,
      }] : []),
      createToggleItem("toggleAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      ...(answerType === "Custom" ? [
        createToggleItem("toggleLinkEdit", isLinkEditable, imports.icons.EDIT_LINK)
      ] : [])
    ] : []),
    ...(contentType === "customcomponent" ? [
      createToggleItem("toggleAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      createToggleItem("toggleLinkEdit", isLinkEditable, imports.icons.EDIT_LINK)
    ] : []),
    ...(contentType === "header" ? [
      createToggleItem("toggleHeaderAdditionalInput", showHeaderAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      createToggleItem("toggleHeaderNumber", showHeaderNumber, imports.icons.HEADER_NUMBER)
    ] : []),
    ...(contentType === "section" ? [ // Add this block
      createToggleItem("toggleSectionAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      createToggleItem("toggleSectionNumber", showHeaderNumber, imports.icons.HEADER_NUMBER)
    ] : []),
    ...(contentType === "devnote" || contentType === "note" ? [
      createToggleItem("toggleAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT)
    ] : []),
    { itemType: "separator" },
    createActionItem("addWidget", "Add", imports.icons.ADD_WIDGET),
    {
      itemType: "color-selector",
      propertyName: "connectorColor",
      tooltip: "Connector Color",
      options: [
        { option: "#334155", tooltip: "Black" },
        { option: "#B91C1C", tooltip: "Red" },
        { option: "#047857", tooltip: "Green" },
        { option: "#3B82F6", tooltip: "Blue" },
        { option: "#8B5CF6", tooltip: "Purple" },
        // Add more color options as needed
      ],
      selectedOption: connectorColor,
    },
    { itemType: "separator" },
    createLinkItem("guide", "Guide", "https://github.com/eeecoh/FormFlow-Builder", imports.icons.GUIDE)
  ];

  console.log("Property menu items:", propertyMenuItems);

  usePropertyMenu(propertyMenuItems, handlePropertyChange);

  console.log(`Current content type: ${contentType}`);
  console.log(`Current answer type: ${answerType}`);

  try {
    return renderComponent();
  } catch (error) {
    console.error("Error rendering component:", error);
    return <Text>Error rendering component: {error.message}</Text>;
  }

  function createToggleItem(propertyName, isToggled, icon) {
    let tooltip;
    if (propertyName === "toggleValidationRequired") {
      tooltip = "Required";
    } else if (propertyName === "toggleQuestionAdditionalInput" || propertyName === "toggleAdditionalInput" || propertyName === "toggleHeaderAdditionalInput" || propertyName === "toggleSectionAdditionalInput") {
      tooltip = "Additional information";
    } else if (propertyName === "toggleQuestionNumber" || propertyName === "toggleHeaderNumber" || propertyName === "toggleSectionNumber") {
      tooltip = "Number";
    } else if (propertyName === "toggleLinkEdit") {
      tooltip = isToggled ? "Save link" : "Edit link";
    } else {
      tooltip = isToggled ? "Hide" : "Show";
    }
    return {
      itemType: "toggle",
      propertyName,
      tooltip,
      isToggled,
      icon
    };
  }

  function createActionItem(propertyName, tooltip, icon) {
    return { itemType: "action", propertyName, tooltip, icon };
  }

  function createLinkItem(propertyName, tooltip, href, icon) {
    return { itemType: "link", propertyName, tooltip, href, icon };
  }

  function handlePropertyChange({ propertyName, propertyValue }) {
    const actions = {
      contentType: () => setContentType(propertyValue),
      answerType: () => handleAnswerTypeChange(propertyValue),
      currency: () => setCurrency(propertyValue), // Add this line
      addWidget: addWidget,
      toggleAdditionalInput: () => {
        if (contentType === "devnote" || contentType === "note" || contentType === "answer" || contentType === "question" || contentType === "section" || contentType === "customcomponent" || contentType === "field") {
          setShowAdditionalInput(!showAdditionalInput);
        } else if (contentType === "header") {
          setShowHeaderAdditionalInput(!showHeaderAdditionalInput);
        }
      },
      toggleLinkEdit: () => setIsLinkEditable(!isLinkEditable),
      toggleHeaderAdditionalInput: () => setShowHeaderAdditionalInput(!showHeaderAdditionalInput),
      toggleQuestionAdditionalInput: () => setShowAdditionalInput(!showAdditionalInput),
      toggleQuestionNumber: () => setShowQuestionNumber(!showQuestionNumber),
      toggleHeaderNumber: () => setShowHeaderNumber(!showHeaderNumber),
      toggleSectionAdditionalInput: () => setShowAdditionalInput(!showAdditionalInput),
      toggleSectionNumber: () => setShowHeaderNumber(!showHeaderNumber),
      toggleValidationRequired: () => setIsValidationRequired(!isValidationRequired),
      connectorColor: () => {
        setConnectorColor(propertyValue);
        updateConnectorColors(propertyValue);
      },
    };

    const action = actions[propertyName];
    if (action) action();
  }

  function handleAnswerTypeChange(newAnswerType) {
    console.log(`Changing answer type to: ${newAnswerType}`);
    const currentWidget = figma.currentPage.selection[0] as WidgetNode;
    if (currentWidget && currentWidget.type === "WIDGET") {
      const newWidget = currentWidget.cloneWidget({
        contentType, answerType: newAnswerType, answerText, additionalInputText,
      });

      updateWidgetPluginData(newWidget, newAnswerType);

      // Find all connectors attached to the current widget
      const connectors = figma.currentPage.findAll(node =>
        node.type === "CONNECTOR" &&
        (node.connectorStart.endpointNodeId === currentWidget.id ||
          node.connectorEnd.endpointNodeId === currentWidget.id)
      ) as ConnectorNode[];

      // Replace the widget
      newWidget.x = currentWidget.x;
      newWidget.y = currentWidget.y;
      figma.currentPage.appendChild(newWidget);
      figma.currentPage.selection = [newWidget];

      // Update connectors to point to the new widget
      connectors.forEach(connector => {
        if (connector.connectorStart.endpointNodeId === currentWidget.id) {
          connector.connectorStart = {
            ...connector.connectorStart,
            endpointNodeId: newWidget.id
          };
        }
        if (connector.connectorEnd.endpointNodeId === currentWidget.id) {
          connector.connectorEnd = {
            ...connector.connectorEnd,
            endpointNodeId: newWidget.id
          };
        }
      });

      // Remove the old widget
      currentWidget.remove();
    }
    setAnswerType(newAnswerType);
    console.log("Updated answerType:", newAnswerType);
  }

  function updateWidgetPluginData(widget, newAnswerType) {
    const data = {
      contentType, answerType: newAnswerType, showAdditionalInput: showAdditionalInput.toString(),
      isLinkEditable: isLinkEditable.toString(), showHeaderAdditionalInput: showHeaderAdditionalInput.toString(),
      answerText, additionalInputText
    };
    Object.entries(data).forEach(([key, value]) => widget.setPluginData(key, value));
  }

  function replaceWidget(oldWidget, newWidget) {
    newWidget.x = oldWidget.x;
    newWidget.y = oldWidget.y;
    figma.currentPage.appendChild(newWidget);
    figma.currentPage.selection = [newWidget];
    oldWidget.remove();
  }

  function addWidget() {
    const currentWidget = figma.currentPage.selection[0] as WidgetNode;
    if (currentWidget && currentWidget.type === "WIDGET") {
      let newContentType = contentType;
      if (contentType === "section") {
        newContentType = "header";
      } else if (contentType === "header") {
        newContentType = "question";
      } else if (contentType === "question") {
        newContentType = "answer";
      } else if (contentType === "answer") {
        newContentType = "question";
      } else if (newContentType === "field") {
        newContentType = "field"
      }

      const newWidget = currentWidget.cloneWidget({
        contentType: newContentType,
        answerType,
        answerText: "",
        additionalInputText: "",
        // Reset specific state values for Header and Question components
        ...(newContentType === "header" && {
          headerText: "",
          numberInputText: "",
          additionalInputText: ""
        }),
        ...((newContentType === "question" || newContentType === "field") && {
          questionText: "",
          numberInputText: "",
          additionalInputText: ""
        }),
        ...(newContentType === "section" && {
          sectionText: "",
          numberInputText: "",
          additionalInputText: ""
        }),
        ...(newContentType === "devnote" && {
          devNoteText: "",
          additionalInputText: ""
        }),
        ...(newContentType === "note" && {
          noteText: "",
          additionalInputText: ""
        }),
        ...(newContentType === "customcomponent" && {
          customComponentText: "",
          additionalInputText: ""
        }),
        ...(newContentType === "field" && {
          answerType: "Input"
        })
      });

      updateWidgetPluginData(newWidget, answerType);
      newWidget.y = currentWidget.y + currentWidget.height + 100;
      figma.currentPage.appendChild(newWidget);

      // Create a connector between the current widget and the new widget
      if (newContentType === "question" || newContentType === "answer" || newContentType === "header" || newContentType === "field") {
        const connector = figma.createConnector();
        connector.connectorStart = {
          endpointNodeId: currentWidget.id,
          magnet: 'BOTTOM'
        };
        connector.connectorEnd = {
          endpointNodeId: newWidget.id,
          magnet: 'TOP'
        };
        connector.connectorStartStrokeCap = 'NONE'; // Set start stroke cap to NONE
        connector.connectorEndStrokeCap = 'NONE'; // Set end stroke cap to NONE
        connector.strokes = [{ type: 'SOLID', color: hexToRgb(connectorColor) }];
        figma.currentPage.appendChild(connector);
      }
    }
  }

  function renderComponent() {
    const commonProps = {
      ...props,
      showAdditionalInput,
      answerText,
      setAnswerText,
      additionalInputText,
      setAdditionalInputText
    };

    if (contentType === "header") {
      return <imports.Header {...commonProps} showAdditionalInput={showHeaderAdditionalInput} showHeaderNumber={showHeaderNumber} />;
    } else if (contentType === "question") {
      return <imports.Question {...commonProps} showQuestionNumber={showQuestionNumber} isValidationRequired={isValidationRequired} />;
    } else if (contentType === "answer") {
      const AnswerComponent = imports[answerType];
      if (typeof AnswerComponent !== 'function') {
        console.error(`Invalid answer type: ${answerType}`);
        return <Text>Error: Invalid answer type</Text>;
      }
      return <AnswerComponent {...commonProps} isLinkEditable={isLinkEditable} currency={currency} />;
    } else if (contentType === "devnote") {
      return <imports.DevNote {...commonProps} showAdditionalInput={showAdditionalInput} />;
    } else if (contentType === "note") {
      return <imports.Note {...commonProps} showAdditionalInput={showAdditionalInput} />;
    } else if (contentType === "section") { // Add this block
      return <Section {...commonProps} showAdditionalInput={showAdditionalInput} showHeaderNumber={showHeaderNumber} />;
    } else if (contentType === "customcomponent") { // Add this block
      return <imports.CustomComponent {...commonProps} showAdditionalInput={showAdditionalInput} isLinkEditable={isLinkEditable} />;
    } else if (contentType === "field"){
      return <imports.Field {...commonProps} showQuestionNumber={showQuestionNumber} isValidationRequired={isValidationRequired} isLinkEditable={isLinkEditable} currency={currency} answerType={answerType}  />;
    } else {
      console.log("Error: Invalid content type");
      return <Text>Error: Invalid content type</Text>;
    }
  }

  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return { r, g, b };
  }

  function updateConnectorColors(newColor: string) {
    const currentWidget = figma.currentPage.selection[0] as WidgetNode;
    if (currentWidget && currentWidget.type === "WIDGET") {
      const connectors = figma.currentPage.findAll(node => node.type === "CONNECTOR") as ConnectorNode[];
      connectors.forEach(connector => {
        if (connector.connectorStart.endpointNodeId === currentWidget.id ||
          connector.connectorEnd.endpointNodeId === currentWidget.id) {
          connector.strokes = [{ type: 'SOLID', color: hexToRgb(newColor) }];
        }
      });
    }
  }
}

widget.register(Widget);