# 分析工具设置指南

## 🎯 需要替换的配置

### 1. Google Analytics 4 (GA4)
在 `src/app/layout.tsx` 文件中找到：
```javascript
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

替换为您的实际测量ID，例如：
```javascript
const GA_MEASUREMENT_ID = "G-ABC123DEF4";
```

### 2. Google Search Console
在 `src/app/layout.tsx` 文件中找到：
```javascript
verification: {
  google: "your-google-search-console-verification-code-here",
},
```

替换为您的实际验证码，例如：
```javascript
verification: {
  google: "abc123def456ghi789jkl012",
},
```

## 📊 设置步骤

### Google Analytics 4
1. 访问 https://analytics.google.com/
2. 创建账户和媒体资源
3. 添加网站数据流：https://www.yellowdragonfruit.org
4. 复制测量ID (格式：G-XXXXXXXXXX)
5. 替换代码中的占位符

### Google Search Console  
1. 访问 https://search.google.com/search-console/
2. 添加资源：https://www.yellowdragonfruit.org
3. 选择HTML标记验证方法
4. 复制meta标签中的content值
5. 替换代码中的占位符

## ✅ 验证安装

替换代码后：
1. 重新部署网站到Vercel
2. 等待5-10分钟
3. 在GA4中查看实时报告
4. 在Search Console中验证所有权

## 🚀 部署更新

替换配置后运行：
```bash
npm run build
```

然后推送到Git，Vercel会自动重新部署。 