({
    onload: function(component){
        var pageRef = component.get("v.pageReference")
        var id = pageRef.state.c__id
        component.set("v.id",id)
    },
    //child lwc
    receiveData: function(component, event) {
        var msg = event.getParam('msg')
        component.set("v.message",msg)
    },
    //received message from LMS
    handleMessage:function(component,message){
        //alert(JSON.stringify(message))

        if(message != null){
            let params = message.getParams();
            if(params.channeldata){
                let channelData = params.channeldata
                component.set("v.nameReceived", channelData.name)
            component.set("v.messageReceived", channelData.msg)
            }
        }
       /* if(message._params && message._params.channeldata){
            let channelData = message._params.channeldata;
            component.set("v.nameReceived", channelData.name)
            component.set("v.messageReceived", channelData.msg)
        } */  
    },
    //publish process
    nameInputHandler:function(component,event){
        console.log(event.target.value)
        component.set("v.namepublishValue",event.target.value)
    },
    messageInputHandler:function(component,event){
        console.log(event.target.value)
        component.set("v.msgpublishValue",event.target.value)
    },
    publishMessage:function(component){
        let namefeedback = component.get("v.namepublishValue")
        let msgfeedback = component.get("v.msgpublishValue")
        let message = {
            channeldata:{
                name:namefeedback,
                msg:msgfeedback
            }
        }
        //channel reference
        component.find("SampleMessageChannel").publish(message)
    }
})
