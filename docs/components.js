module.exports = {
    components: {
        schemas: {
            Tag: {
                type: "object",
                properties: {
                    ciaopr: {
                        type: "string",
                        description: "# de ciaopr",
                        example: "1",
                    },
                    tag_cod: {
                        type: "string",
                        description: "Código del tag",
                        example: "avion",
                    },
                    tag_desc: {
                        type: "string",
                        description: "descripcion del tag",
                        example: "false",
                    },
                },
            },
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters",
                    },
                },
            },
        },
    },
};
