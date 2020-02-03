//---------- Container 轉換器 ----------

function bubbleContainer(obj, blank) {
    var prop = {
        direction: componentDirection,
        header: boxComponent,
        hero: imageComponent,
        body: boxComponent,
        footer: boxComponent,
        styles: bubbleStyles
    };
    this.getResult = function () {
        var result = "new BubbleContainer\n" + blank + "{\n";
        result += getPropResult(prop, obj, blank);
        result += "\n" + blank + "}";
        return result;
    };
}

function carouselContainer(obj, blank) {
    this.getResult = function () {
        var result = "new CarouselContainer\n" + blank + "{\n";
        result += getContentsResult(iFlexComponentList, obj.contents, blank);
        result += "\n" + blank + "}";
        return result;
    };
}

function bubbleStyles(obj, blank) {
    var prop = {
        header: blockStyle,
        hero: blockStyle,
        body: blockStyle,
        footer: blockStyle
    };
    this.getResult = function () {
        var result = "new BubbleStyles\n" + blank + "{\n";
        result += getPropResult(prop, obj, blank);
        result += "\n" + blank + "}";
        return result;
    };
}

function blockStyle(obj, blank) {
    var prop = {
        separator: value
    };
    this.getResult = function () {
        var result = "new BlockStyle\n" + blank + "{\n";
        result += getPropResult(prop, obj, blank);
        result += "\n" + blank + "}";
        return result;
    };
}

//---------- Container 轉換器 ----------