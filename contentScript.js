console.log("您好 这里是 content Script！！")

document.designMode = "on";
// 为 document 对象设置复制事件的监听器
document.oncopy= function(e) {
    // 'e' 是事件对象，包含了事件的相关信息
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('复制事件被触发');
  
    // 你可以在这里执行一些操作，例如记录日志、更新 UI 等
    // 例如，获取选中的文本
    var clipboardData = e.clipboardData || window.clipboardData;
    var copiedText = document.getSelection().toString();
  
    // 可以对 copiedText 进行一些处理，或者直接使用它
    console.log('复制的内容是:', copiedText);
  
    // 如果你想阻止默认的复制操作，可以调用 e.stopImmediatePropagation() 或 e.preventDefault()
    // 注意：在某些浏览器中，调用 preventDefault() 可能不会阻止文本的复制
    // e.stopImmediatePropagation();
    // e.preventDefault();
  };