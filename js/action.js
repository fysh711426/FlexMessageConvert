//---------- Action 轉換器 ----------

function postbackTemplateAction(obj, blank) {
    var prop = {
        label: text,
        data: text,
        displayText: text
    };
    var order = ["label", "data", "displayText"];
    this.getResult = function () {
        var result = "new PostbackTemplateAction(";
        result += getActionPropResult(prop, obj, order, blank);
        result += ")";
        return result;
    };
}

function messageTemplateAction(obj, blank) {
    var prop = {
        label: text,
        text: text
    };
    var order = ["label", "data"];
    this.getResult = function () {
        var result = "new MessageTemplateAction(";
        result += getActionPropResult(prop, obj, order, blank);
        result += ")";
        return result;
    };
}

function uriTemplateAction(obj, blank) {
    var prop = {
        label: text,
        uri: text,
        altUri: altUri
    };
    var order = ["label", "data", "altUri"];
    this.getResult = function () {
        var result = "new UriTemplateAction(";
        result += getActionPropResult(prop, obj, order, blank);
        result += ")";
        return result;
    };
}

function dateTimePickerTemplateAction(obj, blank) {
    var prop = {
        label: text,
        data: text,
        mode: dateTimePickerMode
        //initial: text,
        //min: text,
        //max: text,
    };
    var order = ["label", "data", "mode"];
    this.getResult = function () {
        var result = "new DateTimePickerTemplateAction(";
        result += getActionPropResult(prop, obj, order, blank);
        if (initial) {
            result += ", initial: \"" + obj["initial"] + "\"";
        }
        if (min) {
            result += ", min: \"" + obj["min"] + "\"";
        }
        if (max) {
            result += ", max: \"" + obj["max"] + "\"";
        }
        result += ")";
        return result;
    };
}

//---------- Action 轉換器 ----------