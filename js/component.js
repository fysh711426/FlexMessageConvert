//---------- Component 轉換器 ----------

function boxComponent(obj, blank) {
    var prop = {
        layout: boxLayout,
        flex: value,
        spacing: spacing,
        margin: spacing
    };
    this.getResult = function () {
        var result = "new BoxComponent\n" + blank + "{\n";
        var inner = getPropResult(prop, obj, blank);
        if (obj.contents) {
            if (inner !== "") 
                inner += ",\n";
            inner += getContentsResult(iFlexComponentList, obj.contents, blank);
        }
        if (obj.action) {
            if (inner !== "")
                inner += ",\n";
            inner += getActionResult(obj.action, blank);
        }
        result += inner;
        result += "\n" + blank + "}";
        return result;
    };
}

function buttonComponent(obj, blank) {
    var prop = {
        flex: value,
        spacing: spacing,
        height: buttonHeight,
        style: buttonStyle,
        color: text,
        gravity: gravity
    };
    this.getResult = function () {
        var result = "new ButtonComponent\n" + blank + "{\n";
        var inner = getPropResult(prop, obj, blank);
        if (obj.action) {
            if (inner !== "") 
                inner += ",\n";
            inner += getActionResult(obj.action, blank);
        }
        result += inner;
        result += "\n" + blank + "}";
        return result;
    };
}

function imageComponent(obj, blank) {
    var prop = {
        url: text,
        flex: value,
        margin: spacing,
        align: align,
        gravity: gravity,
        size: componentSize,
        aspectRatio: aspectRatio,
        aspectMode: aspectMode,
        backgroundColor: text
    };
    this.getResult = function () {
        var result = "new ImageComponent\n" + blank + "{\n";
        var inner = getPropResult(prop, obj, blank);
        if (obj.action) {
            if (inner !== "") 
                inner += ",\n";
            inner += getActionResult(obj.action, blank);
        }
        result += inner;
        result += "\n" + blank + "}";
        return result;
    };
}

function iconComponent(obj, blank) {
    var prop = {
        url: text,
        margin: spacing,
        size: componentSize,
        aspectRatio: aspectRatio
    };
    this.getResult = function () {
        var result = "new IconComponent\n" + blank + "{\n";
        result += getPropResult(prop, obj, blank);
        result += "\n" + blank + "}";
        return result;
    };
}

function textComponent(obj, blank) {
    var prop = {
        text: text,
        flex: value,
        margin: spacing,
        size: componentSize,
        align: align,
        gravity: gravity,
        wrap: value,
        maxLines: value,
        weight: weight,
        color: text
    };
    this.getResult = function () {
        var result = "new TextComponent\n" + blank + "{\n";
        var inner = getPropResult(prop, obj, blank);
        if (obj.action) {
            if (inner !== "") 
                inner += ",\n";
            inner += getActionResult(obj.action, blank);
        }
        result += inner;
        result += "\n" + blank + "}";
        return result;
    };
}

function separatorComponent(obj, blank) {
    var prop = {
        margin: spacing,
        color: text
    };
    this.getResult = function () {
        var result = "new SeparatorComponent\n" + blank + "{\n";
        result += getPropResult(prop, obj, blank);
        result += "\n" + blank + "}";
        return result;
    };
}

function fillerComponent(obj) {
    this.getResult = function () {
        return blank + "new FillerComponent()";
    };
}

//---------- Component 轉換器 ----------