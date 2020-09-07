# FlexMessageConvert  

這是一個 **「Flex Message 轉換器」**，可以將 JSON 結構轉成 C# 或 PHP 程式。  

* C# 使用的 SDK [LineMessagingApi](https://github.com/pierre3/LineMessagingApi)。  
* PHP 使用的 SDK [line-bot-sdk-php](https://github.com/line/line-bot-sdk-php/)。  

---  

### 用法 - C#  

#### 1. 在程式中引用 js 檔案  

```HTML
<script src="flex-message-convert-csharp.js"></script>
```

#### 2. 呼叫 flexMessageConvertCSharp() 函數  

```JS
$(function() { 
    $("#btn").click(function() { 
        $("#output").val(flexMessageConvertCSharp($("#input").val()));
    });
}); 
```

### 線上測試  

**JSFiddle 網址:**  
[https://jsfiddle.net/hbfwuzc6](https://jsfiddle.net/hbfwuzc6)  

**結果:**  

![https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1580973499051.jpg](https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1580973499051.jpg)  

---  

### 用法 - PHP  

#### 1. 在程式中引用 js 檔案  

```HTML
<script src="flex-message-convert-php.js"></script>
```

#### 2. 呼叫 flexMessageConvertPHP() 函數  

```JS
$(function() { 
    $("#btn").click(function() { 
        $("#output").val(flexMessageConvertPHP($("#input").val()));
    });
});
```

### 線上測試  

**JSFiddle 網址:**  
[https://jsfiddle.net/q95z6t3e](https://jsfiddle.net/q95z6t3e)  

**結果:**  

![https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1599405940919.jpg](https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1599405940919.jpg)  