sap.ui.define(["sap/ui/test/Opa5"],function(t){"use strict";return t.extend("ui5con.ui5con.test.integration.arrangements.Startup",{iStartMyApp:function(t){var n=t||{};n.delay=n.delay||50;this.iStartMyUIComponent({componentConfig:{name:"ui5con.ui5con",async:true},hash:n.hash,autoWait:n.autoWait})}})});