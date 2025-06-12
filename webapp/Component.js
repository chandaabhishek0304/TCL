sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/fiori/iteos/objectpage/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.fiori.iteos.objectpage.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");


            //set the Helper Model

            this.setModel(models.createHelperModel(), "helper");



            // enable routing
            this.getRouter().initialize();
        }
    });
});