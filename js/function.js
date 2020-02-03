//---------- Function 共用函數 ----------

function getConvertFunc(type) {
    if (type === "carousel")
        return carouselContainer;
    if (type === "bubble")
        return bubbleContainer;
    if (type === "box")
        return boxComponent;
    if (type === "button")
        return buttonComponent;
    if (type === "image")
        return imageComponent;
    if (type === "icon")
        return iconComponent;
    if (type === "text")
        return textComponent;
    //if (type === "span")
    //    return spanComponent;
    if (type === "separator")
        return separatorComponent;
    if (type === "filler")
        return fillerComponent;
    if (type === "postback")
        return postbackTemplateAction;
    if (type === "uri")
        return uriTemplateAction;
    if (type === "message")
        return messageTemplateAction;
    if (type === "datetimepicker")
        return dateTimePickerTemplateAction;
}

function getPropResult(prop, obj, blank) {
    var result = "";
    var isFirst = true;
    for (let index in obj) {
        if (index !== 'type' && index !== 'contents' && index !== 'action') {
            let convertFunc = prop[index];
            if (convertFunc) {
                var convert = new convertFunc(obj[index], blank + "    ");
                result += (isFirst ? "" : ",\n") + blank + "    " + firstUpperCase(index) + " = " + convert.getResult();
            }
            else {
                result += (isFirst ? "" : ",\n") + blank + "    " + firstUpperCase(index) + " = \"" + obj[index] + "\"";
            }
            isFirst = false;
        }
    }
    return result;
}

function getActionPropResult(prop, obj, order, blank) {
    var result = "";
    var isFirst = true;
    for (let index in order) {
        if (typeof obj[order[index]] !== "undefined") {
            let convertFunc = prop[order[index]];
            var convert = new convertFunc(obj[order[index]], blank + "    ");
            result += (isFirst ? "" : ", ") + convert.getResult();
            isFirst = false;
        }
    }
    return result;
}

function getContentsResult(convertFunc, list, blank) {
    var result = "";
    var convert = new convertFunc(list, blank + "    ");
    result += blank + "    " + "Contents = " + convert.getResult();
    return result;
}

function getActionResult(action, blank) {
    var result = "";
    var convertFunc = getConvertFunc(action.type);
    var convert = new convertFunc(action, blank + "    ");
    result += blank + "    " + "Action = " + convert.getResult();
    return result;
}

function firstUpperCase(str) {
    return str.replace(/(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2;
    });
}

function flexMessageConvert(json) {
    var obj = JSON.parse(json);
    var result = 'new FlexMessage("AltText")\n{\n    Contents = ';
    var convertFunc = getConvertFunc(obj.type);
    var convert = new convertFunc(obj, "    ");
    result += convert.getResult();
    result += "\n};"
    return result;
}

//---------- Function 共用函數 ----------