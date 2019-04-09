import { join } from 'path'

export default {
  viewPath: join(__dirname, '../views'),
  node_modules_path: join(__dirname, '../node_modules'),
  public_path: join(__dirname, '../public'),
  uploadDir: join(__dirname, '../public/uploads')
}
