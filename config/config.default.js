/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632111171422_6113';

  // add your middleware config here
  config.middleware = [];
  // 天气接口配置
  config.weather = {
    appid: '757a7effe9ef63aa64fd34b9b0e44210',
  };
  // 测试 微信公众号
  config.weChat = {
    appld: 'wx2b8036a6d579b754',
    secret: 'a6df1661f780c571da013b83c26f59d4',
    // 用户的openid
    users: [
      'o5oZ96VakDjgj1vrfxMEH3nNG6D0',
    ],
    daily: '8O1XiSe_EZkOlwLqyPo3chmgc1lXgich2wYN89I09uA', // 普通模板
    marry: '********************', // 结婚纪念日模板
    wageDay: '*****************', // 工资日模板
    birthday: '**************************', // 生日模板
  };

  // 时间
  config.time = {
    wageDay: 15, // 工资日
    love: '2017-06-09', // 相爱日期
    marry: '2020-11-27', // 结婚纪念日
    // 生日配置
    // 老家过阴历生日，这里暂时写死
    birthday: {
      2021: '2021-04-21',
      2022: '2022-01-06',
      2023: '2023-02-25',
      2024: '2024-03-14',
      2025: '2025-04-03',
      2026: '2026-05-22',
    }, // 每年生日 阳历
    birthYear: 1992,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
