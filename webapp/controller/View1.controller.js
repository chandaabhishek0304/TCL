sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.fiori.iteos.objectpage.controller.View1", {
        onInit() {
            this.retriveData();
        },

        retriveData:function(){
         const oModel=this.getOwnerComponent().getModel("helper");
         let oBusinessDivision=oModel.getProperty("/formData/businessDivision");
         let oCustomerCode= oModel.getProperty("/formData/customerCode");
         let oDistChanel= oModel.getProperty("/formData/distChanel");
         let oEbdtm= oModel.getProperty("/formData/ebdtm");
         let oSalesGroup= oModel.getProperty("/formData/salesGroup");
          let oSalesOffice= oModel.getProperty("/formData/salesOffice");




        }
        
    });
});