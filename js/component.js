//---------- Component 轉換器 ----------

function boxComponent(obj) {
    var prop = {
        layout: boxLayout,
        flex: value,
        spacing: spacing,
        margin: spacing
    };
    this.getResult = function () {
        var result = "new BoxComponent\n{\n";
        result += getPropResult(prop, obj);
        if (obj.contents) {
            result += getContentsResult(iFlexComponentList, obj.contents);
        }
        if (obj.action) {
            result += getActionResult(obj.action);
        }
        result += "}";
        return result;
    };
}

function buttonComponent(obj) {
    var prop = {
        flex: value,
        spacing: spacing,
        height: buttonHeight,
        style: buttonStyle,
        color: text,
        gravity: gravity
    };
    this.getResult = function () {
        var result = "new ButtonComponent\n{\n";
        result += getPropResult(prop, obj);
        if (obj.action) {
            result += getActionResult(obj.action);
        }
        result += "}";
        return result;
    };
}

function imageComponent(obj) {
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
        var result = "new ImageComponent\n{\n";
        result += getPropResult(prop, obj);
        if (obj.action) {
            result += getActionResult(obj.action);
        }
        result += "}";
        return result;
    };
}

function iconComponent(obj) {
    var prop = {
        url: text,
        margin: spacing,
        size: componentSize,
        aspectRatio: aspectRatio
    };
    this.getResult = function () {
        var result = "new IconComponent\n{\n";
        result += getPropResult(prop, obj);
        result += "}";
        return result;
    };
}

function textComponent(obj) {
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
        var result = "new TextComponent\n{\n";
        result += getPropResult(prop, obj);
        if (obj.action) {
            result += getActionResult(obj.action);
        }
        result += "}";
        return result;
    };
}

function separatorComponent(obj) {
    var prop = {
        margin: spacing,
        color: text
    };
    this.getResult = function () {
        var result = "new SeparatorComponent\n{\n";
        result += getPropResult(prop, obj);
        result += "}";
        return result;
    };
}

function fillerComponent(obj) {
    this.getResult = function () {
        return "new FillerComponent()";
    };
}

//---------- Component 轉換器 ----------