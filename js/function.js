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

function getPropResult(prop, obj) {
    var result = "";
    var isFirst = true;
    for (let index in obj) {
        if (index !== 'type' && index !== 'contents' && index !== 'action') {
            let convertFunc = prop[index];
            if (convertFunc) {
                var convert = new convertFunc(obj[index]);
                result += (isFirst ? "" : ",\n") + firstUpperCase(index) + " = " + convert.getResult();
            }
            else {
                result += (isFirst ? "" : ",\n") +firstUpperCase(index) + " = \"" + obj[index] + "\"";
            }
            isFirst = false;
        }
    }
    return result;
}

function getActionPropResult(prop, obj, order) {
    var result = "";
    var isFirst = true;
    for (let index in order) {
        if (typeof obj[index] !== "undefined") {
            let convertFunc = prop[index];
            var convert = new convertFunc(obj[index]);
            result += (isFirst ? "" : ", ") + convert.getResult();
        }
    }
    return result;
}

function getContentsResult(convertFunc, list) {
    var result = "";
    var convert = new convertFunc(list);
    result += "Contents = " + convert.getResult() + ",\n";
    return result;
}

function getActionResult(action) {
    var result = "";
    var convertFunc = getConvertFunc(action.type);
    var convert = convertFunc(action);
    result += "Action = " + convert.getResult() + ",\n";
    return result;
}

function firstUpperCase(str) {
    return str.replace(/(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2;
    });
}

//---------- Function 共用函數 ----------