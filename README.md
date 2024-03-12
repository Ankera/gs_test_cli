# gs_test_cli

### Node
```
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@lerna/create@8.1.2',
npm WARN EBADENGINE   required: { node: '>=18.0.0' },
npm WARN EBADENGINE   current: { node: 'v16.14.0', npm: '8.3.1' }
npm WARN EBADENGINE }

Node 必须18版本以上
```

### 新增包
```
lerna create @zimu_test/command
```

### 安装依赖
```
npm install lodash --save  -w @zimu_test/pc_base
```


### 发布上线
```json
// 必须包含bin
"files": [
  "lib",
  "bin"
],
```