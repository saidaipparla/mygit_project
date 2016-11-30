{
    "description": "",
    "methods": [
        {
            "name": "addTooltip",
            "docblock": null,
            "modifiers": [],
            "params": [
                {
                    "name": "btn",
                    "type": null
                }
            ],
            "returns": null
        }
    ],
    "props": {
        "id": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "\"mapstore-zoom\"",
                "computed": false
            }
        },
        "style": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": ""
        },
        "glyphicon": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "\"plus\"",
                "computed": false
            }
        },
        "text": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": ""
        },
        "btnSize": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'large'",
                        "computed": false
                    },
                    {
                        "value": "'small'",
                        "computed": false
                    },
                    {
                        "value": "'xsmall'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'xsmall'",
                "computed": false
            }
        },
        "className": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "\"square-button\"",
                "computed": false
            }
        },
        "help": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "string"
                    },
                    {
                        "name": "element"
                    }
                ]
            },
            "required": false,
            "description": ""
        },
        "step": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "1",
                "computed": false
            }
        },
        "currentZoom": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "3",
                "computed": false
            }
        },
        "minZoom": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "0",
                "computed": false
            }
        },
        "maxZoom": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "28",
                "computed": false
            }
        },
        "onZoom": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "() => {}",
                "computed": false
            }
        },
        "tooltip": {
            "type": {
                "name": "element"
            },
            "required": false,
            "description": ""
        },
        "tooltipPlace": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "\"left\"",
                "computed": false
            }
        },
        "bsStyle": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "\"default\"",
                "computed": false
            }
        }
    }
}
