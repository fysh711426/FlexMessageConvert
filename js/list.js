//---------- List 轉換器 ----------

function iFlexComponentList(list) {
    this.getResult = function () {
        var result = "new List<IFlexComponent>\n{\n";
        for (let index in list) {
            let item = list[index];
            var convertFunc = getConvertFunc(item.type);
            var convert = new convertFunc(item);
            result += convert.getResult() + ",\n";
        }
        result += "}";
        return result;
    };
}

function bubbleContainerList(list) {
    this.getResult = function () {
        var result = "new List<BubbleContainer>\n{\n";
        for (let index in list) {
            let item = list[index];
            var convertFunc = getConvertFunc(item.type);
            var convert = new convertFunc(item);
            result += convert.getResult() + ",\n";
        }
        result += "}";
        return result;
    };
}

//---------- List 轉換器 ----------