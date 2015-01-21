    $(document).ready(function () {

        /* FLUID-5590: should not use window.location.origin since it will break with non-root installations */
        var domain = window.location.origin;
        fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
            "templatePrefix": domain + "/lib/infusion/src/framework/preferences/html/",
            "messagePrefix": domain + "/lib/infusion/src/framework/preferences/messages/",
            "tocTemplate": domain + "/lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
            components: {
                prefsEditorLoader: {
                    options: {
                        iframeRenderer: {
                            markupProps: {
                                src: domain + "/html/SeparatedPanelPrefsEditorFrame.html"
                            }
                        }
                    }
                }
            }
        });
    });
