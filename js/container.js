//---------- Container 轉換器 ----------

function bubbleContainer(obj) {
    var prop = {
        direction: componentDirection,
        header: boxComponent,
        hero: imageComponent,
        body: boxComponent,
        footer: boxComponent,
        styles: bubbleStyles
    };
    this.getResult = function () {
        var result = "new BubbleContainer\n{\n";
        result += getPropResult(prop, obj);
        result += "}";
        return result;
    };
}

function carouselContainer(obj) {
    this.getResult = function () {
        var result = "new CarouselContainer\n{\n";
        result += getContentsResult(iFlexComponentList, obj.contents);
        result += "}";
        return result;
    };
}

function bubbleStyles(obj) {
    var prop = {
        header: blockStyle,
        hero: blockStyle,
        body: blockStyle,
        footer: blockStyle
    };
    this.getResult = function () {
        var result = "new BubbleStyles\n{\n";
        result += getPropResult(prop, obj);
        result += "}";
        return result;
    };
}

function blockStyle(obj) {
    var prop = {
        separator: value
    };
    this.getResult = function () {
        var result = "new BlockStyle\n{\n";
        result += getPropResult(prop, obj);
        result += "}";
        return result;
    };
}

//---------- Container 轉換器 ----------