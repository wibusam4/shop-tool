const config = {
  PORT: process.env.PORT || 5000,
  POSTGRES_DATABASE_URL: process.env.POSTGRES_DATABASE_URL || 'link',
  JWT_SECRET_KEY: process.env.JWT_SECRET || 'wibu@sama!21*04&'
}

export default config
