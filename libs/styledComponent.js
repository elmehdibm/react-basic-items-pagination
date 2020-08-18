const hyphenString = (str) => (Array.from(str).map(x =>
	((x === x.toUpperCase()) ? '-' + x.toLowerCase() : x)
).join(''));

const formatPropertyToCss = (styles, className, property, specialStyles) => {
	const cssValue = styles[className][property];
	if (typeof cssValue !== "string") {
		if (property.length > 2 && property[0] === "&" && property[1] === ":") {
			specialStyles[("." + className + property.substring(1))] = cssValue;
		}
		return "";
	}
	return (
		hyphenString(property) + ": " + cssValue + "; "
	)
};

const transformStylesToCssRules = (styles) => {
	const cssRules = [];
	Object.keys(styles).forEach(
		className => {
			let cssRule = className + " { ";
			let cssProperties = Object.keys(styles[className]);
			let specialStyles = {};
			if (cssProperties.length > 1) {
				cssRule += cssProperties.reduce(
					(accumulator, property, index) => {
						const cssRule2 = formatPropertyToCss(styles, className, property, specialStyles);
						if (index === 1) {
							return formatPropertyToCss(styles, className, accumulator, specialStyles) + cssRule2;
						}
						return accumulator + cssRule2;
					}
				);
			} else if (cssProperties.length === 1) {
				cssRule += hyphenString(cssProperties[0]) + ": " + styles[className][cssProperties[0]] + "; ";
			}
			cssRule += "}";
			const specialRules = transformStylesToCssRules(specialStyles);
			cssRules.push(cssRule.concat(specialRules));
		}
	);
	return cssRules;
};

const styleSheetId = "emui-style-id-" + Math.floor(Math.random().toFixed(5) * 10000);

export const cx = (...classNames) => (classNames.join(" "));

export const changeCssProperty = (
	className,
	cssProperties
) => {
	// Must Use Optional Chaining
	const styleSheet = Array.from(document.styleSheets).find(
		s => s.ownerNode.id === styleSheetId
	);
	Array.from(styleSheet.cssRules).forEach(
		rule => {
			if (rule.selectorText === "." + className) {
				Object.keys(cssProperties).forEach(
					key => {
						rule.style[hyphenString(key)] = cssProperties[key];
					}
				);
				return;
			}
		}
	);

};

export default styles => WrappedComponent => {
	console.log("Getting Style Sheets");
	console.log(document.styleSheets);
	if (!document.getElementById(styleSheetId)) {
		const element = document.createElement("style");
		element.id = styleSheetId;
		element.type = 'text/css';
		document.head.appendChild(element);
		const cssRules = transformStylesToCssRules(styles);
		element.appendChild(document.createTextNode("." + cssRules.join(" .")));
		console.log(document.styleSheets);

	}
	return WrappedComponent;
};
