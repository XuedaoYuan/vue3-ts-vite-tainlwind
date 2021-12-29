const axios = require('axios');

async function foo() {
  try {
    const res = await axios.post(
      'http://driver.wlhyos.test.xiaokuaikeji.com/vas/portal/driver/oss/generate_url',
      {
        filename: 'xx.jpg'
      },
      {
        headers: {
          version: 'xiaochengxu',
          'X-Mutex-Login': 'mobile,driver,wechat,mini_program', //小程序登录互踢
          'X-Real-User': 'true',
          'X-Requested-With': 'MiniProgramRequest', //portal请求时要求的标识
          'X-OAuth-Session-Token':
            'YWRmYTA5YTMtMWQyZi00Yjk1LWEyZjktZTUxMzk4NDMyYzVj',
          'X-Portal-Session-Token':
            'MTE2OThmODYtMmYwOS00MWUzLTkzODYtZWJmYmE5NGM2Y2I0'
        }
      }
    );
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}


foo()
