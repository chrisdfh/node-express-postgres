
const model = require('./model/Persona')
const Pool = require('pg').Pool
const pool = new Pool({
    user:process.env.USERDB,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    database:process.env.DB,
    port:process.env.PORT
})

const getUsers = (req,res)=>{
    pool.query('select * from kns_tag',(err,results)=>{
        if(err){
            throw err
        }
        var data =[] 
        results.rows.forEach(r=>{
            console.log(`nropersona: ${r}`)
        })
        res.status(200).json(results.rows)
    })
}
const getUser = (req,res)=>{
    const codnip = req.params.tag_cod
    pool.query('select * from kns_tag where tag_cod = $1',[codnip],(err,results)=>{
        if(err){
            throw err
        }
        if (results.rows.length > 0){
            resJson = results.rows[0]
            const p = new model.Tag(
                resJson.ciaopr,
                resJson.tag_cod,
                resJson.tag_desc
            ) 
            res.status(200).send(`Leí ${p.tag_cod}, ${p.tag_desc}`)
        } else {
            res.status(404).send(`No existe ${codnip}`)
        }
    })
}
const createUser = (req,res)=>{
    const {ciaopr,tag_cod,tag_desc} = req.body

    pool.query('insert into kns_tag (ciaopr,tag_cod,tag_desc) values ($1,$2,$3) returning *',[ciaopr,tag_cod,tag_desc],(err,results)=> {
        if(err){
            throw err
        }
        console.log(results)
        res.status(201).send(`Tag añadido ${results.rows[0].tag_cod}`)
    }
    )
}
const updateUser = (req,res)=>{
    const {ciaopr,tag_cod,tag_desc} = req.body

    pool.query('update kns_tag set ciaopr = $1, tag_cod $2,tag_dec=$3 where id = ciaopr = $1 and tag_cod $2',[ciaopr,tag_cod,tag_desc],(err,results)=>{
        if(err){
            throw err
        }
        res.status(200).send(`Persona actualizada con id ${results}`)

    })
}
const deleteUser = (req,res)=>{
    const id = req.params.tag_cod
    console.log(`eliminando ${id}`)
    pool.query('delete from kns_tag where tag_cod = $1',[id],(err,results)=>{
        if(err){
            throw err
        }
        res.status(200).send(`Tag eliminado`)
    })
}
module.exports={
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}