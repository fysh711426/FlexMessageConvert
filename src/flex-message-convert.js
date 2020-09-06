/*
type:
    C#  -> 'csharp'
    PHP -> 'php'
*/
var flexMessageConvert = function(type) {
    switch (type) {
        case 'csharp':
            return flexMessageConvertCSharp;
        case 'php':
            return flexMessageConvertPHP;
    }
};