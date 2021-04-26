// export const ENVIRONMENT = "dev";
export const ENVIRONMENT = 'production';
// const HOST = "13.212.207.211"; //dev 13.212.207.211
// const HOST = "localhost"; //dev 13.212.207.211
const HOST = 'api.napa-solutions.com'; //production
const PORT = '3001';

const apiEnv = {
  production: `https://api.napa-solutions.com/admin/api`,
  dev: `http://${HOST}:${PORT}/admin/api`
};

export const API_CMS = apiEnv[ENVIRONMENT];
