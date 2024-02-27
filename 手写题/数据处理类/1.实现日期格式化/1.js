/**
 * @Date        2024/02/26 14:34:41
 * @Author      zono
 * @Description 
 * */
/**
 * 日期格式化
 * @param {Date} date 日期,Date实例，有getMonth、getDate等方法
 * @param {string}fmt yyyy会被替换为年，MM会被替换为月，dd会被替换为日
 * @returns
 * */
const dateFormat = (date, fmt) => {
  var day = date.getDate(); //获取日
  var month = date.getMonth() + 1; //获取月
  var year = date.getFullYear(); //获取年
  fmt = fmt.replace(/yyyy/, year);
  fmt = fmt.replace(/MM/, month);
  fmt = fmt.replace(/dd/, day);
  return fmt;
};

dateFormat(new Date(), "yyyy/MM/dd"); // 2006-07-02 08:09:04.423
