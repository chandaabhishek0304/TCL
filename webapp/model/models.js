sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createHelperModel:function(){
            return new JSONModel({
               
                    formData:{
                    "businessDivision": "Consumer Goods",
                    "distChanel": "Online",
                    "salesGroup": "North Region",
                    "salesOffice": "Mumbai",
                    "customerCode": "CUST00123",
                    "ebdtm": "2025-06-15"
                    },
                "tableData": [
                {
                "businessDivision": "Consumer Goods",
                "distChanel": "Online",
                "salesGroup": "North Region",
                "salesOffice": "Mumbai",
                "customerCode": "CUST00123",
                "ebdtm": "2025-06-15"
                },
                {
                "businessDivision": "Healthcare",
                "distChanel": "Retail",
                "salesGroup": "West Region",
                "salesOffice": "Pune",
                "customerCode": "CUST00456",
                "ebdtm": "2025-07-01"
                },
                {
                "businessDivision": "Electronics",
                "distChanel": "Wholesale",
                "salesGroup": "South Region",
                "salesOffice": "Bangalore",
                "customerCode": "CUST00789",
                "ebdtm": "2025-08-10"
                }
                ]

            });
        }
    };

});