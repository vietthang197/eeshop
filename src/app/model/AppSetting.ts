export class AppSetting {
  public static SERVER_HOST = 'https://agile-forest-42101.herokuapp.com/';
  public static SERVER_API = AppSetting.SERVER_HOST + 'api/';
  public static SERVER_API_ADMIN = AppSetting.SERVER_HOST + 'admin/api/';


  // api authentication
  public static API_URL_REGISTER = AppSetting.SERVER_API + 'user/register';
  public static API_URL_LOGIN = AppSetting.SERVER_HOST + 'login';
  // api category
  public static ADMIN_API_URL_CATEGORY_findAllCategoryProduct = AppSetting.SERVER_API_ADMIN + 'category-product/get-all-category';
  public static ADMIN_API_URL_CATEGORY_createNewCategoryProduct = AppSetting.SERVER_API_ADMIN + 'category-product/create-new-category';

}
