({
    handleClick : function(cmp, event, helper) {

        alert('you clicked ' + event.getSource().get("v.label"))

        if((event.getSource().get("v.label")) == 'Saving..'){
            var isActive = cmp.get("v.isActive");
            if(isActive == false){
                cmp.set("v.isActive", true);
                
            }
        }
    }
})
