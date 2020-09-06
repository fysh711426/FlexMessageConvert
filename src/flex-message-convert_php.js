var flexMessageConvertPHP = (function() {

    //---------- Container 轉換器 ----------

    function bubbleContainerBuilder(obj, blank) {
        var prop = {
            direction: containerDirection,
            size: bubleContainerSize,
            header: boxComponentBuilder,
            hero: imageComponentBuilder,
            body: boxComponentBuilder,
            footer: boxComponentBuilder,
            styles: blockStyleBuilder
        };
        this.getResult = function () {
            var result = "BubbleContainerBuilder::builder()\n";
            result += getPropResult(prop, obj, blank);
            return result;
        };
    }

    function carouselContainerBuilder(obj, blank) {
        this.getResult = function () {
            var result = "CarouselContainerBuilder::builder()\n";
            result += getContentsResult(bubbleContainerList, obj.contents, blank);
            return result;
        };
    }

    function bubbleStylesBuilder(obj, blank) {
        var prop = {
            header: blockStyleBuilder,
            hero: blockStyleBuilder,
            body: blockStyleBuilder,
            footer: blockStyleBuilder
        };
        this.getResult = function () {
            var result = "BubbleStylesBuilder::builder()\n";
            result += getPropResult(prop, obj, blank);
            return result;
        };
    }

    function blockStyleBuilder(obj, blank) {
        var prop = {
            separator: value,
            separatorColor: text,
            backgroundColor: text
        };
        var order = ["separator", "separatorColor", "backgroundColor"];
        this.getResult = function () {
            var result = "new BlockStyleBuilder(";
            result += getActionPropResult(prop, obj, order, blank);
            result += ")";
            return result;
        };
    }

    //---------- Container 轉換器 ----------

    //---------- Component 轉換器 ----------

    function boxComponentBuilder(obj, blank) {
        var prop = {
            layout: componentLayout,
            flex: value,
            spacing: componentSpacing,
            margin: componentMargin
        };
        this.getResult = function () {
            var result = "BoxComponentBuilder::builder()\n";
            var inner = getPropResult(prop, obj, blank);
            if (obj.contents) {
                if (inner !== "") 
                    inner += "\n";
                inner += getContentsResult(componentList, obj.contents, blank);
            }
            if (obj.action) {
                if (inner !== "")
                    inner += "\n";
                inner += getActionResult(obj.action, blank);
            }
            result += inner;
            return result;
        };
    }

    function buttonComponentBuilder(obj, blank) {
        var prop = {
            flex: value,
            spacing: componentSpacing,
            height: componentButtonHeight,
            style: componentButtonStyle,
            color: text,
            gravity: componentGravity
        };
        this.getResult = function () {
            var result = "ButtonComponentBuilder::builder()\n";
            var inner = getPropResult(prop, obj, blank);
            if (obj.action) {
                if (inner !== "") 
                    inner += "\n";
                inner += getActionResult(obj.action, blank);
            }
            result += inner;
            return result;
        };
    }

    function imageComponentBuilder(obj, blank) {
        var prop = {
            url: text,
            flex: value,
            margin: componentMargin,
            align: componentAlign,
            gravity: componentGravity,
            size: componentImageSize,
            aspectRatio: componentImageAspectRatio,
            aspectMode: componentImageAspectMode,
            backgroundColor: text
        };
        this.getResult = function () {
            var result = "ImageComponentBuilder::builder()\n";
            var inner = getPropResult(prop, obj, blank);
            if (obj.action) {
                if (inner !== "") 
                    inner += "\n";
                inner += getActionResult(obj.action, blank);
            }
            result += inner;
            return result;
        };
    }

    function iconComponentBuilder(obj, blank) {
        var prop = {
            url: text,
            margin: componentMargin,
            size: componentIconSize,
            aspectRatio: componentIconAspectRatio
        };
        this.getResult = function () {
            var result = "IconComponentBuilder::builder()\n";
            result += getPropResult(prop, obj, blank);
            return result;
        };
    }

    function textComponentBuilder(obj, blank) {
        var prop = {
            text: text,
            flex: value,
            margin: componentMargin,
            size: componentFontSize,
            align: componentAlign,
            gravity: componentGravity,
            wrap: value,
            maxLines: value,
            weight: componentFontWeight,
            color: text
        };
        this.getResult = function () {
            var result = "TextComponentBuilder::builder()\n";
            var inner = getPropResult(prop, obj, blank);
            if (obj.contents) {
                if (inner !== "") 
                    inner += "\n";
                inner += getContentsResult(componentList, obj.contents, blank);
            }
            if (obj.action) {
                if (inner !== "") 
                    inner += "\n";
                inner += getActionResult(obj.action, blank);
            }
            result += inner;
            return result;
        };
    }

    function separatorComponentBuilder(obj, blank) {
        var prop = {
            margin: componentMargin,
            color: text
        };
        this.getResult = function () {
            var result = "SeparatorComponentBuilder::builder()\n";
            result += getPropResult(prop, obj, blank);
            return result;
        };
    }

    function spacerComponentBuilder(obj, blank) {
        var prop = {
            size: componentFontSize
        };
        this.getResult = function () {
            var result = "SpacerComponentBuilder::builder()\n";
            result += getPropResult(prop, obj, blank);
            return result;
        };
    }

    function fillerComponentBuilder(obj, blank) {
        this.getResult = function () {
            return "new FillerComponentBuilder()";
        };
    }

    function spanComponent(obj, blank) {
        this.getResult = function () {
            return 'SpanComponentBuilder::builder()';
        };
    }

    function spanComponentBuilder(obj, blank) {
        var prop = {
            text: text,
            size: componentFontSize,
            style: text,
            decoration: text,
            weight: componentFontWeight,
            color: text
        };
        this.getResult = function () {
            var result = "SpanComponentBuilder::builder()\n";
            var inner = getPropResult(prop, obj, blank);
            result += inner;
            return result;
        };
    }

    //---------- Component 轉換器 ----------

    //---------- List 轉換器 ----------

    function componentList(list, blank) {
        this.getResult = function () {
            var result = "[\n";
            var isFirst = true;
            for (let index in list) {
                let item = list[index];
                var convertFunc = getConvertFunc(item.type);
                var convert = new convertFunc(item, blank + "    ");
                result += (isFirst ? "" : ",\n") + blank + "    " + convert.getResult();
                isFirst = false;
            }
            result += "\n" + blank + "]";
            return result;
        };
    }

    function bubbleContainerList(list, blank) {
        this.getResult = function () {
            var result = "[\n";
            var isFirst = true;
            for (let index in list) {
                let item = list[index];
                var convertFunc = getConvertFunc(item.type);
                var convert = new convertFunc(item, blank + "    ");
                result += (isFirst ? "" : ",\n") + blank + "    " + convert.getResult();
                isFirst = false;
            }
            result += "\n" + blank + "]";
            return result;
        };
    }

    //---------- List 轉換器 ----------

    //---------- Action 轉換器 ----------

    function postbackTemplateActionBuilder(obj, blank) {
        var prop = {
            label: text,
            data: text,
            displayText: text
        };
        var order = ["label", "data", "displayText"];
        this.getResult = function () {
            var result = "new PostbackTemplateActionBuilder(";
            result += getActionPropResult(prop, obj, order, blank);
            result += ")";
            return result;
        };
    }

    function messageTemplateActionBuilder(obj, blank) {
        var prop = {
            label: text,
            text: text
        };
        var order = ["label", "data"];
        this.getResult = function () {
            var result = "new MessageTemplateActionBuilder(";
            result += getActionPropResult(prop, obj, order, blank);
            result += ")";
            return result;
        };
    }

    function uriTemplateActionBuilder(obj, blank) {
        var prop = {
            label: text,
            uri: text,
            altUri: altUriBuilder
        };
        var order = ["label", "uri", "altUri"];
        this.getResult = function () {
            var result = "new UriTemplateActionBuilder(";
            result += getActionPropResult(prop, obj, order, blank);
            result += ")";
            return result;
        };
    }

    function datetimePickerTemplateActionBuilder(obj, blank) {
        var prop = {
            label: text,
            data: text,
            mode: text,
            initial: text,
            min: text,
            max: text,
        };
        var order = ["label", "data", "mode"];
        this.getResult = function () {
            var result = "new DatetimePickerTemplateActionBuilder(";
            result += getActionPropResult(prop, obj, order, blank);
            if (initial) {
                result += ",\"" + obj["initial"] + "\"";
            }
            if (min) {
                result += ",\"" + obj["min"] + "\"";
            }
            if (max) {
                result += ",\"" + obj["max"] + "\"";
            }
            result += ")";
            return result;
        };
    }

    //---------- Action 轉換器 ----------

    //---------- Prop 轉換器 ----------

    function containerDirection(val, blank) {
        this.getResult = function () {
            if (val === "ltr")
                return "ContainerDirection::LTR";
            if (val === "rtl")
                return "ContainerDirection::RTL";
            return "";
        };
    }
    
    function bubleContainerSize(val, blank) {
        this.getResult = function () {
            if (val === "nano")
                return "BubleContainerSize::NANO";
            if (val === "micro")
                return "BubleContainerSize::MICRO";
            if (val === "kilo")
                return "BubleContainerSize::KILO";
            if (val === "mega")
                return "BubleContainerSize::MEGA";
            if (val === "giga")
                return "BubleContainerSize::GIGA";
            return "";
        };
    }

    function componentLayout(val, blank) {
        this.getResult = function () {
            if (val === "horizontal")
                return "ComponentLayout::HORIZONTAL";
            if (val === "vertical")
                return "ComponentLayout::VERTICAL";
            if (val === "baseline")
                return "ComponentLayout::BASELINE";
            return "";
        };
    }

    function componentMargin(val, blank) {
        this.getResult = function () {
            if (val === "none")
                return "ComponentMargin::NONE";
            if (val === "xs")
                return "ComponentMargin::XS";
            if (val === "sm")
                return "ComponentMargin::SM";
            if (val === "md")
                return "ComponentMargin::MD";
            if (val === "lg")
                return "ComponentMargin::LG";
            if (val === "xl")
                return "ComponentMargin::XL";
            if (val === "xxl")
                return "ComponentMargin::XXL";
            return "";
        };
    }

    function componentSpacing(val, blank) {
        this.getResult = function () {
            if (val === "none")
                return "ComponentSpacing::NONE";
            if (val === "xs")
                return "ComponentSpacing::XS";
            if (val === "sm")
                return "ComponentSpacing::SM";
            if (val === "md")
                return "ComponentSpacing::MD";
            if (val === "lg")
                return "ComponentSpacing::LG";
            if (val === "xl")
                return "ComponentSpacing::XL";
            if (val === "xxl")
                return "ComponentSpacing::XXL";
            return "";
        };
    }

    function componentGravity(val, blank) {
        this.getResult = function () {
            if (val === "top")
                return "ComponentGravity::TOP";
            if (val === "bottom")
                return "ComponentGravity::BOTTOM";
            if (val === "center")
                return "ComponentGravity::CENTER";
            return "";
        };
    }

    function componentAlign(val, blank) {
        this.getResult = function () {
            if (val === "start")
                return "ComponentAlign::START";
            if (val === "end")
                return "ComponentAlign::END";
            if (val === "center")
                return "ComponentAlign::CENTER";
            return "";
        };
    }

    function componentImageAspectRatio(val, blank) {
        this.getResult = function () {
            if (val === "1:1")
                return "ComponentImageAspectRatio::R1TO1";
            if (val === "1.51:1")
                return "ComponentImageAspectRatio::R1_51TO1";
            if (val === "1.91:1")
                return "ComponentImageAspectRatio::R1_91TO1";
            if (val === "4:3")
                return "ComponentImageAspectRatio::R4TO3";
            if (val === "16:9")
                return "ComponentImageAspectRatio::R16TO9";
            if (val === "20:13")
                return "ComponentImageAspectRatio::R20TO13";
            if (val === "2:1")
                return "ComponentImageAspectRatio::R2TO1";
            if (val === "3:1")
                return "ComponentImageAspectRatio::R3TO1";
            if (val === "3:4")
                return "ComponentImageAspectRatio::R3TO4";
            if (val === "9:16")
                return "ComponentImageAspectRatio::R9TO16";
            if (val === "1:2")
                return "ComponentImageAspectRatio::R1TO2";
            if (val === "1:3")
                return "ComponentImageAspectRatio::R1TO3";
            if (val.indexOf(":") >= 0) {
                return "'" + val + "'";
            }
            return "";
        };
    }

    function componentIconAspectRatio(val, blank) {
        this.getResult = function () {
            if (val === "1:1")
                return "ComponentIconAspectRatio::R1TO1";
            if (val === "2:1")
                return "ComponentIconAspectRatio::R2TO1";
            if (val === "3:1")
                return "ComponentIconAspectRatio::R3TO1";
            if (val.indexOf(":") >= 0) {
                return "'" + val + "'";
            }
            return "";
        };
    }

    function componentImageAspectMode(val, blank) {
        this.getResult = function () {
            if (val === "cover")
                return "ComponentImageAspectMode::COVER";
            if (val === "fit")
                return "ComponentImageAspectMode::FIT";
            return "";
        };
    }

    function componentFontWeight(val, blank) {
        this.getResult = function () {
            if (val === "regular")
                return "ComponentFontWeight::.REGULAR";
            if (val === "bold")
                return "ComponentFontWeight::BOLD";
            return "";
        };
    }

    function componentButtonHeight(val, blank) {
        this.getResult = function () {
            if (val === "sm")
                return "ComponentButtonHeight::SM";
            if (val === "md")
                return "ComponentButtonHeight::.MD";
            return "";
        };
    }

    function componentButtonStyle(val, blank) {
        this.getResult = function () {
            if (val === "link")
                return "ComponentButtonStyle::LINK";
            if (val === "primary")
                return "ComponentButtonStyle::PRIMARY";
            if (val === "secondary")
                return "ComponentButtonStyle::SECONDARY";
            return "";
        };
    }

    function componentIconSize(val, blank) {
        this.getResult = function () {
            if (val === "xxs")
                return "ComponentIconSize::XXS";
            if (val === "xs")
                return "ComponentIconSize::XS";
            if (val === "sm")
                return "ComponentIconSize::SM";
            if (val === "md")
                return "ComponentIconSize::MD";
            if (val === "lg")
                return "ComponentIconSize::LG";
            if (val === "xl")
                return "ComponentIconSize::XL";
            if (val === "xxl")
                return "ComponentIconSize::XXL";
            if (val === "3xl")
                return "ComponentIconSize::XXXL";
            if (val === "4xl")
                return "ComponentIconSize::XXXXL";
            if (val === "5xl")
                return "ComponentIconSize::XXXXXL";
            return "";
        };
    }

    function componentFontSize(val, blank) {
        this.getResult = function () {
            if (val === "xxs")
                return "ComponentFontSize::XXS";
            if (val === "xs")
                return "ComponentFontSize::XS";
            if (val === "sm")
                return "ComponentFontSize::SM";
            if (val === "md")
                return "ComponentFontSize::MD";
            if (val === "lg")
                return "ComponentFontSize::LG";
            if (val === "xl")
                return "ComponentFontSize::XL";
            if (val === "xxl")
                return "ComponentFontSize::XXL";
            if (val === "3xl")
                return "ComponentFontSize::XXXL";
            if (val === "4xl")
                return "ComponentFontSize::XXXXL";
            if (val === "5xl")
                return "ComponentFontSize::XXXXXL";
            return "";
        };
    }

    function componentImageSize(val, blank) {
        this.getResult = function () {
            if (val === "xxs")
                return "ComponentImageSize::XXS";
            if (val === "xs")
                return "ComponentImageSize::XS";
            if (val === "sm")
                return "ComponentImageSize::SM";
            if (val === "md")
                return "ComponentImageSize::MD";
            if (val === "lg")
                return "ComponentImageSize::LG";
            if (val === "xl")
                return "ComponentImageSize::XL";
            if (val === "xxl")
                return "ComponentImageSize::XXL";
            if (val === "3xl")
                return "ComponentImageSize::XXXL";
            if (val === "4xl")
                return "ComponentImageSize::XXXXL";
            if (val === "5xl")
                return "ComponentImageSize::XXXXXL";
            if (val === "full")
                return "ComponentImageSize::FULL";
            return "";
        };
    }

    function componentSpaceSize(val, blank) {
        this.getResult = function () {
            if (val === "xs")
                return "ComponentSpaceSize::XS";
            if (val === "sm")
                return "ComponentSpaceSize::SM";
            if (val === "md")
                return "ComponentSpaceSize::MD";
            if (val === "lg")
                return "ComponentSpaceSize::LG";
            if (val === "xl")
                return "ComponentSpaceSize::XL";
            if (val === "xxl")
                return "ComponentSpaceSize::XXL";
            return "";
        };
    }

    function altUriBuilder(val, blank) {
        this.getResult = function () {
            return "new AltUriBuilder(\"" + val + "\")";
        };
    }

    function value(val, blank) {
        this.getResult = function () {
            return val;
        };
    }

    function text(val, blank) {
        this.getResult = function () {
            return "\"" + val.replace("\n", "\\n") + "\"";
        };
    }

    //---------- Prop 轉換器 ----------

    //---------- Function 共用函數 ----------

    function getConvertFunc(type) {
        if (type === "carousel")
            return carouselContainerBuilder;
        if (type === "bubble")
            return bubbleContainerBuilder;
        if (type === "box")
            return boxComponentBuilder;
        if (type === "button")
            return buttonComponentBuilder;
        if (type === "image")
            return imageComponentBuilder;
        if (type === "icon")
            return iconComponentBuilder;
        if (type === "text")
            return textComponentBuilder;
        if (type === "span")
            return spanComponent;
        if (type === "separator")
            return separatorComponentBuilder;
        if (type === "spacer")
            return spacerComponentBuilder;
        if (type === "filler")
            return fillerComponentBuilder;
        if (type === "postback")
            return postbackTemplateActionBuilder;
        if (type === "uri")
            return uriTemplateActionBuilder;
        if (type === "message")
            return messageTemplateActionBuilder;
        if (type === "datetimepicker")
            return datetimePickerTemplateActionBuilder;
    }

    function getPropResult(prop, obj, blank) {
        var result = "";
        var isFirst = true;
        for (let index in obj) {
            if (index !== 'type' && index !== 'contents' && index !== 'action') {
                let convertFunc = prop[index];
                if (convertFunc) {
                    var convert = new convertFunc(obj[index], blank + "    ");
                    result += (isFirst ? "" : "\n") + blank + "    " + "->set" + firstUpperCase(index) + "(" + convert.getResult() + ")";
                }
                else {
                    result += (isFirst ? "" : "\n") + blank + "    " + "->set" + firstUpperCase(index) + "('" + obj[index] + "'" + ")";
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
        result += blank + "    " + "->setContents(" + convert.getResult() + ")";
        return result;
    }

    function getActionResult(action, blank) {
        var result = "";
        var convertFunc = getConvertFunc(action.type);
        var convert = new convertFunc(action, blank + "    ");
        result += blank + "    " + "->setAction(" + convert.getResult() + ")";
        return result;
    }

    function firstUpperCase(str) {
        return str.replace(/(\w)(\w*)/g, function ($0, $1, $2) {
            return $1.toUpperCase() + $2;
        });
    }

    function flexMessageConvert(json) {
        var obj = JSON.parse(json);
        var result = "FlexMessageBuilder::builder()\n";
        result += "    ->setAltText('AltText')\n";
        result += "    ->setContents(";
        var convertFunc = getConvertFunc(obj.type);
        var convert = new convertFunc(obj, "    ");
        result += convert.getResult();
        result += "\n    );"
        return result;
    }

    //---------- Function 共用函數 ----------

    return flexMessageConvert;
    
})();
