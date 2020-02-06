# FlexMessageConvert  

這是一個 **「Flex Message 轉換器」**，可以將 JSON 結構轉成 C# 程式。  

使用的 SDK 是 [LineMessagingApi](https://github.com/pierre3/LineMessagingApi)。  

---  

### 用法  

#### 1. 在程式中引用 js 檔案  

```HTML
<script src="flex-message-convert.js"></script>
```

#### 2. 呼叫 flexMessageConvert() 函數  

```JS
$(function() { 
    $("#btn").click(function() { 
        $("#output").val(flexMessageConvert($("#input").val()));
    });
}); 
```

---  

### 線上測試  

**JSFiddle 網址:**  
[https://jsfiddle.net/cuvyjbt0/2](https://jsfiddle.net/cuvyjbt0/2)  

**結果:**  

![https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1580973499051.jpg](https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1580973499051.jpg)  

---  

### 設計思路  

我照著 Flex Message 結構設計了各種轉換器，他們彼此可以組成一個樹狀結構，每個節點有 **getResult()** 函數，可以傳回該節點和其所有子節點的轉換結果。  

**示意圖:**  

![https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1580970269058.jpg](https://github.com/fysh711426/FlexMessageConvert/blob/master/image/1580970269058.jpg)  