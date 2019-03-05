var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var methods = require('./methods.js');

// 文件和路径
var projectRoot = process.cwd();
var apiInterfacesPath = path.join(projectRoot, './src/api/src/interfaces');
var templatePath = path.join(projectRoot, './make/apiTemplate');

// 处理
methods.forEach(item => {
  var method = item.method;
  var wxParam = item.wxParam;
  var methodPath = path.join(apiInterfacesPath, method);

  try {
    // 复制一份方法文件夹
    fse.copySync(templatePath, methodPath);
    // 替换${method}处为方法名
    relacePlaceholder(path.join(methodPath, './index.js'), method);
    relacePlaceholder(path.join(methodPath, './index.interface'), method);
    // 替换index.js里的默认参数
    relacewWxParam(path.join(methodPath, './index.js'), wxParam);
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

/**
 * 处理index.js里的参数
 * @param {String} filePath 文件路径
 * @param {Object} wxParam 参数
 */
function relacewWxParam(filePath, wxParam) {
  var content = fs.readFileSync(filePath).toString('utf8');

  // 处理解构默认值
  var wxParamDefaultText = ``;
  wxParam.forEach((p, i) => {
    var defaultValue = p.default;
    if (typeof defaultValue == 'string') {
      if (!defaultValue) {
        defaultValue = `''`;
      } else {
        defaultValue = `\'${defaultValue}\'`;
      }
    }
    lastFH = i == wxParam.length - 1 ? '' : '\r\t\t'
    wxParamDefaultText = wxParamDefaultText + `${p.name} = ${defaultValue},${lastFH}`;
  })
  content = content.replace(/\$\{wxParamWithType\}/g, wxParamDefaultText);

  // 传递解构默认值
  var wxParamNameText = ``;
  wxParam.forEach((p, i) => {
    lastFH = i == wxParam.length - 1 ? '' : '\r\t\t'
    wxParamNameText = wxParamNameText + `${p.name},${lastFH}`;
  })
  content = content.replace(/\$\{wxParamOnlyName\}/g, wxParamNameText);

  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}





