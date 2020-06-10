# react-native-sandbox-checker

react-native-sandbox-checker is module for recognizing Sandbox environment at iOs platform only.

## Getting started

`$ npm install react-native-sandbox-checker --save`

### Mostly automatic installation

`$ react-native link react-native-sandbox-checker`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-sandbox-checker` and add `RNSandboxChecker.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSandboxChecker.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Usage
```javascript
import { isSandbox } from 'react-native-sandbox-checker';

// ...

if (isSandbox()) {
    // Do your business here
}
```
