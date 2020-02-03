//---------- Prop 轉換器 ----------

function componentDirection(val) {
    this.getResult = function () {
        if (val === "ltr")
            return "ComponentDirection.Ltr";
        if (val === "rtl")
            return "ComponentDirection.Rtl";
        return "";
    };
}

function boxLayout(val) {
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

function spacing(val) {
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

function gravity(val) {
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

function align(val) {
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

function aspectRatio(val) {
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

function aspectMode(val) {
    this.getResult = function () {
        if (val === "cover")
            return "AspectMode.Cover";
        if (val === "fit")
            return "AspectMode.Fit";
        return "";
    };
}

function weight(val) {
    this.getResult = function () {
        if (val === "regular")
            return "Weight.Regular";
        if (val === "bold")
            return "Weight.Bold";
        return "";
    };
}

function buttonHeight(val) {
    this.getResult = function () {
        if (val === "sm")
            return "ButtonHeight.Sm";
        if (val === "md")
            return "ButtonHeight.Md";
        return "";
    };
}

function buttonStyle(val) {
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

function componentSize(val) {
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

function dateTimePickerMode(val) {
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

function altUri(val) {
    this.getResult = function () {
        return "new AltUri(\"" + val + "\")";
    };
}

function value(val) {
    this.getResult = function () {
        return val;
    };
}

function text(val) {
    this.getResult = function () {
        return "\"" + val + "\"";
    };
}

//---------- Prop 轉換器 ----------