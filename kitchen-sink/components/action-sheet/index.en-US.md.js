webpackJsonp([138,141],{568:function(e,t){e.exports={content:["section",["p","The modal box pops up from the bottom, providing more than two actions related to the current scene, and also support provide the title and description. Built-in fixed display style, does not support particularly flexible changes."],["h3","Rules"],["ul",["li",["p","Provide a clear exit button."]],["li",["p",'Can highlight the destructive operation, e.g. "delete" use red text.']],["li",["p","Do not place too much content to avoid vertical roll of the panel."]]]],meta:{category:"Components",type:"Feedback",title:"ActionSheet",filename:"components/action-sheet/index.en-US.md"},api:["section",["h2","API"],["p","Support WEB, React-Native."],["h4","static showActionSheetWithOptions(options: Object, callback: Function)"],["p","Display a action sheet. The ",["code","options"]," object must contain one or more of:"],["ul",["li",["p","options (array of strings) - a list of button titles (required)"]],["li",["p","cancelButtonIndex (int) - index of cancel button in ",["code","options"]]],["li",["p","destructiveButtonIndex (int) - index of destructive button in ",["code","options"]]],["li",["p","title (string) - a title to show above the action sheet"]],["li",["p","message (string/React.element) - a message to show below the title"]],["li",["p","maskClosable (bool)(",["code","web only"],") - Whether it's allowed to close when you click the mask (default true)"]]],["p","The ",["code","callback"]," function support returns Promise (",["code","web only"],")"],["h4","static showShareActionSheetWithOptions(options: Object, callback: Function)"],["p","Display shareable action sheet. The ",["code","options"]," object must contain one or more of:"],["ul",["li",["p","options (array of ",["code","{icon: ReactNode, title: string}"],") - a list of share buttons (required)"],["ul",["li",["p","It can be a two-dimensional array, can display multi-line buttons, e.g. ",["code","[[{icon,title},...],...]"]," means two rows and two columns. In this case there are two parameters on ",["code","callback"],", the first for the ",["code","column"]," sequence, the second for the ",["code","line"],"."]]]],["li",["p","cancelButtonText (string)(",["code","web only"],") - the text of cancel button, default ",["code","\u53d6\u6d88"]]],["li",["p","title (string) - a title to show above the action sheet"]],["li",["p","message (string/React.element) - a message to show below the title"]],["li",["p","maskClosable (bool)(",["code","web only"],") - Whether it's allowed to close when you click the mask (default true)"]]],["p","The ",["code","callback"]," function support returns Promise (",["code","web only"],")"],["h4","static showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)"],["p",["code","React-Native only, react-native@version >= 0.39"]],["p","Display shareable action sheet."],["ul",["li",["p",["strong","options:"]],["ul",["li",["p","message(",["code","string"],"): a message to share"]],["li",["p","title(",["code","string"],"): title of the message"]],["li",["p","url(",["code","string"],"): an URL to share ",["code","iOS only"]]],["li",["p","excludedActivityTypes(",["code","array"],"): the activities to exclude from the ActionSheet ",["code","iOS only"]]]]],["li",["p",["strong","Callback"],": (",["code","iOS only"],", see ",["a",{title:null,href:"https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80"},"react-native/share"],")"],["ul",["li",["p","failureCallback(error): callback is called if share failed;"]],["li",["p","successCallback(completed, method): callback is called if share successed;"]]]]],["h4","static close() - (web\u3001android only) programmatically close."]]}}});