
pay.addEventListener("click", function(e) {

    // 使用jQuery
    $.ajax({
        url: "http://jack.com:8002/pay",
        jsonp: "callback",
        dataType: "jsonp",
        success: function( response ) {
            if(response.success) {
                amount.innerText = response.amount;
            }
        }
    });

    // 不使用jQuery

    // var script = document.createElement('script');
    // var functionName = "jason" + Math.floor(Math.random() * 100000, 10);
    // window[functionName] = function(result) {
    //     if(result.success) {
    //         amount.innerText = result.amount;
    //     }
    // }
    // script.src = `http://jack.com:8002/pay?callbackName=${functionName}`;
    // document.body.appendChild(script);
    // script.onload = function(e) {
    //     e.currentTarget.remove();
    //     delete window[functionName];
    // };
    // script.onerror = function(e) {
    //     alert("打钱失败！");
    //     e.currentTarget.remove();
    //     delete window[functionName];
    // };
});


