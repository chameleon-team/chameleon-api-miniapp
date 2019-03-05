var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var methods = require('./config.js');

var apiInterfacesPath = path.join(__dirname, './src/api/src/interfaces');
var templatePath = path.join(__dirname, './make/apiTemplate');

// 处理
methods.forEach(method => {
  var methodPath = path.join(apiInterfacesPath, method);
  try {
    // 复制一份方法文件夹
    fse.copySync(templatePath, methodPath);
    // 替换${method}处为方法名
    relacePlaceholder(path.join(methodPath, './index.js'), method);
    relacePlaceholder(path.join(methodPath, './index.interface'), method);
    // 替换${wxParam}处的默认参数
  } catch (e) {
    console.log(e);
  }
})

/**
 * 替换文件占位符内容
 * @param {String} filePath 文件路径
 * @param {String} method 方法名
 */
function relacePlaceholder(filePath, method) {
  var content = fs.readFileSync(filePath).toString('utf8');
  content = content.replace(/\$\{method\}/g, method);
  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}





