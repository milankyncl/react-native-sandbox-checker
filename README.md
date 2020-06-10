# react-native-sandbox-checker

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

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSandboxCheckerPackage;` to the imports at the top of the file
  - Add `new RNSandboxCheckerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-sandbox-checker'
  	project(':react-native-sandbox-checker').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-sandbox-checker/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-sandbox-checker')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSandboxChecker.sln` in `node_modules/react-native-sandbox-checker/windows/RNSandboxChecker.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Sandbox.Checker.RNSandboxChecker;` to the usings at the top of the file
  - Add `new RNSandboxCheckerPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import { isSandbox } from 'react-native-sandbox-checker';

// ...

if (isSandbox()) {
    // Do your business here
}

// TODO: What to do with the module?
RNSandboxChecker;
```
