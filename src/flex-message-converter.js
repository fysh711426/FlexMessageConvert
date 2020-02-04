var flexMessageConvert = (function() {

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

    //---------- Prop 轉換器 ----------

    function componentDirection(val, blank) {
        this.getResult = function () {
            if (val === "ltr")
                return "ComponentDirection.Ltr";
            if (val === "rtl")
                return "ComponentDirection.Rtl";
            return "";
        };
    }

    function boxLayout(val, blank) {
        this.getResult = function () {
            if (val === "horizontal")
                return "BoxLayout.Horizontal";
            if (val === "vertical")
                return "BoxLayout.Vertical";
            if (val === "baseline")
                return "BoxLayout.Baseline";
            return "";
        };
    }

    function spacing(val, blank) {
        this.getResult = function () {
            if (val === "none")
                return "Spacing.None";
            if (val === "xs")
                return "Spacing.Xs";
            if (val === "sm")
                return "Spacing.Sm";
            if (val === "md")
                return "Spacing.Md";
            if (val === "lg")
                return "Spacing.Lg";
            if (val === "xl")
                return "Spacing.Xl";
            if (val === "xxl")
                return "Spacing.Xxl";
            return "";
        };
    }

    function gravity(val, blank) {
        this.getResult = function () {
            if (val === "top")
                return "Gravity.Top";
            if (val === "bottom")
                return "Gravity.Bottom";
            if (val === "center")
                return "Gravity.Center";
            return "";
        };
    }

    function align(val, blank) {
        this.getResult = function () {
            if (val === "start")
                return "Align.Start";
            if (val === "end")
                return "Align.End";
            if (val === "center")
                return "Align.Center";
            return "";
        };
    }

    function aspectRatio(val, blank) {
        this.getResult = function () {
            if (val === "1:1")
                return "AspectRatio._1_1";
            if (val === "1.51:1")
                return "AspectRatio._151_1";
            if (val === "1.91:1")
                return "AspectRatio._191_1";
            if (val === "4:3")
                return "AspectRatio._4_3";
            if (val === "16:9")
                return "AspectRatio._16_9";
            if (val === "20:13")
                return "AspectRatio._20_13";
            if (val === "2:1")
                return "AspectRatio._2_1";
            if (val === "3:1")
                return "AspectRatio._3_1";
            if (val === "3:4")
                return "AspectRatio._3_4";
            if (val === "9:16")
                return "AspectRatio._9_16";
            if (val === "1:2")
                return "AspectRatio._1_2";
            if (val === "1:3")
                return "AspectRatio._1_3";
            var arr = string.split(":");
            return "new AspectRatio(" + arr[0] + ", " + arr[1] + ")";
        };
    }

    function aspectMode(val, blank) {
        this.getResult = function () {
            if (val === "cover")
                return "AspectMode.Cover";
            if (val === "fit")
                return "AspectMode.Fit";
            return "";
        };
    }

    function weight(val, blank) {
        this.getResult = function () {
            if (val === "regular")
                return "Weight.Regular";
            if (val === "bold")
                return "Weight.Bold";
            return "";
        };
    }

    function buttonHeight(val, blank) {
        this.getResult = function () {
            if (val === "sm")
                return "ButtonHeight.Sm";
            if (val === "md")
                return "ButtonHeight.Md";
            return "";
        };
    }

    function buttonStyle(val, blank) {
        this.getResult = function () {
            if (val === "link")
                return "ButtonStyle.Link";
            if (val === "primary")
                return "ButtonStyle.Primary";
            if (val === "secondary")
                return "ButtonStyle.Secondary";
            return "";
        };
    }

    function componentSize(val, blank) {
        this.getResult = function () {
            if (val === "xxs")
                return "ComponentSize.Xxs";
            if (val === "xs")
                return "ComponentSize.Xs";
            if (val === "sm")
                return "ComponentSize.Sm";
            if (val === "md")
                return "ComponentSize.Md";
            if (val === "lg")
                return "ComponentSize.Lg";
            if (val === "xl")
                return "ComponentSize.Xl";
            if (val === "xxl")
                return "ComponentSize.Xxl";
            if (val === "3xl")
                return "ComponentSize._3xl";
            if (val === "4xl")
                return "ComponentSize._4xl";
            if (val === "5xl")
                return "ComponentSize._5xl";
            if (val === "full")
                return "ComponentSize.Full";
            return "";
        };
    }

    function dateTimePickerMode(val, blank) {
        this.getResult = function () {
            if (val === "time")
                return "DateTimePickerMode.Time";
            if (val === "date")
                return "DateTimePickerMode.Date";
            if (val === "datetime")
                return "DateTimePickerMode.Datetime";
            return "";
        };
    }

    function altUri(val, blank) {
        this.getResult = function () {
            return "new AltUri(\"" + val + "\")";
        };
    }

    function value(val, blank) {
        this.getResult = function () {
            return val;
        };
    }

    function text(val, blank) {
        this.getResult = function () {
            return "\"" + val + "\"";
        };
    }

    //---------- Prop 轉換器 ----------

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

    return flexMessageConvert;
    
})();
