class Tag {
    constructor(ciaopr,
                tag_cod,
                tag_desc) {
        this.ciaopr = ciaopr,
        this.tag_cod = tag_cod,
        this.tag_desc = tag_desc
    }
}

module.exports.Tag = Tag

// ciaopr character varying(3) COLLATE pg_catalog."default" NOT NULL,
// nropersona integer NOT NULL,
// tipnip character varying(3) COLLATE pg_catalog."default" NOT NULL,
// codnip character varying(32) COLLATE pg_catalog."default" NOT NULL,
// tipnit character varying(3) COLLATE pg_catalog."default",
// nronit character varying(32) COLLATE pg_catalog."default",
// nombreprimero character varying(64) COLLATE pg_catalog."default",
// nombresegundo character varying(64) COLLATE pg_catalog."default",
// apellidoprimero character varying(64) COLLATE pg_catalog."default",
// apellidosegundo character varying(64) COLLATE pg_catalog."default",
// apellidocasada character varying(64) COLLATE pg_catalog."default",
// prefijo character varying(16) COLLATE pg_catalog."default",
// sufijo character varying(16) COLLATE pg_catalog."default",
// nombrecompleto character varying(255) COLLATE pg_catalog."default" NOT NULL,
// nombrecorto character varying(128) COLLATE pg_catalog."default" NOT NULL,
// apodo character varying(255) COLLATE pg_catalog."default",
// imprimeapodo character varying(1) COLLATE pg_catalog."default" DEFAULT 'N'::character varying,
// nombrepersjuridica character varying(255) COLLATE pg_catalog."default",
// siglaspersjuridica character varying(128) COLLATE pg_catalog."default",
// sexocod character varying(16) COLLATE pg_catalog."default",
// edocivilcod character varying(16) COLLATE pg_catalog."default",
// idiomanativocod character varying(16) COLLATE pg_catalog."default",
// ocupactivcod character varying(16) COLLATE pg_catalog."default",
// localidadcodnac character varying(32) COLLATE pg_catalog."default",
// tratamientocod character varying(16) COLLATE pg_catalog."default",
// nacionalidadcod character varying(16) COLLATE pg_catalog."default",
// fechanacimiento character varying(10) COLLATE pg_catalog."default",
// fechadefuncion character varying(10) COLLATE pg_catalog."default",
// email1 character varying(128) COLLATE pg_catalog."default",
// email2 character varying(128) COLLATE pg_catalog."default",
// paginaweb character varying(128) COLLATE pg_catalog."default",
// contacto character varying(64) COLLATE pg_catalog."default",
// capital numeric(18,2),
// campousuariochar_1 character varying(255) COLLATE pg_catalog."default",
// campousuariochar_2 character varying(255) COLLATE pg_catalog."default",
// campousuariochar_3 character varying(255) COLLATE pg_catalog."default",
// campousuariochar_4 character varying(255) COLLATE pg_catalog."default",
// campousuariochar_5 character varying(255) COLLATE pg_catalog."default",
// campousuarionum_1 numeric(18,2),
// campousuarionum_2 numeric(18,2),
// campousuarionum_3 numeric(18,2),
// campousuarionum_4 numeric(18,2),
// campousuarionum_5 numeric(18,2),
// nombrecompletoupp character varying(255) COLLATE pg_catalog."default",
// capitalpagado numeric(18,2),