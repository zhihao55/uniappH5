import { http } from '@/utils/http';
/**
 * 用户登录接口（短信验证码方式）
 */
export const shopData = () => {
  return http.get('/post/list');
}
