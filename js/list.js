//---------- List 轉換器 ----------

function iFlexComponentList(list, blank) {
    this.getResult = function () {
        var result = "new List<IFlexComponent>\n" + blank + "{\n";
        var isFirst = true;
        for (let index in list) {
            let item = list[index];
            var convertFunc = getConvertFunc(item.type);
            var convert = new convertFunc(item, blank + "    ");
            result += (isFirst ? "" : ",\n") + blank + "    " + convert.getResult();
            isFirst = false;
        }
        result += "\n" + blank + "}";
        return result;
    };
}

function bubbleContainerList(list, blank) {
    this.getResult = function () {
        var result = "new List<BubbleContainer>\n" + blank + "{\n";
        var isFirst = true;
        for (let index in list) {
            let item = list[index];
            var convertFunc = getConvertFunc(item.type);
            var convert = new convertFunc(item, blank + "    ");
            result += (isFirst ? "" : ",\n") + blank + "    " + convert.getResult();
            isFirst = false;
        }
        result += "\n" + blank + "}";
        return result;
    };
}

//---------- List 轉換器 ----------