/*window.addEventListener("load", function() {*/
    window.ee_form_widget_baseurl = "https://eewidget.extraaedge.com/staging/";
    if (!document.getElementById("__formWidgetCss")) {
        var e = document.createElement("link");
        e.id = "__formWidgetCss",
        e.rel = "stylesheet",
        e.href = window.ee_form_widget_baseurl + "css/stylesheet.min.css",
        e.type = "text/css"
		document.getElementsByTagName("head")[0].appendChild(e);
    }
    var t = document.createElement("script");
    t.type = "text/javascript",
    t.onload = async function() {
        _eeFormWidget = new eeFormWidget,
            await _eeFormWidget.init("mitadt", "form-3", "ee-form-3")
        /*await _eeFormWidget.init("admission-dsu23", "form-1", "ee-form-1").then(async function() {
            _eeFormWidget_clone = new eeFormWidget,
            await _eeFormWidget_clone.init("admission-dsu23", "form-1", "ee-form-1")
        }).catch(e=>{
            console.log(e)
        }
        )*/
    }
    ,
    t.src = window.ee_form_widget_baseurl + "js/eeFormWidget.min.js",
    document.getElementsByTagName("head")[0].appendChild(t)
/*});*/
