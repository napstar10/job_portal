export default {
  development : {
    pgConfig : {
      database : "job_portal",
      username : "****",
      password : "****",
      host : '****',
      port  : 5432,
      dialect: "postgres"
    }
  },
  staging : {
    pgConfig : {
      username : "postgres",
      password : "****",
      host : '',
      port  : 5432,
      dialect: "postgres"
    }
  },
  production : {
    pgConfig : {
      username : "postgres",
      password : "****",
      host : '',
      port  : 5432,
      dialect: "postgres"
    }
  }
}